const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
let helmet = require("helmet");
app.listen(PORT,(req,res)=>{
  console.log('Server port ${PORT} is running')
}














































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
