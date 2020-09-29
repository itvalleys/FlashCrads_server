const mongoose = require('mongoose')

var courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: 'subject name cant be empty '
    },
    description: {
        type: String,
    },
    subjects: [
        {
            subjectName: { type: String },
            concepts: [
                {
                    conceptName: { type: String },
                    conceptId: { type: mongoose.Schema.Types.ObjectId, ref: 'concepts' },
                }
            ]
        }
    ]
});

module.exports = mongoose.model('Courses', courseSchema);