var timeDate = $('#time-date');
var userInput = $('#user-input');
var eventItem = $('#event-item');
var saveButton = $('#button-addon2');
var timeNow = moment().format("hh a");



function showTime() {
    var whatTime = moment().format('dddd, MMMM Do, YYYY');
    timeDate.text(whatTime);

}

$(document).ready(function () {
    var $eventInput = $('#user-input');
    if (userInput === "") {
        return;
    }
    else (localStorage.getItem("#user-input"))
    $eventInput.html(localStorage.getItem("#user-input"));

    $('button').click(function () {
        $eventInput.append($('#user-input').val());
        localStorage.setItem("#user-input", $eventInput.html());
    });

});
//function displayMessage()

//function handleInput(event) {
//  var userInput = $('#user-input').val;
//userInput = input;
//event.preventDefault();
//localStorage.setItem('input', 'input');
//printInput()
//}

//function printInput() {
//  var userInput = $('#user-input').val;
//localStorage.getItem('input');
//if (userInput === ""){
//  displayMessage("error", "Input is blank");
//}
//else {
//  displayMessage("success", "Your even is saved")
//}
//}
//console.log(printInput());

//$(function () {
//    $("#draggable").draggable();
//});

//var printInput = function (data) {
//  var inputLocat = $('<textarea>');
//   var inputDetail = data;
//   inputLocat.addClass('input-detail-item').text(inputDetail);
//   inputLocat.appendTo(userInput);
//}

//var handleInput = function (event) {
//event.preventDefault();

//var userInputData = userInput.val();
//
//if (userInputData) {


//}


//if (userInputData = "") {

//console.log('Form needs to be filled out');
// {
//      return;
// }
// };

//}


var timeManage = function () {

}




//saveButton.on('click', handleInput);





setInterval(showTime, 1000);
