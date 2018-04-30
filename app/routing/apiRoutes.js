const path = require('path');


const friends = require('../data/friends.js');


module.exports = (app) => {
    
    console.log('API routes online');

    app.get ('/api/friends', (req,res) => {
        res.json(friends);
    });

    app.post ('/api/friends', (req,res) => {
        var userInput = req.body;
		console.log('userInput = ' + JSON.stringify(userInput));
    });
};