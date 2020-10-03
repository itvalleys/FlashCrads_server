const course = require('../models/Course.model');
const concept = require('../models/Concepts.model');
const question = require('../models/QnA.model')

module.exports = {
    async postConcepts(req, res) {
        console.log(req.body);
        let newconcept = {
            conceptName: req.body.cname,
            description: req.body.desc,
            subjectName: req.body.sname,
            courseId: req.body.cid,
            subjectId: req.body.sid
        }
        concept.create(newconcept)
            .then(record => {
                console.log(record);
                res.status(200).json({ message: 'concept added', record });

                //creating the record for question and answers data
                let newquestion = {
                    conceptId: record._id
                }
                question.create(newquestion)
                    .then(result => {
                        //pushing the questions
                        question.update({ conceptId: record._id },
                            { $push: { QnA: { $each: req.body.obj } } }
                        )
                            .then(res => { console.log(res) })
                            .catch(err => { console.log(err) });
                    })
                    .catch(err => { console.log(err) })
            })
            .catch(err => { res.status(200).json({ message: 'error occured', err }); })
    },

    async getconceptsofsubject(req, res) {
        console.log(req.body)
        concept.find({
            $and: [
                { courseId: req.body.courseid },
                { subjectName: req.body.name }
            ]
        })
            .then((record) => {
                res.status(200).json({ message: ' got the concepts', record });
            })
            .catch(err => { res.status(200).json({ message: 'error occured', err }); })
        //finding the concept based on the  courseId
    },

    async postToTrail(req, res) {
        console.log(req.body);
        concept.update({ subjectId: req.body.sid },
            { $set: { locked: false } }
        )
            .then(record => {
                res.status(200).json({ message: ' got the concepts', record });
            })
            .catch(err => { res.status(200).json({ message: 'error occured', err }); });

    },

    async deletedoc(req, res) {
        console.log(req.body.id)
        concept.deleteOne({ _id: req.body.id })
            .then(record => { res.status(200).json({ message: ' got the concepts', record }); })
            .catch(err => { res.status(200).json({ message: 'error occured', err }); })
    }
}
