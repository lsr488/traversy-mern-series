const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
// @access Public

// bulk of URL is generated in the server.js file
router.get('/', (req, res) => {
	Item.find()
		.sort({ date: -1 })
		.then(items => res.json(items))
		.catch(err => console.log(err));
	// res.send("THIS IS THE /API/ITEMS ROUTE");
});

// @route POST api/items
// @desc Create A New Item
// @access Public
router.post('/', (req, res) => {
	const newItem = new Item({
		name: req.body.name
	});

	newItem.save().then(item => res.json(item));
});

module.exports = router;