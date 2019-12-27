const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

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
	// any URL that points to api/items will use the items variable above for the path name
app.use('/api/items', require('./routes/api/items'));

app.get('/', (req, res) => {
	// console.log("HELLO");
	res.send("HELLO");
});

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
	// set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// run server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}.`));