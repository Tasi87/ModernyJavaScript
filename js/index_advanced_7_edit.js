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