//idea Ternárny operátor

const age = 25
						//note najkratší zápis
let notification = age >= 18 ?  "Môžeš vstúpiť" :  "NEMÔŽEŠ VSTÚPIŤ!"

//note skrátený zápis
	// age >= 18 ? notification = "Môžeš vstúpiť" : notification = "NEMÔŽEŠ VSTÚPIŤ!"
	// alebo
	// notification = age >= 18 ?  "Môžeš vstúpiť" :  "NEMÔŽEŠ VSTÚPIŤ!"

//note bežný zápis
	// if (age >= 18) {
	// 	notification = "Môžeš vstúpiť"
	// } else {
	// 	notification = "NEMÔŽEŠ VSTÚPIŤ!"
	// }

console.log(notification)

//-------------------------------------------------------------------------------

const myAge = 12

const letHimGo = () => "Môžeš dnu."

const noLetHimGo = () => "Nemôžeš dnu"

let result = myAge >= 18 ? letHimGo() : noLetHimGo()

console.log(result)