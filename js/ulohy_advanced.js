console.log("%c Úloha 1:", "color: red; font-weight: bold")
/**
1) Vyberte pomocou querySelectoru nadpis h1 a vypíšte ho do konzoly

2) Vyberte pomocou querySelectoru odstavec s ID test2 a vypíšte ho do konzoly

3) Vyberte pomocou querySelectoruAll oba nadpisy h2 a vypíšte ich do konzoly každý zvlášť

4) Vyberte pomocou querySelectoruAll oba odstavce test1 a vypíšte ich do konzoly každý zvlášť

5) Vyberte pomocou getElementByClassName odstavce s triedou test1 a oba vypíšte do konzoly každý zvlášť

6) Vyberte pomocou getElementById odstavec s ID test2 a vypíšte ho do konzoly
*/

// 1)
const head1 = document.querySelector("h1")
// console.log(head1)

// 2)
let paraTest2 = document.querySelector("#test2")
// console.log(paraTest2)

// 3)
let head2 = document.querySelectorAll("h2")
// console.log(head2[0])
// console.log(head2[1])
// console.log(head2[2])

// 4)
let paraTest1 = document.querySelectorAll(".test1")
// console.log(paraTest1)
// console.log(paraTest1[0])
// console.log(paraTest1[1])

// 5
let paraClass = document.getElementsByClassName("test1")
// console.log(paraClass[0])
// console.log(paraClass[1])

// 6
const paraId = document.getElementById("test2")
// console.log(paraId)

//------------------------------------------------------------------------------------
console.log("%c Úloha 2:", "color: red; font-weight: bold")
/**
V html vytvorte nadpisy h1, h2, h3. Vo všetkých bude ľubovolný text. U všetkých nadpisov nastavte, že po kliknutí na nadpis sa zmení text na "Klikni na nadpis nižšie". Výsledok bude, že keď kliknete na nadpis h1, tak sa zmení na "Klikni na nadpis nižšie". Po kliknutí na nadpis nižšie sa znova nadpis zmení na "Klikni na nadpis nižšie" atď.
*/

// Vytvorenie h elementov
// const creatH1 = document.createElement("h1")
// creatH1.textContent = "Sem KLIKNI!"
// document.querySelector("section").appendChild(creatH1)

// const creatH2 = document.createElement("h2")
// creatH2.textContent = "Sem KLIKNI!"
// document.querySelector("section").appendChild(creatH2)

// const creatH3 = document.createElement("h3")
// creatH3.textContent = "Sem KLIKNI!"
// document.querySelector("section").appendChild(creatH3)

// // Funkcia na kliknutie (call back function)

// document.querySelector("section").querySelector("h1").addEventListener("click", function (event) {
// 	event.target.textContent = "Klikni na nadpis nižšie"
// })

// document.querySelector("section").querySelector("h2").addEventListener("click", function (event) {
// 	event.target.textContent = "Klikni na nadpis nižšie"
// })

// document.querySelector("section").querySelector("h3").addEventListener("click", function (event) {
// 	event.target.textContent = "Klikni na nadpis nižšie"
// })


//------------------------------------------------------------------------------------
console.log("%c Úloha 3:", "color: red; font-weight: bold")

let criminals = [{
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
	firstName: "Anna",
	secondName: "Modrá",
	birth: 1989,
	licencePlate: "2EP6328",
	address: "Stevardská 38",
	city: "České Budějovice"
}]

// Uloženie dát z Poľa
let filters = {
	//note tu zadáme hľadaný text
	searchText: ""
}

// Filter
											//! ourCriminals a tryToFind môžu byť akékoľvek názvy
const renderCriminals = function (ourCriminals, tryToFind) {
	//note do "arrayResult" ukladám výsledky, ktoré odpovedajú tomu, čo vpisujem do "input"
	let arrayResult = ourCriminals.filter(function (oneSuspect) {
		//note pýtam sa "includes"(zahrňuje) to, čo máme v tryToFind, ale ten text máme v "searchText", preto zadávam "inclueds(tryToFind.searchText.toLowerCase())"
		return oneSuspect.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase())
	})

// Premazávanie nepotrebných výsledkov
document.querySelector("#idCriminal").innerHTML = ""

// Vypisovanie výsledku
arrayResult.forEach(function (oneSuspect) {
	let para = document.createElement("p")
	//note ".innerHTML" bude brať ako html a nebude vypisovať <br> ako pri ".textContent"
	para.innerHTML = `
	Meno: ${oneSuspect.firstName} <br>
	Priezvisko: ${oneSuspect.secondName} <br>
	Rok narodenia: ${oneSuspect.birth} <br>
	ŠPZ: ${oneSuspect.licencePlate} <br>
	Adresa: ${oneSuspect.address} <br>
	Mesto: ${oneSuspect.city}
	`
	document.querySelector("#idCriminal").appendChild(para)
})

}

// Načítanie dát z Poľa
let licencePlate = document.querySelector("#licence-plate")

licencePlate.addEventListener("input", function (event) {
	//note vpisovaný text do inputu ukladám do "filters" a do "searchText"
	filters.searchText = event.target.value
	
	renderCriminals(criminals, filters)
})

//------------------------------------------------------------------------------------
// console.log("%c Úloha 21:", "color: red; font-weight: bold")

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
	
//! Odstránenie prebytočného obsahu
	// Odstránenie všetkých "p"
	let allParagraphs = document.querySelectorAll("p")
	allParagraphs.forEach(deleteAllP => {
		deleteAllP.remove()
	});
	// Odstránenie všetkých "h2"
	let h2 = document.querySelectorAll("h2")
	h2.forEach(deleteAllH2 => {
		deleteAllH2.remove()
	});
	// Odstránenie input-txt
	let input = document.querySelector("#input-txt")
	input.remove()

