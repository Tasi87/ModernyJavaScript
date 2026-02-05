/** načitanie dát z localStorage do premenej names; pokiaľ je localStorage prázdny, 
tak do names sa uloží prázdne pole.
 */

//note "names" je pole, do ktorého sa ukladajú alebo načítajú data z funkcie "getSavedNames"
const names = getSavedNames()

// odosielanie formuláru a ulokladanie do localStorage pomocou premennej names
let myForm = document.querySelector("#test-form")
let myCheckbox = document.querySelector(".my-checkbox")

	myForm.addEventListener("submit", function (event) {
		event.preventDefault()

		//note do poľa "names" pridá nakoniec to, čo sa bude písať do vstupu a pridá sa "id"
		// konštanta prepojená s funkciou "getSavedNames"
		names.push({
			id: uuidv4(),	//! vytvorí špeciálne "id" pre každé meno uložené do poľa
			firstName: event.target.elements.firstName.value,
			adult: myCheckbox.checked // v localStorage zobrazuje true alebo false
		})
		// vymaže input po submitef
		event.target.elements.firstName.value = ""
		// po odoslaní zruší zaškrtnutie checkboxu
		myCheckbox.checked = false

		saveNames(names)
})

// vypisovanie späť do schránky
let btnToList = document.querySelector(".to-list")
btnToList.addEventListener("click", function (event) {
	//note premaže vypísaný zoznam
	document.querySelector(".list-names").innerHTML = ""

	let namesFromStorage = localStorage.getItem("names")
	let namesFromStorageJSON = JSON.parse(namesFromStorage)
	
	namesFromStorageJSON.forEach(function (myName) {
		const oneNameHTML = generateHTMLstructure(myName)
		document.querySelector(".list-names").appendChild(oneNameHTML)
	})
})

// pri akejkoľvek zmene v localStorage sa hlavná stránka znovu načíta
window.addEventListener("storage", function () {
	this.location.reload()
}) 