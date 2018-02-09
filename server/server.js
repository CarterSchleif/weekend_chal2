const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.listen(port, function(){
    console.log(`listening on port ${port}`);
});
