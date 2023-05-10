// Get the button element
const button = document.getElementById('change-color-button');

// Add an event listener to the button
button.addEventListener('click', function() {
  // Get the body element
  const body = document.querySelector('body');

  // Change the background color
  body.style.backgroundColor = '#DFEBF6';
});