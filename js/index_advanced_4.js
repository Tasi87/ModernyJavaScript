let heading = document.querySelector("h1")
// console.log(heading)

//note pre zistenie vlastností CSS
let style = getComputedStyle(heading)
console.log(style.color)	// zobrazuje v rgb spektre
console.log(style.backgroundColor)
// console.log(style)

// zmena farby priprejdený kurzorom
heading.addEventListener("mouseenter", function (event) {
	heading.style.color = "blue"
})

heading.addEventListener("mouseleave", function (event) {
	heading.style.color = "red"
})

document.addEventListener("keydown", function (event) {
	if (event.key === "g") {
		heading.style.color = "green"
	}
})
document.addEventListener("keyup", function (event) {
	if (event.key === "g") {
		heading.style.color = "red"
	}
})

// ďaľšie štýly
// heading.style.fontSize = "2.5rem"
	// heading.style.display = "none"
	// heading.style.fontWeight = "400"

//---------------------------------------------------

// VARIABLES
let myForm = document.querySelector("#my-form")
let myBody = document.querySelector("body")

// MAIN CODE
	myForm.addEventListener("submit", function (e) {
		e.preventDefault()
		// variables
		let inputColor = e.target.elements.color.value
		myBody.style.backgroundColor = inputColor

		e.target.elements.color.value = ""
	})