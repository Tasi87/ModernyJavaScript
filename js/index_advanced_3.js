	// variables
	let myCheckBox = document.querySelector("#my-check-box")

	myCheckBox.addEventListener("change", function (event) {
		console.log(event.target.checked)
	})

	//! Možný zápis
		// document.querySelector("#my-check-box").addEventListener("change", function (event) {
		// 	console.log("test")
		// })

//-------------------------------------------------------------------------------------------

	// variables
	let myForm = document.querySelector("#my-form")
	let count = 0

	// console.log(myForm)
	myForm.addEventListener("submit", function (event) {
		
		//note vypneme prednastavené správanie formuláru(auto refresh)
		event.preventDefault()

		// pristup k obsahu poľa
		console.log(event.target.elements.task.value)

		// count zvyšujeme o 1
		count = count + 1 // count += 1

		// vytvorenie inputu
		let input = document.createElement("input")
			//note vytvorenému inputu priradý type "checkbox"
		input.type = "checkbox"
			//note vytvorenému inputu priradí id
		input.id = `testovacie-${count}`
		console.log(input)

		// vytvorenie checkboxu v HTML
		document.querySelector("#results").appendChild(input)

		// vytvorenie label
		let label = document.createElement("label")
			//note vloženie obsahu poľa do labelu
		label.textContent = event.target.elements.task.value
			//note pri "label" vytvorí atribut "for" a do "for" uloží "testovacie-${count}"
		label.setAttribute("for", `testovacie-${count}`)
		// console.log(label)

		// zobrazenie na stránke
		document.querySelector("#results").appendChild(label)

		// vyčistenie obsahu políčka po odoslaní formuláru
		event.target.elements.task.value = ""

	})

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------