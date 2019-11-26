const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// BodyParser middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;
console.log(db);

// connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true})
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err));

// run server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}.`));