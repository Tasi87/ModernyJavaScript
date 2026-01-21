/**
	Funkcia načítajúca data z localStorage;
	Ošetriť pokiaľ data v localStorage nie sú
*/

const getSavedNames = function () {
						//note vytiahne data z "localStarage"
	const myNames = localStorage.getItem("names")
	
						//note ak tam nejaké data sú, takže "myNames" sa nerovná "0"
	if (myNames !== null) {
						//note rovno to prevedie do poľa objektov
		return JSON.parse(myNames)
	} else {
						//note ak sa "myNames" rovná "0", tak vráti prázdne pole
		return []
	}
}

/**
	Funkcia pre použitie pri odoslaní formuláru;
	Ukladá do localStorage meno z formuláru
 */

const saveNames = function (oneName) {
						//note prevedie sa na "string" a uloži do "localStorage" pod "names"
	localStorage.setItem("names", JSON.stringify(oneName))
}

/**
	Generovanie HTML štruktúry, ktorú umiestnime do schránky po kliknutí na tlačítko "Vypísať"
	+ použijeme ju taktiež pre vypísanie nových informácií z localStorage, 
	keď nejaké meno vymažeme pomocou tlačítka "Vymazať meno"
*/

const generateHTMLstructure = function (oneName) {
	const newDiv 	= document.createElement("div")
	const newSpan 	= document.createElement("span")
	const button	= document.createElement("button")

	// nastavenie mazacieho tlačítka
	button.textContent = "Vymazať meno"
	newDiv.appendChild(button)

	newSpan.textContent = oneName.firstName
	newDiv.appendChild(newSpan)

	return newDiv
}