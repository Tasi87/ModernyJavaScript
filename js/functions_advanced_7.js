/*
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