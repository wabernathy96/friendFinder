const path = require('path');


const friends = require('../data/friends.json');


module.exports = (app) => {
    
    console.log('API routes online');

    app.get ('/api/friends', (req,res) => {
        res.json(friends);
    });

    app.post ('/api/friends', (req,res) => {
        
    });
};