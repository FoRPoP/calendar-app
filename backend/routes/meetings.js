const router = require('express').Router();
let Meeting = require('../models/meetings.model')

router.route('/').get((req, res) => 
{
    console.log('meetings');

    Meeting.find()
        .then((meetings) => res.json(meetings))
        .catch((err) => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) =>
{
    console.log('meetings/add');

    const title = req.body.title;
    const date = Number(req.body.date);
    const time = req.body.time;
    const desc = req.body.desc;
    const participants = req.body.participants;
    console.log(participants);

    const newMeeting = new Meeting({
        title,
        date,
        time,
        desc,
        participants
    });

    newMeeting
        .save()
        .then(() => res.json('Meeting added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => 
{
    console.log('meeting/id');

    Meeting.findById(req.params.id)
        .then((meeting) => res.json(meeting))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => 
{
    console.log('meeting/id/delete');

    Meeting.findByIdAndDelete(req.params.id)
        .then(() => res.json('Meeting deleted!'))
        .catch((err) => res.status(400).json('Error: ' + err));
})

module.exports = router;