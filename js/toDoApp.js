let myToDos = [{
	text: "Vyniesť kôš",
	completion: false,
}, {
	text: "Upretať",
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

let toDoLeft = myToDos.filter(function (oneTodo) {
	return !oneTodo.completion
	//note "return oneTodo.completion" vracia vždy keď je hodnota "true"
	// "return oneTodo.completion" = "return oneTodo.completion === true"
	//idea "return !oneTodo.completion" vráti prevrátenú hodnotu, takže "false"
	//	"return !oneTodo.completion" = "return oneTodo.completion === false"
})

const newPara = document.createElement("p")
document.querySelector("main").appendChild(newPara)
newPara.textContent = "Ešte mi zostáva/jú " + toDoLeft.length + " úlohy!"
//idea newPara.textContent = `Ešte mi zostáva/jú ${toDoLeft.length} úlohy!`

/**
Vypísať všetky úlohy do zoznamu na stránke
*/

// Vytvorenie elementov pre zoznam úloh
const newUl = document.createElement("ul")
	document.querySelector("main").appendChild(newUl)
	
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