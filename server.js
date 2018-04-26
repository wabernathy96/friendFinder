const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();
let PORT = 3000;

// Allow access to the public file
app.use(express.static(path.join(__dirname, './app/public')));

// Body-parser middleware for incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Join app routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start server listening on PORT 3000
app.listen(PORT, () => {
  console.log(`Friend Finder listening on port: ${PORT}`);
});



