//doing the day

var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

$("#currentDay").html(date);

//saving stuff

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var timeS = $(this).parent().attr("id");
        
        localStorage.setItem(timeS, text);
    })

//time now

function checkHour() {
    var currentTime = moment().hour();

    $(".time-block").each(function () {
        var block = parseInt($(this).attr("id").split("hour")[1]);

//did the time pass or is it still coming

if(block < currentTime){
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");

}

else if(block === currentTime){
    $(this).removeClass("future");
    $(this).addClass("present");
    $(this).removeClass("past");


}
else {
    $(this).addClass("future");
    $(this).removeClass("present");
    $(this).removeClass("past");

}})}

//local storage

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));

checkHour();
})
