const course = require('../models/Course.model');
const concept = require('../models/Concepts.model');

module.exports = {
    async postConcept(req, res) {
        console.log(req.body);
        let newconcept = {

        }
        concept.create(newcourse)
            .then(record => {
                res.status(200).json({ message: 'concept added', record });
                //update the Course data base
            })
            .catch(err => { res.status(200).json({ message: 'error occured', err }); })
    }
}