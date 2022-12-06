const navBar =document.querySelector('.navbar')
// FUNCTION TO ROTATE AND ANIMATE THE HAMBURGER MENU 
function toggleThis(x) {
    navBar.classList.toggle('active')
    x.classList.toggle('spin')
   setTimeout(function spinTwo() {
    x.classList.toggle('spin2')
   }, 500)
}





// FUNCTION TO TOGGLE THE DROPDOWN CONTENT 
function myFunction() {
document.querySelector('.dropdown-one-content').classList.toggle('show')
}

function myFunctionTwo() {
    document.querySelector('.dropdown-two-content').classList.toggle('show')
}
// FUNCTIONS TO ROTATE THE DROPDOWN ARROWS 
const dropDownLink = document.getElementById('link-one')
let arrowRotate = document.querySelector('.arrow-rotate')

function rotate() {
    arrowRotate.classList.toggle('change')
}
 
dropDownLink.addEventListener('click', () =>{
    rotate()
})
  
const dropDownLinkTwo = document.getElementById('link-two')
let arrowRotateTwo = document.querySelector('.arrow-rotate-two')

function rotateTwo() {
    arrowRotateTwo.classList.toggle('change')
}



dropDownLinkTwo.addEventListener('click', () =>{
    rotateTwo()
})
// FUNCTION TO REMOVE THE DROPDOWN WHEN THE USER MOVES THE MOUSE OUT OF THE DROPDOWN 
 function toggleHide(event) {
      var dropdowns = document.getElementsByClassName("dropdown-one-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
      // FUNCTION TO REVERSE THE ARROW ROTATION 
      arrowRotate.classList.toggle('change')
      
  }
// SAME FUNCTION AS ABOVE JUST FOR THE SECOND DROPDOWN 
function toggleHideTwo(event) {
    var dropdowns = document.getElementsByClassName("dropdown-two-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    
    arrowRotateTwo.classList.toggle('change')
}

