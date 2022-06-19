const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const meetingSchema = new Schema(
    {
        title:
        {
            type: String,
            required: true
        },
        date:
        {
            type: Number,
            required: true
        },
        time:
        {
            type: String,
            required: true
        },
        desc:
        {
            type: String,
            required: false
        },
        participants:
        {
            type: [String],
            required: true
        }
    }
);

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;