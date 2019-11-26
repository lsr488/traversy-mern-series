const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// BodyParser middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI; // currently `./config/keys` is a .gitignored file, so this will break once it leaves my computer

// connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err));

// Use Routes
	// any URL that points to api/items will use the items variable abov for the path name
app.use('api/items', items);

// run server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}.`));