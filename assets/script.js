var timeDate = $('#time-date');
var timeNow = moment().startOf('hour');



//function for displaying date
function showTime() {
    var whatTime = moment().format('dddd, MMMM Do, YYYY');
    timeDate.text(whatTime);

}

//function for saving events 
$('tbody tr').each(function () {

    var tr = $(this);
    var date_obj = moment(tr.find('th.hour').text(), 'h:mm A').startOf('hour');
    var storage_key = tr.find('th.hour').text();
    var user_input = tr.find("textarea.user-input");
    var save_button = tr.find("button");

    if (date_obj.isSame(timeNow)) {
        tr.addClass("present");

    }

    if (date_obj > timeNow) {
        tr.addClass("future");

    }

    if (date_obj < timeNow) {
        tr.addClass("past");

    }

    if (localStorage.getItem(storage_key))
        user_input.val(localStorage.getItem(storage_key));
    console.log(date_obj, timeNow);

    $(save_button).click(function () {
        localStorage.setItem(storage_key, user_input.val())


    });

});


setInterval(showTime, 1000);
