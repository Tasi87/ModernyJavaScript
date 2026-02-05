//idea Šípková notácia
//! !!! Šípková notácia NEVIE PRACOVAŤ S "arguments", treba použiť klasickú funkciu!!!

//note 1. spôsob zápisu
	// const square = function (num) {
	// 	return num * num
	// }

//note 2. spôsob zápisu (moc často sa nepoužíva)
	// const square = (num) => {
	// 	return num * num
	// } 
//note 3.spôsob zápisu (kratší)
	const square = (num) =>  num * num
	
	console.log(square(5))
	console.log(square(4))

	// 1. napíšte šípkovu notáciu pre funkciu súčtu dvoch čísel
	let sum = (num1, num2) => num1 + num2
	
	console.log(sum(5,8))

	// 2. napíšte šípkovu notáciu pre funkciu delenia dvoch čísel
	let diff = (num1, num2) => num1 - num2

	console.log(diff(6,2))
	console.log(diff(10,12))

//---------------------------------------------------------------------------
//idea Šípková notácia v poli

const people = [{
	name: "Tasi",
	age: 38
}, {
	name: "Harry",
	age: 15
},{
	name: "Ron",
	age: 18
}]

// const less20 = people.filter(function (onePerson) {
// 	return onePerson.age < 20
// })

const less20 = people.filter((onePerson) => onePerson.age < 20)
console.log(less20)

// 1. nájdite človeka, kt. presne  15
	const age15 = people.filter((young) => young.age == 15)
	console.log(age15)

// 2. nájdite človeka, kt. sa volá Ron
	const exactName = people.filter((person) => person.name == "Ron")
	console.log(exactName)

// 3. ukázať rozdiel medzi filtrami
	//! !!!	rozdiel medzi "find" a "filter" je ten, že "find" nájde, a zobrazí prvý výsledok,
	//!		na ktorý narazí a "filter", zobrazí všetký výsledky	!!!
	/**
		rozdiel je v použití filtra, kde v prvom prípade filtrujem podľa "age"
		a v druhom prípade filtrujem podľa "name", pričom v druhom prípade
		pracujem so STRINGOM a podľa toho aj postupovať, string sa označuje ""
	*/ 
//---------------------------------------------------------------------------
							
const car = {
	color: "modrá",
	//! !!! Toto nefunguje !!!
	// getInfo:  () => `Farba tohoto aute je ${this.color}`
	getInfo:  function () {
		return `Farba tohoto aute je ${this.color}`			
	}
}

console.log(car.getInfo())
//---------------------------------------------------------------------------