document.addEventListener("DOMContentLoaded", function() {
var dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4"
dodger.style.left = "180px"

})

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "")
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "")
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
})

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {

    moveDodgerRight();
  }
})


document.addEventListener("keydown", function(e) {
  console.log(e.key);
});