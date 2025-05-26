// Variables
	// Počet dosiahnutých bodov
		let student1 = 69;
		let student2 = 74;
	// Mená študentov
		let student1Name = "Joel";
		let student2Name = "Ellie";
	// Maximálny počet bodov	
		let maxPoints = 100;
		
// Výpočet úspešnosti
let result1 = ( student1 / maxPoints ) * 100;
let result2 = ( student2 / maxPoints ) * 100;

// Výsledok
console.log(student1Name + " dosiahol(a) " + result1 + "% úspešnosti.");
console.log(student2Name + " dosiahol(a) " + result2 + "% úspešnosti.");

//------------------------------------------------------------------------------------------

// Definovanie veky
let age = 69;

// Dieťa
let child = age < 18;

// Dospelý
let adult = age >= 18;

//Dôchodca
let pensioner = age >= 65;

// Výpis výsledku
console.log("Dieťa: " + child);
console.log("Dospelý: " + adult);
console.log("Dôchodca: " + pensioner);

//------------------------------------------------------------------------------------------

let firstName = "Tasi"

if( firstName === "Tasi" ) {
	console.log("Dobrý deň Tasi, môžete ísť ďalej.")
} else if( firstName === "Martin" ) {
	console.log("Dobrý deň Martin, môžete ísť ďalej.")
} else if ( firstName === "Jana" ) {
	console.log("Dobrý deň Jana, môžete ísť ďalej.")
} else {
	console.log("Nemôžete vstúpiť. Nemáte oprávnenie.")
}

//------------------------------------------------------------------------------------------

let position = "Programátor"

if ( position === "Programátor" ) {
	console.log("Aký je rozdiel medzi HTML, CSS a JS?")
} else if ( position === "Administrátor" ) {
	console.log("Aké druhy sietí poznáte?")
} else if ( position === "Sekretárka") {
	console.log("Aké funkcie v exeli poznáte?")
} else {
	console.log("Tuto pozíciu neponúkame.")
}

//------------------------------------------------------------------------------------------

let temperature = 26
if ( temperature <= 10 ) {
	console.log("chladno")
} else if ( temperature >= 11 && temperature <= 25 ) {
	console.log("teplo")
} else if ( temperature >=26 ) {
		console.log("horúco")
	}
	//alebo else {
	//	console.log("horúco")
	//} pri tomto zápise je menej písania

//------------------------------------------------------------------------------------------

let weight = 100
let height = 190

if ( weight >= 100 || height >= 190 ) {
	console.log("podozrivý")
} else {
	console.log("nie je podozrivý")
}

//------------------------------------------------------------------------------------------

//function naDruhu (num) {
	//	console.log(num * num)
	//}
	
	let naDruhu = (num) => console.log(num * num) 
	
	naDruhu(3)
	
	// function zdraviacaFunkcia(name) {
		// 	console.log("Ahoj, ja som " + name)
		// }
		
		let zdraviacaFunkcia = (name) => console.log("Ahoj, ja som " + name)
		
		zdraviacaFunkcia("Tasi")
		
//------------------------------------------------------------------------------------------
/*
1)	Vytvorte funkciu adultChecker, do ktorej zadáme parameter vek a pokiaľ bude 
vek väčší alebo rovný 18, tak sa vráti ako výsledok slovo "dospelý" a pokiaľ
nie, tak sa vráti slovo "dieťa".
2)	Následne pomocou ďaľšej podmienky if vypíšte do konzoly text, že pokiaľ je dospelý,
tak "Výsledok kontroly veku: dospelý" a pod to na ďaľší riadok "Môžeš vstúpiť.".
Pokiaľ sa bude jednať o dieťa, tak sa vypíše "Výsledok veku: dieťa" a na ďaľší riadok
"Nemôžes vstúpiť.".
*/

function adultChecker(age) {
	if (age >= 18){
		let result = "dospelý"
		return result
	} else  {
		let result = "dieťa"
		return result
	}
}

let value = adultChecker(18)

if (value === "dospelý") {
	console.log("Výsledok kontroly veku: " + value)
	console.log("Môžeš vstúpiť.")
} else {
	console.log("Výsledok kontorly veku " + value)
	console.log("Nemôžeš vstúpiť.")
}

//------------------------------------------------------------------------------------------

/*
Na dverách do kancelárie je tlačítkový display. Aby sa otvorili dvere, tak musíte zadať správny 3-miestny kód. Tento kód ste si navolili, ked ste nastupovali do práce. Uložte vami zvolený kód do troch premenných. Potom vytvorte funkciu, ktorá bude príjmať 3 parametre. Pokiaľ sa bude zhodovať so zvoleným kódom, tak sa do konzole vypíše "Môžete vstúpiť". Pokiaľ sa nebude zhodovať, tak sa vypíše "Zlé zadaný kód. Skúste to prosím znovu."
*/

let num1 = 5
let num2 = 3
let num3 = 8

function code(a, b, c) {
	if ( a === num1 && b === num2 && c === num3 ) {
		console.log("Môžeš vstúpiť.")
	} else {
		console.log("Zlé zadaný kód. Skúste to prosím znovu.")
	}
}

code(5, 3, 9)
code(4, 3, 8)
code(5, 3, 8)