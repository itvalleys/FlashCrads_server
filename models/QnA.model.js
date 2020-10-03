const mongoose = require('mongoose')

var QnASchema = new mongoose.Schema({

    conceptId: { type: mongoose.Schema.Types.ObjectId, ref: 'concept' },
    createdAt: { type: Date, default: Date.now() },
    QnA: [
        {
            Questions: { type: String },
            Answers: { type: String }
        }
    ],
    traildata: [
        {
            Questions: { type: String },
            Answers: { type: String }
        }
    ],
});

module.exports = mongoose.model('QnA', QnASchema);