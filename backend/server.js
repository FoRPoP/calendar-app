const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => 
{
    console.log("MongoDB database connection established successfully!");
})

const meetingRouter = require('./routes/meetings');
app.use('/meetings', meetingRouter);

app.listen(port, () => 
{
    console.log(`Server is running on port: ${port}`);
})