"use strict";

const myTaxes = (income) => {
	if (typeof income === "number") {
		return income * 0.25
	} else {
		throw Error ("Argument musí byť číslo!")
	}
}

try {
	const result = myTaxes(true)
	console.log(result)
} catch (e) {
	console.log("Pozor, chyba!")
}
//------------------------------------------------------------------------

localStorage.setItem("age", 30)
let myAge = localStorage.getItem("age")

try {
	console.log(JSON.parse(myAge))
} catch (error) {
	console.log("CHYBA!!!")
}

console.log("Pokračujeme ďalej")

//------------------------------------------------------------------------
// Strict mode
//! "use strict"; sa píše na začiatok súboru!!!

// global scope

// let public = "test"

const ourTest = () => {
	// local scope
	let data = "abcdefg"
	 //data = "abcdefg"
}

ourTest()
// console.log(data)