// variables
let myCheckBox = document.querySelector("#my-check-box")

myCheckBox.addEventListener("change", function (event) {
	console.log(event.target.checked)
})

//! Možný zápis
	// document.querySelector("#my-check-box").addEventListener("change", function (event) {
	// 	console.log("test")
	// })