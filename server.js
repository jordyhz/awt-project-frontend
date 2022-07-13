
//Install express server
const express = require('express');
const path = require('path');
const http = require('http')
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/NaxyShare'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/NaxyShare/index.html'));
});

// Start the app by listening on the default Heroku port

const PORT = process.env.PORT || 9999
const server = http.createServer(app).listen(PORT, () => console.log('server is running 9999'))
