// vytiahne id mena
let nameID = location.hash.substring(1)
// vytiahne data z localStorage pomocou použitia funkcie "getSavedNames()"
let names = getSavedNames()

// vytvorenie premenej, kde premena "names" spusti funkciu hľadania s názvom "oneObject"
// a vráti "id" a porovná ho s "nameID"
let searchedName = names.find(function (oneObject) {
	return oneObject.id === nameID
})

// ak "searchName" nebude definované, tak pomocou...
if(searchedName === undefined) {
	// ... tohoto bude presmerovaný na pôvodnú stránku
	location.assign("../index_advances_7.html")
}

// toto mi vypíše meno do inputu
document.querySelector("#edited-name").value = searchedName.firstName

// vytvorí premenu, ktorá vyberie element s id "changing-form"
let changingForm = document.querySelector("#changing-form")
// na premenej sledujeme "submit" a spúšťa funkciu
changingForm.addEventListener("submit", function (event) {
	event.preventDefault()

	// zmení meno po submite
	searchedName.firstName = event.target.elements.changingName.value

	//note uloží zmenu do konštanty "names"
	saveNames(names)
	
})