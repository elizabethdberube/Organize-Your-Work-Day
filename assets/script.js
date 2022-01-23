var timeDate = $('#time-date');
var timeNow = moment().format("hh a");




function showTime() {
    var whatTime = moment().format('dddd, MMMM Do, YYYY');
    timeDate.text(whatTime);

}
$('tbody tr').each(function () {

    var tr = $(this);
    var date_obj = moment(tr.find('th.hour').text());
    var storage_key = tr.find('th.hour').text();
    var user_input = tr.find("textarea.user-input");
    var save_button = tr.find("button");

    if (localStorage.getItem(storage_key))
        user_input.val(localStorage.getItem(storage_key));

    $(save_button).click(function () {
        localStorage.setItem(storage_key, user_input.val());

        if (date_obj < timeNow) {
            $("th").addClass("past");

        }

    });

});






setInterval(showTime, 1000);
