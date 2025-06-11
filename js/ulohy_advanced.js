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
const creatH1 = document.createElement("h1")
creatH1.textContent = "Sem KLIKNI!"
document.querySelector("section").appendChild(creatH1)

const creatH2 = document.createElement("h2")
creatH2.textContent = "Sem KLIKNI!"
document.querySelector("section").appendChild(creatH2)

const creatH3 = document.createElement("h3")
creatH3.textContent = "Sem KLIKNI!"
document.querySelector("section").appendChild(creatH3)

// Funkcia na kliknutie (call back function)

document.querySelector("section").querySelector("h1").addEventListener("click", function (event) {
	event.target.textContent = "Klikni na nadpis nižšie"
})

document.querySelector("section").querySelector("h2").addEventListener("click", function (event) {
	event.target.textContent = "Klikni na nadpis nižšie"
})

document.querySelector("section").querySelector("h3").addEventListener("click", function (event) {
	event.target.textContent = "Klikni na nadpis nižšie"
})


//------------------------------------------------------------------------------------
console.log("%c Úloha 21:", "color: red; font-weight: bold")

//------------------------------------------------------------------------------------
console.log("%c Úloha 21:", "color: red; font-weight: bold")

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