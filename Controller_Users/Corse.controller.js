const course = require('../models/Course.model');
const concept = require('../models/Concepts.model');
const question = require('../models/QnA.model');
const User = require('../models/user.model')

module.exports = {
    GetAllCourses(req, res) {
        course.find({})
            .then((record) => {

                res.status(200).json({ message: 'got courses', record })
            })
            .catch(err => {
                res.status(400).json({ message: 'went wrong in getting', err })
            })
    },

    async getsingleCourse(req, res) {

        course.find({ _id: req.params.id })
            .then((record) => {

                res.status(200).json({ message: 'got courses', record })
            })
            .catch(err => {
                res.status(400).json({ message: 'went wrong in getting', err })
            })
    },

    getConceptsofSubj(req, res) {
        console.log(req.params);
        concept.find({ subjectId: req.params.id })
            .then((record) => {

                res.status(200).json({ message: 'got concepts', record })
            })
            .catch(err => {
                res.status(400).json({ message: 'went wrong in getting', err })
            })
    },

    async getQueOfConcept(req, res) {
        console.log(req.params);
        question.find({ conceptId: req.params.id })
            .then(record => { res.status(200).json({ message: 'got question and answers', record }) })
            .catch(err => { res.status(400).json({ message: 'something went wrong', err }) })
    },

    async pushtofav(req, res) {
        console.log(req.body);
        console.log(req._id);
        User.find({
            $and: [
                { _id: req._id },
                { "favlist.coursename": req.body.cname }
            ]
        })
            .then(result => {
                console.log(result);
                if (result.length > 0) {
                    res.status(200).json({ message: 'already added to favourites', result })
                }
                else {
                    User.update({ _id: req._id },
                        {
                            $push: {
                                favlist: {

                                    coursename: req.body.cname,
                                    courseId: req.body.cid

                                }
                            }
                        })
                        .then((res) => { console.log(res) })
                        .catch((err) => { console.log(err) })
                }
            })

            .catch((err) => {
                res.status(400).json({ message: 'got error', err })
            })


    }
}