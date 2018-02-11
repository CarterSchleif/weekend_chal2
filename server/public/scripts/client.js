console.log('js');
$(document).ready(function(){
console.log('jq');


$("#addButton").on('click', function(){

    addition();
});//end addition onClick


let additionObjectArray = [];

function addition(){

    let additionValueOne = Number($('#input1').val());
    let additionValueTwo = Number($('#input2').val());
        let additionObject = {
            value1: additionValueOne,
            value2: additionValueTwo,
            type: "add"
        };//end additionObject
    
additionObjectArray.push(additionObject); 
console.log(additionObjectArray);   

$.ajax({
    type: 'POST',
    url: '/addition',
    data: { AdditionArray: additionObjectArray }
}).done(function(response){
    console.log('worked');
getAnswer();
clearInputValue();
}).fail(function(response){
    console.log(response);
});//end addition POST

        }//end addition function

        function getAnswer(){
console.log('worked again');

$.ajax({
    type: 'GET',
    url: '/addition'
}).done(function(response){
    additionAnswer;
    console.log(additionAnswer);
}).fail(function(response){
    console.log('didnt work');
});//end addition GET

        }//end getAnswer function


function clearInputValue(){

$('#input1').val('');
$('#input2').val('');

}//end clearInputValue function

function displayAnswer(){

}//end displayAnswer




});//end on ready








