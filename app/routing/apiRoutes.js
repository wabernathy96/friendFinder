const path = require('path');


const friends = require('../data/friends.js');


module.exports = (app) => {
    
    console.log('API routes online');

    app.get ('/api/friends', (req,res) => {
        res.json(friends);
    });

    app.post ('/api/friends', (req,res) => {
        let userInput = req.body;

        let userScores = userInput.scores;
        
        let matchName = '';
        let matchImg = '';
        let totDiff = 1000;

        for(var i=0;i<friends.length;i++){
            // console.log(`friend = ${JSON.stringify(friends[i])}`)

            let diff = 0;
            
            for(let j=0;j<userScores;j++){
                diff += Math.abs(friends[i].scores[j] - userScores[j]);
            }

            if (diff < totDiff) {
                totalDiff = diff;
                matchName = friends[i].name;
                matchImg = friends[i].photo;
            }
        }
        friends.push(userInput);

        res.json({status: 'Working', matchName: matchName,  matchImg: matchImg});
    });

    
};