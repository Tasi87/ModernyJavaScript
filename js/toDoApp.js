let myToDos = [{
	text: "Vyniesť kôš",
	completion: false,
}, {
	text: "Upratať",
	completion: false,
}, {
	text: "Ísť nakúpiť",
	completion: true,
}, {
	text: "Nakŕmiť psa",
	completion: true,
}, {
	text: "Vyvenčiť psa",
	completion: false,
}]

// let toDoLeft = myToDos.filter(function (oneTodo) {
// 	return !oneTodo.completion
// 	//note "return oneTodo.completion" vracia vždy keď je hodnota "true"
// 	// "return oneTodo.completion" = "return oneTodo.completion === true"
// 	//idea "return !oneTodo.completion" vráti prevrátenú hodnotu, takže "false"
// 	//	"return !oneTodo.completion" = "return oneTodo.completion === false"
// })

// const newPara = document.createElement("p")
// document.querySelector("main").appendChild(newPara)
// newPara.textContent = "Ešte mi zostáva/jú " + toDoLeft.length + " úlohy!"
// //idea newPara.textContent = `Ešte mi zostáva/jú ${toDoLeft.length} úlohy!`

/**
Vypísať všetky úlohy do zoznamu na stránke
*/

// Vytvorenie elementov pre zoznam úloh
const newUl = document.createElement("ul")
	document.querySelector("#results-todos").appendChild(newUl)
	
//note (1)Najprv si zadefinujem cyklus "for",(2) v ňom vytvorím element, (3)potom do vytvoreného elementu vypíšem objekty z poľa a pomocou ".text" ich vypíše vo forme textu. (4)Ako posledný krok zadefinujem kde sa má zobraziť/objaviť element, ktorý som vytvoril v kroku (2).
//(1)
for (let i = 0; i < myToDos.length; i++) {
//(2)
	const newLi = document.createElement("li")
//(3)
	newLi.textContent = myToDos[i].text
//(4)
	document.querySelector("ul").appendChild(newLi)	
}

//! Pre vytvorenie zoznamu ešte zostávajúcich úloh
// for (let i = 0; i < myToDos.length; i++) {
// 		const newLi = document.createElement("li")
// 		if (!myToDos[i].completion) {
// 			newLi.textContent = myToDos[i].text
// 			document.querySelector("ul").appendChild(newLi)	
// 		}
// }

//---------------------------------------------------------------------------

document.querySelector(".myBtn").addEventListener("click", function (event) {
	event.target.textContent = "test"
})

//---------------------------------------------------------------------------

// // Variables
// let btn1 = document.querySelector(".first-btn")
// let btn2 = document.querySelector(".second-btn")

// // Listeners
// btn1.addEventListener("click", function () {
// 	console.log(`Kliknutie na "Prvé tlačítko"`)
// });
// btn2.addEventListener("click", function () {
// 	console.log(`Kliknutie na "Druhé tlačítko"`)
// })

//---------------------------------------------------------------------------

/**
Filtrovanie
*/

//idea Pre ukladanie textu z vyhľadávacieho políčka
// Vytvorím si objekt, do ktorého budem ukladať vyhľadávaný text, následne objekt použijem v "Načítaní texta z poľa"
const filters = {
	//! nastavené na prázdny STRING, pretože zo začiatku to je prázdne
	searchingText: ""
}

//idea Všeobecná filtrovacia funkcia
// stanovenie premmenej "renderToDos", ktorá bude funkcia, do nej zavoláme pole objektov a čo hľadáme.
//! Je to všeobecný predpis, kde to čo volám si môžem akokoľvek pomenovať!
let renderToDos = function (ourToDos, weSearching) {
	//note Vytvorím ďaľšiu premennú, ktorá bude výsledok filtrovania
	// na "ourToDos" aplikujem filter, kde z celého poľa vytiahnem jeden objekt a uložím ho do "oneTodo"
	let ourResults = ourToDos.filter(function(oneToDo){
		// "oneToDo.text" vytiahne text z poľa a prevediem ho na malé písmena
		return oneToDo.text.toLowerCase().includes(weSearching.searchingText.toLowerCase())
	//! "myToDos" je pole objektov, pôjde namiesto "ourToDos"
	 //! za "weSearching" sa dosadí "filters"
	})
	
//idea Vypisovanie úloh do stránky
	// Prečistí aby nevytváralo neustále nový "para"
	document.querySelector("#toDosLeft").innerHTML = ""

	// funkcia na vyfiltrovanie a vypísanie zostávajúcich úloh po vyfiltrovaní
	let leftToDos = ourResults.filter(function (oneToDo) {
		return !oneToDo.completion
	})

	// vytvorenie nového paragrafu s počtom úloh, ktoré ešte zostávajú po vyfiltrovnaí
	let para = document.createElement("p")
	para.textContent = `Ešte zostáva úloh: ${leftToDos.length}`
	document.querySelector("#toDosLeft").appendChild(para)


	// console.log(ourResults)

	//note Vymazanie elementov, pre znovuvytvorenie
	document.querySelector("#results-todos").innerHTML = ""
	
	//note Vytvorenie "ul" a presné umiestnenie
	let newUl = document.createElement("ul")
	document.querySelector("#results-todos").appendChild(newUl)

	//note funkcia na vypísanie zoznamu
	ourResults.forEach(function (oneResult) {
	//note Vytvorenie "li" elementov
		let newLi = document.createElement("li")
		//note vypísanie textu
		newLi.textContent = oneResult.text
		//note  umiestnenie "li" do "ul"
		document.querySelector("ul").appendChild(newLi)
	});
}

//idea Načítame text z políčka
//note vyhľadávame v HTML podľa "id search-text"
let searchText = document.querySelector("#search-text")
//note na premennú "searchText" pripevním plošticu
searchText.addEventListener("input", function (event) {
	 	// "event.target.value" sleduje to, čo vpisujem do "input" v HTML
		// Použitie objektu "filters"
		//! až tu sa vypĺňa objekt
		filters.searchingText = event.target.value
		// console.log(filters)
	 
	 // Voláme filtrovaciu funkciu
	 //! "myToDos" je pole objektov, pôjde namiesto "ourToDos"
	 //! za "weSearching" sa dosadí "filters"
	 renderToDos(myToDos, filters)
})

//---------------------------------------------------------------------------



//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------