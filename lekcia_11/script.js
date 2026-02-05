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


