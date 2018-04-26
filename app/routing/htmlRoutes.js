const path = require('path');

module.exports = (app) => {

    console.log('HTML routes online');
    
    // Get home html file for default page
    app.get ('/', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    // Get survey html file for default page
    app.get ('/survey', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
     
};