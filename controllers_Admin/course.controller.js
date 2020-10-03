const course = require('../models/Course.model')

module.exports = {
    async postCourse(req, res) {
        console.log(req.body);
        let newcourse = {
            courseName: req.body.courseName,
            description: req.body.description,

        }
        course.create(newcourse)
            .then(record => {
                console.log(record);
                res.status(200).json({ message: 'Course added', record });
                //UPDATE the subjects array
                console.log(req.body.subjects.length)
                for (i = 0; i < req.body.subjects.length; i++) {
                    course.update(
                        { _id: record._id },
                        {
                            $push: {
                                subjects: {
                                    courseId: record._id,
                                    subjectName: req.body.subjects[i]
                                }
                            }
                        }
                    )
                        .then(res => { })
                        .catch(err => { res.status(200).json({ message: 'error occured in updating the subjects', err }); })
                }
            })
            .catch(err => { res.status(200).json({ message: 'error occured', err }); })
    },

    async getCourse(req, res) {
        course.find({})
            .then(record => { res.status(200).json({ message: 'Courses got', record }); })
            .catch(er => { res.status(200).json({ message: 'error occured', err }); })

    },

    async getSinglecourse(req, res) {
        console.log(req.params)
        course.find({ _id: req.params.id })
            .then(record => { res.status(200).json({ message: 'Courses got', record }); })
            .catch(err => { res.status(200).json({ message: 'error occured', err }); })

    }
}