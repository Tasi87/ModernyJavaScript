console.log("%cÚloha 1:", "color: red; font-weight: bold")
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
console.log("%cÚloha 2:", "color: red; font-weight: bold")
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
console.log("%cÚloha 3:", "color: red; font-weight: bold")
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
console.log("%cÚloha 4:", "color: red; font-weight: bold")
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
console.log("%cÚloha 5:", "color: red; font-weight: bold")
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
console.log("%cÚloha 6:", "color: red; font-weight: bold")
let weight = 100
let height = 190

if ( weight >= 100 || height >= 190 ) {
	console.log("podozrivý")
} else {
	console.log("nie je podozrivý")
}

//------------------------------------------------------------------------------------------
console.log("%cÚloha 7:", "color: red; font-weight: bold")
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
console.log("%cÚloha 8:", "color: red; font-weight: bold")
/**
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
console.log("%cÚloha 9:", "color: red; font-weight: bold")
/**
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

//------------------------------------------------------------------------------------------
console.log("%cÚloha 10:", "color: red; font-weight: bold")
let firstName1 = "Harry"
let lastName1 = "Potter"
let age1 = 15
let firstFriend1 = "Ron"
let secondFriend1 = "Hermiona"

/**
Úloha je vypísať vetu "Ahoj, volám sa Harry Potter a mám 15 rokov. Moji priatelia sú Hermiona a Ron." pomocou Template strings
*/

console.log(`Ahoj volám sa ${firstName1} ${lastName1} a mám ${age1} rokov. Moji priatelia sú ${secondFriend1} a ${firstFriend1}.`)

let movie = "Ospalá diera"
let director = "Tim Burton"
let award = "najlepší výkon vo výprave"

/**
Z troch vyššie uvedených premenných zostavte pomocou template strings vetu "Videl som film Ospalá diera, ktorý režíroval Tim Burton. Tento film získal ocenenie najlepší výkon vo výprave."
*/

console.log(`Videl som film ${movie}, ktorý režíroval ${director}. Tento film získal ocenenie ${award}.`)

//------------------------------------------------------------------------------------------
console.log("%cÚloha 11:", "color: red; font-weight: bold")
/**
Definujte 3 objekty, ktoré budú predstavovať konkrétnych ľudí s názvami person1, person2 a person3. Každý objekt (človek) bude mať meno, vek a mesto, v ktorom žije. Údaje sú na vás, ale person1 budete vždy vy.

Do konzole vypíšte vety "Volám sa ... . Mám ... rokov a pochádzam z mesta ... ."
*/

let person1 = {
	name: "Tasi",
	age: 38,
	city: "Bratislava",
	gender: "male"
}

let person2 = {
	name: "Sara",
	age: 25,
	city: "Velký Slavkov",
	gender: "female"
}

let person3 = {
	name: "Laura",
	age: 2,
	city: "Bratislava",
	gender: "female"
}

console.log(`
	Volám sa ${person1.name}. Mám ${person1.age} rokov a pochádzam z mesta ${person1.city}.
	Volám sa ${person2.name}. Mám ${person2.age} rokov a pochádzam z mesta ${person2.city}.
	Volám sa ${person3.name}. Mám ${person3.age} rokov a pochádzam z mesta ${person3.city}.
`)

//------------------------------------------------------------------------------------------
console.log("%cÚloha 12:", "color: red; font-weight: bold")
/**
Vezmite 3 objekty z predošlej úlohy a vypíšte ich pomocou funkcie.
*/

// Objekty s funkciami rozšírené o podmienky

function personInfo(person) {
	if ( person.gender === "male" ) {
		console.log(`
			Volá sa ${person.name}. On má ${person.age} rokov a pochádzam z mesta ${person.city}.
			`)
	} else {
		console.log(`
			Volá sa ${person.name}. Ona má ${person.age} rokov a pochádzam z mesta ${person.city}.
			`)
	}
}

personInfo(person1)
personInfo(person2)
personInfo(person3)

//------------------------------------------------------------------------------------------
console.log("%cÚloha 13:", "color: red; font-weight: bold")
/**
Vytvorte objekt s názvom school. Tá bude mať vlastnosti:
type:
street:
city:
capacity:

Vypíšte type a city do konzoly.
Budete mať dve metódy s názvom "open" a "closed". Open bude vypisovať text "Škola je otvorená".
Closed bude vracať text "Škola je zatvorená" a to uložíte do ľubovolnej premennej a vypíšete do konzole.
*/

let school = {
	type: "Stredná priemyselná škola chemická",
	street: "Račianska 78",
	city: "Bratislava",
	capacity: 500,
	open: function () {
		console.log("Škola je otvorená.")	//! TOTO JE VYPÍSANIE
	},
	closed: function () {
		return "Škola je zatvorená."			//! TOTO JE VRACANIE
	}
}

console.log(school.type, school.city)
//-----------------------------------
school.open()
//-----------------------------------
let result3 = school.closed()
console.log(result3)

//------------------------------------------------------------------------------------------
console.log("%cÚloha 14:", "color: red; font-weight: bold")
/**
1)		Vytvorte premenu vladneNariadenie. Priradte do nej hodnotu true alebo false. True znamená, že vládne nariadenie platí. False, že vládne nariadenie neplatí.

2)		Vytvorte objekt school s type, street, city, capacity a dvoma metódami open a closed. Open bude vypisovať npr.: "Škola je otvorená". Closed to isté ale je zatvorená. Type a city do vety dosadíte pomocou this.

3)		Vytvorte podmienku, že pokiaľ sú nariadenia true, tak sa zavolá funkcia closed. Pokiaľ false, tak sa zavolá funkcia open.
*/

let vladneNariadenie = true

let school1 = {
	type: "Gymnázium",
	street: "Novohradská",
	city: "Bratislava",
	capacity: 300,
	open: function () {
		console.log(`Škola ${this.type} ${this.city} je otvorená.`)
	},
	closed: function () {
		console.log(`Škola ${this.type} ${this.city} je zatvorená.`)
	}
}

if ( vladneNariadenie ) {
	school1.closed()
} else {
	school1.open()
}

//------------------------------------------------------------------------------------------
console.log("%cÚloha 15:", "color: red; font-weight: bold")
/**
Do premennej password uložte ľubovolné heslo.

Pokiaľ bude mať heslo viac ako 13 znakov, tak vypíše "Veľmi silné heslo". Pokiaľ bude mať medzi 8 až 13 (vrátane), tak vypíše "Silné heslo". Pokiaľ menej než 8, tak vypíše "Slabé heslo".

Zistite, či heslo obsahuje znaky 1234 v tomto poradí. Pokiaľ áno, tak sa vypíše do konzoli "Heslo nemsie obsahovať 1234". Inak sa vypíše "Heslo je v poriadku".
*/

let password = "Paraclimbing1234"
	if (password.length > 13) {
		console.log("Veľmi silné heslo")
	} else if (password.length >= 8) {
		console.log("Silné heslo")
	} else {
		console.log("Slabé heslo")
	}
	if (password.includes(1234)) {
		console.log("Heslo nesmie obsahovať 1234")
	} else {
		console.log("Heslo je v poriadku")
	}
	// Podľa mňa lepší spôsob
	// let password = "123678"

	// if (password.includes("1234")){
	// 	console.log("Heslo nesmie obsahovať 1234")
	// } else {
	// 	let confirm = "Heslo je v poriadku"
	// 	if (password.length > 13) {
	// 		console.log(confirm + " Veľmi silné heslo")
	// 	} else if (password.length >= 8){
	// 		console.log(confirm + " Silné heslo")
	// 	} else {
	// 		console.log(confirm + " Slabé heslo")
	// 	}
	// }
//------------------------------------------------------------------------------------------
console.log("%cÚloha 16:", "color: red; font-weight: bold")
/**
Vytvorte 6 premenných number1 až 6. Do každej premennej uložíte výsledok hodu kockou - teda číslo od 1 do 6. Potom do premennej sum súčet všetkých čísiel sčítate a pokiaľ je súčet vetší alebo rovný 25, tak vypíšete "Výhra". Pokiaľ menčí, tak "Skus znovu šťastie". Do konzole vypíšte celkový súčet 6 čísel.
*/

let number1 = Math.ceil ( Math.random() * 6 )
let number2 = Math.ceil ( Math.random() * 6 )
let number3 = Math.ceil ( Math.random() * 6 )
let number4 = Math.ceil ( Math.random() * 6 )
let number5 = Math.ceil ( Math.random() * 6 )
let number6 = Math.ceil ( Math.random() * 6 )

let sum = number1 + number2 + number3 + number4 + number5 + number6

console.log(sum)

if (sum >= 25) {
	console.log("Výhra!")
} else {
	console.log("Skýs šťastie znovu.")
}

//------------------------------------------------------------------------------------------
console.log("%cÚloha 17:", "color: red; font-weight: bold")
/**
Vytvorte premenný password (pole) a uložte do nej 3 stringy - text (aj text môže mať v sebe čísla). Vašou úlohou je náhodne vybrať jedno heslo. Pri každom znovunačítaní stránky sa do konzole vypíše jedno z troch hesiel (náhodne).
*/

let passwords = ["Bleee76576", "Kkbca876", "UGH765"]

let randomNumber = Math.ceil(Math.random()*3)		//note keď *2 generujú sa iba 1 a 2
																	//note keď *3 tak sa mi generujú 1, 2 a 3
let index = passwords.length - randomNumber			//note password.length je dĺžka pola, od ktorej odpočítam randomNumber, ktoré generuje náhodné čísla od 1 po 3, čiže napr.: keď bude password.lenght "2" a randomNumber "2", tak 2 - 2 = 0 a tým pádom bude heslo "Bleee76576".

console.log(passwords[index])

//------------------------------------------------------------------------------------------

// Pridavanie do pola cez "prompt" 3 od konca a 3 od začiatku
// let nickName = prompt("Zadaj meno")
// 	console.log(nickName)

	// Riešenie 1
	// let myArray = []
	// myArray.push(prompt("Pridaj meno na koniec:"))
	// myArray.push(prompt("Pridaj meno na koniec:"))
	// myArray.push(prompt("Pridaj meno na koniec:"))
	// // Riešenie 2
	// myArray.unshift(prompt("Pridaj meno na začiatok:"))
	// myArray.unshift(prompt("Pridaj meno na začiatok:"))
	// myArray.unshift(prompt("Pridaj meno na začiatok:"))

	// console.log(myArray)

//------------------------------------------------------------------------------------------
console.log("%cÚloha 18:", "color: red; font-weight: bold")
/**
Vytvorte pole s názvom toDo a uložte do neho 4 úlohy, ktoré máte spraviť:
- vyvenčiť psa
- kúpiť kečup
- vymaľovať izbu
- spraviť si desiatu

Potom pole toDo vypíšte do tohoto tvaru:
1. vyvenčiť psa
2. kúpiť kečup
3. vymaľovať izbu
4. spraviť si desiatu
*/

let toDo = ["vyvenčiť psa", "kúpiť kečup", "vymaľovať izbu", "spraviť si desiatu"]

toDo.forEach(function (activity, index) {
	let number = index + 1						//note zariadí aby začínalo od 1 a nie od 0
	console.log(`${number}. ${activity}`)	//note pridá "." za číslom
})

//------------------------------------------------------------------------------------------
console.log("%cÚloha 19:", "color: red; font-weight: bold")
/**
1) Vytvorte pole toDo s úlohami:
	postrihať video
	upratať izbu
	poupratovať

	Vypíšte pole v tvare:
	1. postrihať video
	2. upratať izbu
	3. poupratovať

2) Vytvorte prázdne pole a pomocou cyklu ho naplňte číslami od 0 po 4. Pole vypíšte do konzole.
*/

let toDo1 = ["postrihať video", "upratať izbu", "poupratovať"]
for (let i = 0; i < toDo1.length; i++) {
	console.log(`${i + 1}. ${toDo1[i]}`)
}

let numbers = []
for (let index = 0; index < 5; index++) {
	numbers.push(index)
}

for (let index = 0; index < numbers.length; index++) {
	console.log(numbers[index])	
}

//------------------------------------------------------------------------------------------
console.log("%cÚloha 20:", "color: red; font-weight: bold")
/**
Pomocou prompt() zadáte krstné meno podozrivého a do konzole sa vypíšu všetky jeho údaje. Každý údaj prehľadne na jeden riadok.
Napr.:
Meno: Jana
Priezvisko: Ružová
atď.

Budete musieť nájsť objekt podľa mena a ten sa potom vypíšete. K nájdeniu objektu použite findIndex
*/

let criminals = [{
	firstName: "Róbert",
	secondName: "Fico",
	birth: 1964,
	address: "Sokolska",
	city: "Bratislava"
}, {
	firstName: "Nórbert",
	secondName: "Bödör",
	birth: 1977,
	address: "Mons. Bartosiewicza",
	city: "Nitrianske Hrnčiarovce"
}, {
	firstName: "Tibor",
	secondName: "Gašpar",
	birth: 1962,
	address: "Na Hôrke",
	city: "Nitra"
}]

// let suspect = prompt("Zadaj krstné meno podozrivého")
let suspect = "Róbert"

let result = criminals.findIndex(function (oneSuspect) {
	return oneSuspect.firstName === suspect
})

let ourSuspect = criminals[result]

console.log(`Podozrivý:
	Meno: ${ourSuspect.firstName}
	Priezvisko: ${ourSuspect.secondName}
	Rok narodenia: ${ourSuspect.birth}
	Adresa: ${ourSuspect.address}
	Mesto: ${ourSuspect.city}
`)

//------------------------------------------------------------------------------------------
console.log("%cÚloha 21:", "color: red; font-weight: bold")
/**
Svedok videl z miesta vraždy odchádzať auto.
Vie len to, že poznávacia značka obsahovala 22.
Vašou úlohou je v nižšie uvedenej databáze kriminálnikov nájsť tých, ktorí majú v ŠPZ 22.
Ich všetký údaje následne vypíšte do konzole. Napr.:
Meno:
Priezvisko:
Rok narodenia
atď.

To, čo hľadáte (v našom prípade 22), bude zadávané pomocou promptu.
*/

let criminals1 = [{
	firstName: "Martin",
	secondName: "Zelený",
	birth: 1985,
	licencePlate: "85C3322",
	address: "U sloupů 16",
	city: "České Budějovice"
}, {
	firstName: "Jana",
	secondName: "Růžová",
	birth: 1996,
	licencePlate: "93K3922",
	address: "Malská 29",
	city: "České Budějovice"
}, {
	firstName: "Filip",
	secondName: "Modrý",
	birth: 1989,
	licencePlate: "2EP6328",
	address: "Stevardská 38",
	city: "České Budějovice"
}]

let witness = prompt("Zadajte údaj:")

let search = criminals1.filter(function (oneSuspect) {
	let searching = oneSuspect.licencePlate?.toLowerCase().includes(witness)
	return searching
})

search.forEach(function (oneSuspect) {
	console.log(`Podozrivý:
		Meno: ${oneSuspect.firstName}
		Priezvisko: ${oneSuspect.secondName}
		Rok narodenia: ${oneSuspect.birth}
		Adresa: ${oneSuspect.address}
		Mesto: ${oneSuspect.city}
		ŠPZ: ${oneSuspect.licencePlate}
	`)
})

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
