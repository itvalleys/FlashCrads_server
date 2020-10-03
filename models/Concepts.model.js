const mongoose = require('mongoose')

var conceptSchema = new mongoose.Schema({

    conceptName: {
        type: String,
        required: 'subject name cant be empty '
    },
    description: {
        type: String,
    },
    locked: { type: Boolean, default: true },
    subjectName: { type: String },
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'subject' },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Courses' },
    createdAt: { type: Date, default: Date.now() },
    purchasedUsers: [
        { userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' } }
    ]

});

module.exports = mongoose.model('concept', conceptSchema);