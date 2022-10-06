//----------variables----------//

var day = "";
var month = "";
var year = "";
var currentDate = "";
var monthStartDay = "";

var monthTextArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dayTextArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//----------functions----------//

function getMonthInfo(year, month) {

  //use current month to find number of days in month
  //i dont know why i have to add 1 to month
  var startDate = new Date(year, month + 1, 0);
  var monthLength = startDate.getDate();
  
  var startDate = new Date(year, month, 1);
  var monthStartDay = startDate.getDay();
  
  return [monthLength, monthStartDay];
  
}

function drawCal(monthInfo) {

  var daysInMonth = monthInfo[0];
  var monthStartDays = monthInfo[1];
  
  //clear cal tbody
  $("#cal").empty();
  $("#cal").append("<tr><td>sun</td><td>mon</td><td>tue</td><td>wed</td><td>thur</td><td>fri</td><td>sat</td>");
  
  //create empty row, append to to tbody
  var $rowOut = $("<tr></tr>");
  $("#cal").append($rowOut);

  //shift first row by month start date
  for (var i = 1; i <= monthStartDays; i++) {
    var $day = "<td></td>";
    $("#cal tr:last").append($day);
  }
  
  //for each day, append a td to the row
  for (var i = 1; i <= daysInMonth; i++) {
    var $day = "<td><a>" + (i) + "</a></td>";
    $("#cal tr:last").append($day);

    //if day 7 (w/shift), append row contaning 7 days to tbody and clear row
    if ((i + monthStartDays) % 7 == 0 & i != 0) {
      $("#cal").append($rowOut);
      $rowOut = "<tr></tr>";
      $("#cal").append($rowOut);
    }
  }
}

//----------wiring----------//

$(".button_left").click(function() {

  month--;

  if (month < 0) {
    year--;
    month = 11;
  }

  //left button click
  $(".cal_head span").text(monthTextArray[month] + " " + year);
  drawCal(getMonthInfo(year, month));

});

//right button click
$(".button_right").click(function() {

  month++;

  if (month > 11) {
    year++;
    month = 0;
  }

  $(".cal_head span").text(monthTextArray[month] + " " + year);
  drawCal(getMonthInfo(year, month));

});

$("#cal").on("click","a",function(e) {
  
  e.preventDefault();
  //$(this).parent().addClass("circle");
  var outputDate = monthTextArray[month] + " " + $(this).html() +", " + year;
  console.log(outputDate);
  $("#outputText").text(outputDate);
  
});

//----------run----------//

//get current month and year
currentDate = new Date();
year = currentDate.getFullYear();
month = currentDate.getMonth();

//get text month name from month number and write to span
$(".cal_head span").text(monthTextArray[month] + " " + year);

//inital calander draw based on current month
drawCal(getMonthInfo(year, month));