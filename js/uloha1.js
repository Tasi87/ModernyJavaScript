document.querySelector("#test-form").addEventListener("submit", function (event) {
	event.preventDefault()

	// console.log(event.target.elements.firstName.value)
	// console.log(event.target.elements.lastName.value)
	// console.log(event.target.elements.email.value)

	// Variables
	let firstName = event.target.elements.firstName.value
	let lastName = event.target.elements.lastName.value
	let email = event.target.elements.email.value
	
	// Vytváranie paragrafu
	let para = document.createElement("p")
	para.innerHTML = 
		`
			Meno: ${firstName}, <br/>
			Priezvisko: ${lastName}, <br/>
			Email: ${email}
		`
	document.querySelector("#from-form").appendChild(para)
	
	// Vymazanie obsahu po odoslaní.
	event.target.elements.firstName.value = ""
	event.target.elements.lastName.value = ""
	event.target.elements.email.value = ""
})