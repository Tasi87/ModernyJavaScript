// Fals		-	false, 0, prázdny string " ", null, undefined, NaN
// Truth 

const products = []
const product = products[0]

if (product) /** (product !== undefined) aj takto to môže byť zapísané */ {
	console.log("Produkt bol nájdený.")
} else {
	console.log("Produkt nebol nájdený.")
}
//----------------------------------------------------------------------

// Coercion	-	prevod

console.log("5" + 5)
console.log("5" - 5)

const result1 = "5" + 5
const result2 = "5" - 5

console.log(typeof result1)
console.log(typeof result2)

const result3 = true + 5	// true je 1 a false je 0
console.log(typeof result3)
console.log(result3)

console.log("5" === 5) //! používať "==="
console.log("5" == 5)