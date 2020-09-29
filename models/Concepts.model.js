const mongoose = require('mongoose')

var conceptSchema = new mongoose.Schema({

    conceptName: {
        type: String,
        required: 'subject name cant be empty '
    },
    description: {
        type: String,
    },
    subjectName: { type: String },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Courses' },
    questions: [
        {
            question: { type: String }
        }
    ],
    answers: [
        {
            answer: { type: String }
        }
    ]
});

module.exports = mongoose.model('concepts', conceptSchema);