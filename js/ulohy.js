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