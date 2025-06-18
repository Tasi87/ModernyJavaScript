document.querySelector("#test-form").addEventListener("submit", function (event) {
	// Vypnutie predvoleného správania formuláru
	event.preventDefault()

	// Prístup k obsahu "input"
		//note "event(toto je z funkcie).target(cieľ).elements(je to element).firstName(v HTML som priradil inputu).value(hodnota, na ktorú sa chcem zamerať)"
	//! kontrola funkčnosti
	// console.log(event.target.elements.firstName.value)

	// Vytvorenie odstavca a pridanie textu z políčka
	let para = document.createElement("p")
	para.textContent = event.target.elements.firstName.value

	document.querySelector("#from-form").appendChild(para)

	// Vymazanie obsahu inputu po odoslaní
	event.target.elements.firstName.value = ""
})