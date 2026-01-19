//note "names" je pole, do ktorého sa ukladajú alebo načítajú data z funkcie "getSavedNames"
const names = getSavedNames()

let myForm = document.querySelector("#test-form")
	myForm.addEventListener("submit", function (event) {
	event.preventDefault()

		//note do poľa "names" pridá nakoniec to, čo sa bude písať do vstupu a pridá sa "id"
		// konštanta prepojená s funkciou "getSavedNames"
		names.push({
			id: "",
			firstName: event.target.elements.firstName.value
		})


})