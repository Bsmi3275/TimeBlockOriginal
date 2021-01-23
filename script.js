var date = new Date;
//the current moment is tracked and recognized via ".hour()"
var presentHour = moment().hour();
var presentTime = $('#day').text(date);
var Hour0 = $('#hour000').val(9);
var Hour1 = $('#hour001').val(10);
var Hour2 = $('#hour002').val(11);
var Hour3 = $('#hour003').val(12);
var Hour4 = $('#hour004').val(13);
var Hour5 = $('#hour005').val(14);
var Hour6 = $('#hour006').val(15);
var Hour7 = $('#hour007').val(16);
var Hour8 = $('#hour008').val(17);
var saveBtn = $('.saveBtn');

var timeBlocks = [Hour0, Hour1, Hour2, Hour3, Hour4, Hour5, Hour6, Hour7, Hour8]

console.log('presentHour:', presentHour)


checkTime()

function checkTime() {
  for (var i = 0; i < timeBlocks.length; i++) {
    var hour = parseInt(timeBlocks[i].val())
    if (presentHour > hour) {
    console.log(timeBlocks[i].val());
//used this same method in Homework 6 (weather dashboard)
      $(timeBlocks[i]).addClass('past').css("background-color", "red");


    }

    else if (presentHour === hour) {
      $(timeBlocks[i]).removeClass('past');
      $(timeBlocks[i]).addClass('present').css("background-color", "white");

    } else {
      $(timeBlocks[i]).removeClass('present');
      $(timeBlocks[i]).removeClass('past');

      $(timeBlocks[i]).addClass('future').css("background-color", "green");
      
    }
    }


};

//enabling save button to save what is typed in the box
$('.saveBtn').on('click', function (){
  var findInput = $(this).parent().prev().children('.description').val();
  var key = $(this).parent().parent().attr("id").split("-")[1]
  console.log('findInput:', findInput)
  //Where the saving happens, baby!
  localStorage.setItem(key, findInput);    
})


//Example: 9-9= 0 hr, 10-9=0 hr, etc.
for (let i = 9; i < 18; i++) {
 $("#hour-" + i + " .description").val(localStorage.getItem(i))
}





