// A simple script to keep the navbar pinned to
// the top of the page once it is scrolled past...

window.onscroll = function() {myFunction()};

var NavMenu = document.getElementById("NavMenu");
var sticky = NavMenu.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    NavMenu.classList.add("sticky")
  } else {
    NavMenu.classList.remove("sticky");
  }
}
