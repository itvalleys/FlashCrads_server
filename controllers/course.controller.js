const course = require('../models/Course.model')

module.exports = {
    async postCourse(req, res) {
        console.log(req.body);
        let newcourse = {
            courseName: req.body.name,
            description: req.body.desc
        }
        course.create(newcourse)
            .then(record => {
                res.status(200).json({ message: 'Course added', record });
            })
            .catch(err => { res.status(200).json({ message: 'error occured', err }); })
    }
}