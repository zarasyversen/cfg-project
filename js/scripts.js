// Define our button - it will never be reassigned so its a const.
const topButton = document.getElementById('go-top-button');

//
// Function to check how far down you are scrolled on the page
//
function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
}

// Add Event Listener for Scroll, everytime you scroll it runs this function
window.addEventListener('scroll', scrollFunction);

function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

topButton.addEventListener('click', scrollToTop);
