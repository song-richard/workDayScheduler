// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. -Done
$(function () {
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
  // attribute of each time-block be used to do this? -Done
  //
  // TODO: Add code to display the current date in the header of the page. -Done

});

// Show Current Date/Time
function showDate() {
  const currentDate = dayjs();
  const formattedDate = currentDate.format('MM-DD-YYYY');

  const currentTime = dayjs();
  const formattedTime = currentTime.format('hh:mm:ss')

  let currentDay = document.querySelector('#currentDay')
  currentDay.textContent = `${formattedDate}  ${formattedTime}`
}
showDate()

//Ensures HTML is fully loaded before running the code below
document.addEventListener("DOMContentLoaded", function() {
  //QuerySelectors
  const saveButtons = document.querySelectorAll('.saveBtn');
  const description = document.querySelectorAll('.description');

  //Load Saved Data from Local Storage Funtionality
  for (i = 0; i < description.length; i++) {
    const savedDescription = localStorage.getItem(`Key ${i}`)
    if (savedDescription !== null) {
      description[i].value = savedDescription
    }
  }
  //Save Button Functionality
  saveButtons.forEach(function(save) {
    save.addEventListener('click', function() {
      let description = document.querySelectorAll('.description');
      description.forEach(function(descriptionInside, i) {
        localStorage.setItem(`Key ${i}`, descriptionInside.value)
      })
    })
  })
})