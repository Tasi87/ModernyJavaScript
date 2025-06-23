let heading = document.querySelector("h1")
// console.log(heading)

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