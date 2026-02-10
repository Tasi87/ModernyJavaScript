"use strict"
//idea	Najčastejšie opakované cykly
//------------------------------------------------------------------------------------------
//note	forEach - prechádza polia
//note	for - poznáme počet opakovaní tzn. pokiaľ vieme, ze sa niečo má opakovatnapr.: 10x
//note	while	(pokiaľ) - nemusí prebehnúť ani raz
//note	do while  - prebehne vždy minimálne raz
//------------------------------------------------------------------------------------------
let i = 20

	// while (i < 10) {
	// 	console.log(i)
	// 	//note i-- je i = i - 1
	// 	//note i++ je i = i + 1
	// 	i++
	// }
// while prebehne iba ak je podmienka splnená, //!	!!!NEMUSÍ PREBEHNÚ%T ANI RAZ!!!

	// do {
	// 	console.log(i)
	// 	i++
	// } while (i < 10)
// cyklus do //! !!!PREBEHNE URČITE ASPOŇ RAZ!!!
// podmienka while //! !!!PREBEHNE IBA AK JE PODMIENKA SPLNENÁ!!!
//------------------------------------------------------------------------------------------

// let result
// while (result != "x") {
// 	result = prompt("Pokiaľ chceš ukončiť hru, tak zadaj X")
// 	console.log(result)
// }