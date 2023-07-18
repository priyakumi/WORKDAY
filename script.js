
//header date
var today = dayjs();

// Display current date 
$('#currentDay').text(today.format('MMM D, YYYY')); 
console.log(dayjs());

//current time
var currentTime = today.hour();
console.log(currentTime);

// Hour div Ids
var hourId9 = $('#hour-9');//9am
var hourId10 = $('#hour-10');//10am
var hourId11 = $('#hour-11');//11am
var hourId12 = $('#hour-12');//12am
var hourId13 = $('#hour-13');//1pm
var hourId14 = $('#hour-14');//2pm
var hourId15 = $('#hour-15');//3pm
var hourId16 = $('#hour-16');//4pm
var hourId17 = $('#hour-17');//5pm

// Textarea ids
var textId9 = $('#text9');
var textId10 = $('#text10');
var textId11 = $('#text11');
var textId12 = $('#text12');
var textId13 = $('#text13');
var textId14 = $('#text14');
var textId15 = $('#text15');
var textId16 = $('#text16');
var textId17 = $('#text17');


// button id

var btn1= $('#btn1');

// <p> tag for save message 
var hideId = $('#saveMsg');

//hiding the p tag
$(hideId).hide();

/*$(btn1).click(function(){
    
    $(hideId).show();
    $(hideId).hide(8*1000);
    
  });*/
 
hourChecking()// checking hours for time

retriveData(); // show the data that is already saved 

// This function is involed on a onclick event in the button. 
// it stores the data and show the  saveed messege above 9am time slot and hide after 8 sec.

function saveData()
{
    localStorage.setItem('text9',$(textId9).val());
    localStorage.setItem('text10',$(textId10).val());
    localStorage.setItem('text11',$(textId11).val());
    localStorage.setItem('text12',$(textId12).val());
    localStorage.setItem('text13',$(textId13).val());
    localStorage.setItem('text14',$(textId14).val());
    localStorage.setItem('text15',$(textId15).val());
    localStorage.setItem('text16',$(textId16).val());
    localStorage.setItem('text17',$(textId17).val()); 
    //alert("appt is saved");
    $(hideId).show();
    $(hideId).hide(8*1000);
 }

 //This function retrives data from the local storage and render in according time slots even after refresh(data is stored in localstorage).

 function retriveData(){
   $(textId9.text( localStorage.getItem('text9') ));
   //$(textId9).text(text9);

   $(textId10.text( localStorage.getItem('text10') ));
   //$(textId10).text(text10);

   $(textId11.text( localStorage.getItem('text11') ));
   //$(text1Id11).text(text11);

   $(textId12.text( localStorage.getItem('text12') ));
   //$(textId12).text(text12);

   $(textId13.text( localStorage.getItem('text13') ));
  // $(textId13).text(text13);

   $(textId14.text( localStorage.getItem('text14') ));
   //$(textId14).text(text14);

   $(textId15.text( localStorage.getItem('text15') ));
   //$(textId15).text(text15);

   $(textId16.text( localStorage.getItem('text16') ));
   //$(textId16).text(text16);

   $(textId17.text( localStorage.getItem('text17') ));
   //$(textId17).text(text17);
    
 }


//This function check the time slot for Present past or future time, based on that it will change the backgroud color.

function hourChecking(){
//====== 9 AM =====
if( 9 < currentTime)
{
    $(hourId9).removeClass('present');
    $(hourId9).removeClass('future');
    $(hourId9).addClass('past');

}
else if( 9 === currentTime)
{
    $(hourId9).removeClass('past');
    $(hourId9).removeClass('future');
    $(hourId9).addClass('present');

}
else{

    $(hourId9).removeClass('present');
    $(hourId9).removeClass('past');
    $(hourId9).addClass('future');
}

//====== 10 AM =====
if( 10 < currentTime)
{
    $(hourId10).removeClass('present');
    $(hourId10).removeClass('future');
    $(hourId10).addClass('past');

}
else if( 10 === currentTime)
{
    $(hourId10).removeClass('past');
    $(hourId10).removeClass('future');
    $(hourId10).addClass('present');

}
else{

    $(hourId10).removeClass('present');
    $(hourId10).removeClass('past');
    $(hourId10).addClass('future');
}
//====== 11 AM =====
if( 11 < currentTime)
{
    $(hourId11).removeClass('present');
    $(hourId11).removeClass('future');
    $(hourId11).addClass('past');

}
else if( 11 === currentTime)
{
    $(hourId11).removeClass('past');
    $(hourId11).removeClass('future');
    $(hourId11).addClass('present');

}
else{

    $(hourId11).removeClass('present');
    $(hourId11).removeClass('past');
    $(hourId11).addClass('future');
}
//======12 am =======
if( 12 < currentTime)
{
    $(hourId12).removeClass('present');
    $(hourId12).removeClass('future');
    $(hourId12).addClass('past');

}
else if( 12 === currentTime)
{
    $(hourId12).removeClass('past');
    $(hourId12).removeClass('future');
    $(hourId12).addClass('present');

}
else{

    $(hourId12).removeClass('present');
    $(hourId12).removeClass('past');
    $(hourId12).addClass('future');
}

//======1pm =======
if( 13 < currentTime)
{
    $(hourId13).removeClass('present');
    $(hourId13).removeClass('future');
    $(hourId13).addClass('past');

}
else if( 13 === currentTime)
{
    $(hourId13).removeClass('past');
    $(hourId13).removeClass('future');
    $(hourId13).addClass('present');

}
else{

    $(hourId13).removeClass('present');
    $(hourId13).removeClass('past');
    $(hourId13).addClass('future');
}

//======2 pm =======
if( 14 < currentTime)
{
    $(hourId14).removeClass('present');
    $(hourId14).removeClass('future');
    $(hourId14).addClass('past');

}
else if( 14 === currentTime)
{
    $(hourId14).removeClass('past');
    $(hourId14).removeClass('future');
    $(hourId14).addClass('present');

}
else{

    $(hourId14).removeClass('present');
    $(hourId14).removeClass('past');
    $(hourId14).addClass('future');
}

//======3 pm =======
if( 15< currentTime)
{
    $(hourId15).removeClass('present');
    $(hourId15).removeClass('future');
    $(hourId15).addClass('past');

}
else if( 15 === currentTime)
{
    $(hourId15).removeClass('past');
    $(hourId15).removeClass('future');
    $(hourId15).addClass('present');

}
else{

    $(hourId15).removeClass('present');
    $(hourId15).removeClass('past');
    $(hourId15).addClass('future');
}

//======4 pm =======

if( 16 < currentTime)
{
    $(hourId16).removeClass('present');
    $(hourId16).removeClass('future');
    $(hourId16).addClass('past');

}
else if( 16 === currentTime)
{
    $(hourId16).removeClass('past');
    $(hourId16).removeClass('future');
    $(hourId16).addClass('present');

}
else{

    $(hourId16).removeClass('present');
    $(hourId16).removeClass('past');
    $(hourId16).addClass('future');
}
//======5pm =======
if( 17 < currentTime)
{
    $(hourId17).removeClass('present');
    $(hourId17).removeClass('future');
    $(hourId17).addClass('past');

}
else if( 17 === currentTime)
{
    $(hourId17).removeClass('past');
    $(hourId17).removeClass('future');
    $(hourId17).addClass('present');

}
else{

    $(hourId17).removeClass('present');
    $(hourId17).removeClass('past');
    $(hourId17).addClass('future');
}

}// function ends here



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//});
