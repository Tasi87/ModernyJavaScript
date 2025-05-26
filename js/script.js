// console.log("Hallo, ich heiße Tasi.");

// String
let firstName = "Tasi";
let job = "instructor";
console.log("Hallo, ich heiße " + firstName + " und ich arbeite als " + job + ".");

// Number
let age = 37;

// Počtové operácie
let x = age + 5;			// môžem používať aj iné matematické operácie "+", "*", "/".

console.log("Volám sa " + firstName + " a mám " + age + ".");
console.log("O päť rokov budem mať " + x + ".");
console.log("O päť rokov budem mať " + (age + 5) + ".");
// age = age + 5;
// console.log("O päť rokov budem mať " + (age + 5) + ".");

// Premeny sa nesmú definovať viackrát ako raz
	//!	let age = 20;
	//!	let age = 30;
	//note	Takto predefinovať premenu môžem
	//!	let age = 20;
	//!	age = 30;

//	Názvy premenných
	//!	Nikdy by nemali začínať číslom ani špeciálne znaky nepoužívať!
	//		let 5m = 3	//! 		NEMÔŽE
			let m5 = 3;	//NOTE	MÔŽE
			console.log(m5);

// Žadne rezervované slová
	//! napr.: let if = 5;

//------------------------------------------------------------------------------------

// String
let firstName1 = "Tasi";

// Number
let age1 = 21;

// Boolean (true / false)
let adult = age >= 18
console.log(adult);

// Boolean - operátory
let result = age <= 10;

//note === rovná sa
//note !== nerovná sa
//note < menší (<=)
//note > väčší (>=)

//------------------------------------------------------------------------------------

// Podmienky if a else

let age2 = 10
if(age2 >= 18) {
	console.log("Si dospleý")
} else {
	console.log("Si dieťa")
}
		// Spôsob zapísania bez else

		// if(age2 >= 18) {
		// 	console.log("Si dospleý")
		// }
		// if(age2 < 18) {
		// 	console.log("Si dieťa")
		// }

//------------------------------------------------------------------------------------

let firstName2 = "Peter"

if( firstName2 === "Tasi" ) {
	console.log("Ahoj Tasi")
} else {
	console.log("Ahoj " + firstName2)
}

//------------------------------------------------------------------------------------

// Logické operátory

	// a zároveň - &&
	let firstName3 = "Tasi"
	let height = 181

	if ( firstName3 === "Tasi" && height === 181 ) {
		console.log("Ja to on!")
	} else {
		console.log("Nie je to on.")
	}

		//note true = true, true
		//note false = false, true
		//note false = true, false
		//note false = false, false

	// alebo ||

	if ( firstName3 === "Tasi" || height === 181 ) {
		console.log("Našiel sa.")
	} else {
		console.log("Nenašiel sa.")
	}

		//note true = true, true
		//note true = false, true
		//note true = true, false
		//note false = false, false

//------------------------------------------------------------------------------------

// Scope - rozsah
// Globálny scope (first)
// Lokálny scope (second)

let first = "Prvý text"

if ( true ) {
	console.log(first)
	let second = "Druhý text"
	console.log(second)
	//note V tomto prípade je second dcérsky scope rodičovského scope (first)

	if ( true ) {
		let third = "Tretí text"
		console.log(third)
		console.log(second)
	}
}

//------------------------------------------------------------------------------------

// variable shadowing

let myName = "Tasi"

if ( true ) {
	let myName = "Peter"
	if ( true ){
		let myName = "Laura"
		console.log(myName)
	}
}

if ( true ) {
	console.log(myName)
	//note Tento blok je sesterský s predošlým blokom, preto vypíše "Tasi".
	//note Nemá prístup do sesterského bloku, kde je predefinovaný myName.
}

//------------------------------------------------------------------------------------

// Funkcie

function pozdrav1 () {
	console.log("Toto je pozdrav 1!")
}

pozdrav1()

let pozdrav2 = function () {
	console.log("Toto je pozdrav 2!")
}

pozdrav2()

// Šípkový zápis
let pozdrav3 = () => console.log("Toto je pozdrav 3!")

pozdrav3()

//------------------------------------------------------------------------------------

// Funkcie - parameter a argument

// Parametre
function naDruhu (num) {
	console.log(num * num) // (number * number)
}

// Argumenty
naDruhu(3)

function zdraviacaFunkcia(name) {
	console.log("Ahoj, ja som " + name)
}

zdraviacaFunkcia("Tasi")

//------------------------------------------------------------------------------------

function nasobenie(num) {
	let result = num * num
	return result
}
//note "return" vracia výsledok funkcie aby sa s výsledkom dalo ďalej pracovať
//! Výsledok funkcie MUSÍM uložiť aby som s ním mohol ďalej pracovať!

let value1 = nasobenie(5)
value1 = value1 + 50
console.log(value1)

function zvysovaciaFunkcia(num) {
	let result = num + 100
	return result
}

let value2 = zvysovaciaFunkcia (7)
console.log(value2)

//------------------------------------------------------------------------------------

// undefined a null
//note "undefined" je hláska JS
//note "null" je definované programátorom

// undefined v premennej
let age3

if( age3 === undefined ) {
	console.log("Prosím vypľnte vek.")
} else {
	console.log(age3)
}

// undefined ako argument fukcie
let mojaFunkcia = function( num ) {
	console.log(num)
}

mojaFunkcia()

// undefined v return

let mojaFunkcia2 = function ( num ) {
	return num
}

let value = mojaFunkcia2()
console.log(value)

// null ako priradená hodnota
let myAge = 30
myAge = null
console.log(myAge)

//------------------------------------------------------------------------------------

// Funkcia s viacero parametrami
function sucet(a, b, c) {
	return a + b + c
}

let value4 =  sucet(5, 30, 3)
console.log(value4)

// Defaultna (východzia) hodnota
function game(name = "Anonym", score = 0) {
	return "Meno: " + name + ", Score: " + score
}

// game()
//note pokiaľ definujem hodnoty "game("Tasi" ,21)", tak sa mi vypíše do konzoly "Tasi", "21".
// game(undefined, 50)
//note pokiaľ by som zavola funkciu "game(50)", tak by mi 50 bralo ako meno aby som toto zmenil, tak musím zadať do funkcie namiesto mena "undefined".
let value5 = game()
console.log(value5)

//------------------------------------------------------------------------------------

