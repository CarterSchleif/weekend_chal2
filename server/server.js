const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.post('/addition', function(request, response){
let additionArray = request.body.additionArray;
console.log(additionArray);
additionArray;
response.sendStatus(200);
});

app.get('/addition', function(request, response){
let additionAnswer = additionArray[0].value1 + additionArray[0].value2;
    console.log(additionAnswer);
    response.send(additionAnswer);
});




















app.listen(port, function(){
    console.log(`listening on port ${port}`);
});
