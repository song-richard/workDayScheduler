// Show Current Date/Time
function showDate() {
  const currentDate = dayjs();
  const formattedDate = currentDate.format('MM-DD-YYYY hh:mm:ss'); // 

  let currentDay = document.querySelector('#currentDay');
  currentDay.textContent = formattedDate;
}

// Update Past, Present, Future Colors
function updateTimeBlockClasses() {
  const currentHour = dayjs().hour();

  const timeBlocks = document.querySelectorAll('.time-block');
  timeBlocks.forEach((block) => {
    //Extracts hour from id
    const blockHour = parseInt(block.id.split('-')[1], 10); 

    if (blockHour < currentHour) {
      block.classList.remove('present', 'future');
      block.classList.add('past');
    } else if (blockHour === currentHour) {
      block.classList.remove('past', 'future');
      block.classList.add('present');
    } else {
      block.classList.remove('past', 'present');
      block.classList.add('future');
    }
  });
}

//Show Date
showDate()
//Updates Time Blocks
updateTimeBlockClasses()
//Set Interval to refresh time blocks
setInterval(updateTimeBlockClasses, 1000);

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