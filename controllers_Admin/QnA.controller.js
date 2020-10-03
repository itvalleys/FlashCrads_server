const course = require('../models/Course.model');
const concept = require('../models/Concepts.model');
const question = require('../models/QnA.model')

module.exports = {
    getQuestionsData(req, res) {
        console.log(req.params);
        question.find({ conceptId: req.params.id })
            .then(record => { res.status(200).json({ message: 'got question and answers', record }) })
            .catch(err => { res.status(400).json({ message: 'something went wrong', err }) })
    },
    async deleteoneque(req, res) {
        console.log(req.body)
        question.update({ "QnA._id": req.body.id },
            { $pull: { QnA: { _id: req.body.id } } }
        )
            .then(record => { res.status(200).json({ message: 'removed the single record', record }) })
            .catch(err => { res.status(400).json({ message: 'something went wrong', err }) })
    },

    async editSingleQue(req, res) {
        console.log(req.body);
        question.updateOne(
            { QnA: { $elemMatch: { _id: { $eq: req.body.id } } } },
            { $set: { "QnA.$.Questions": req.body.que } }
        )
            .then(record => { console.log(record) })
            .catch(err => { console.log(err) })
    }
}