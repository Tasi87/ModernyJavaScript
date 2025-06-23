// VARIABLES
let myDiv = document.querySelector(".square")
	
let newLeft = null
let newTop = null

// MAIN CODE
document.querySelector("body").addEventListener("keydown", function (event) {
		if (event.key === "ArrowLeft") {
				newLeft = newLeft - 10
				myDiv.style.left = newLeft + "px"
			} else if (event.key === "ArrowRight") {
				newLeft = newLeft + 10
				myDiv.style.left = newLeft + "px"
			} else if (event.key === "ArrowUp") {
				newTop = newTop - 10
				myDiv.style.top = newTop + "px"
			} else if (event.key === "ArrowDown") {
				newTop = newTop + 10
				myDiv.style.top = newTop + "px"
			}
		})
