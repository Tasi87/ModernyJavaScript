	console.log("%cVyberanie elementov pomocou JavaScriptu:", "color: red; font-weight: bold")
	
	// querySelector
	//note keď chcem pomocou JS vybrať jednotlivý element
	//! vždy vyberie IBA PRVÚ možnosť
	//! pokiaľ vyberám pomocou "id" tak musím zadať "#názov IDčka"
	const paragraph = document.querySelector("p")
	console.log(paragraph)
	
	// querySelectorAll
	//note pracuje sa s ním ako s poliami
	//! vyberie všetky prvky
	//! pokiaľ vyberám pomocou "class" tak musím zadať ".názov class"
	let allParagraphs = document.querySelectorAll("p")
	console.log(allParagraphs)
	// console.log(allParagraphs[0])
	// console.log(allParagraphs[1])
	// console.log(allParagraphs[2])
	
	// getElementById
	let myId = document.getElementById("DOOM")
	console.log(myId)
	
	// getElementByClassName
	//note tiež pracuje ako s poliami
	let myClass = document.getElementsByClassName("para")
	console.log(myClass)
	// console.log(myClass[0])
	// console.log(myClass[1])
	
//------------------------------------------------------------------------------------
	console.log("%cPráca s textom pomocou JavaScriptu:", "color: red; font-weight: bold")
	
	// textContent
	//note vypíše text v elemente
	//! vyberie iba vyslovene text
	//! odolné proti "cross side scripting attacks" (XSS attacks)
	let head = document.querySelector("h1")
	console.log(head.textContent)
	//note môžem použiť aj na prepísanie textu v elemente
	// head.textContent = " Nový nadpis!"
	
	// innerText
	//note vypíše text v elemente
	//! nie je odolné voči XXS attacks, pokiaľ nie je potreba, tak nevyužívame
	// console.log(head.innerText)
	
	// innerHTML
	//note vypíše text v elemente
	//! vyberá aj vnútorné HTML, čiže aj vnútorné tagy
	console.log(head.innerHTML)
	
//------------------------------------------------------------------------------------
	console.log("%cPrechádzanie polí odstavcov '<p></p>' pomocou 'forEach':", "color: red; font-weight: bold")
	
	let para = document.querySelectorAll("p")
	// para.forEach(function(onePara) {
	// 	console.log(onePara.textContent)
	// });
	
	para.forEach(OnePara => {
		// console.log(OnePara.textContent)
	});

//------------------------------------------------------------------------------------
	console.log("%cOdstraňovanie prvkov podľa obsahu:", "color: red; font-weight: bold")

 	let zoznam = document.querySelectorAll(".zoznam")
	zoznam.forEach(oneZoznam => {
		if (oneZoznam.textContent.toLowerCase().includes("nakŕmiť")) {
			oneZoznam.remove()
		}
	});

	// Odstránenie všetkých "p"
	allParagraphs.forEach(deleteAllP => {
		deleteAllP.remove()
	});
	// Odstránenie všetkých "h2"
	let h2 = document.querySelectorAll("h2")
	h2.forEach(deleteAllH2 => {
		deleteAllH2.remove()
	});

//------------------------------------------------------------------------------------
	console.log("%cVytváranie nového HTML elementu a jeho pridanie do stránky:", "color: red; font-weight: bold")

	const newPara = document.createElement("p")
	newPara.textContent = "Text do nového odstavca."
	//note ".appendChild" znamená pridaj potomka
	document.querySelector("header").appendChild(newPara)

	const newDiv = document.createElement("div")
	document.querySelector("header").appendChild(newDiv)
	
	const secPara = document.createElement("p")
	newDiv.appendChild(secPara)
	secPara.textContent = "Toto je odstavec pre div."

	//note Toto pridá text na koniec do daného elementu bez prepísania pôvodného textu
	secPara.append(" Nový text.")

	//note Toto pridá textna začiatok do daného elementu bez prepísania pôvodného textu
	secPara.prepend("Starý text. ")

	const newSpan = document.createElement("span")
	newSpan.textContent = "Nový span "
	secPara.prepend(newSpan)

//------------------------------------------------------------------------------------
	// console.log("%cPráca s textom pomocou JavaScriptu:", "color: red; font-weight: bold")

//------------------------------------------------------------------------------------
	// console.log("%cPráca s textom pomocou JavaScriptu:", "color: red; font-weight: bold")

//------------------------------------------------------------------------------------
	// console.log("%cPráca s textom pomocou JavaScriptu:", "color: red; font-weight: bold")

//------------------------------------------------------------------------------------
	// console.log("%cPráca s textom pomocou JavaScriptu:", "color: red; font-weight: bold")

//------------------------------------------------------------------------------------
	// console.log("%cPráca s textom pomocou JavaScriptu:", "color: red; font-weight: bold")

//------------------------------------------------------------------------------------
	// console.log("%cPráca s textom pomocou JavaScriptu:", "color: red; font-weight: bold")

//------------------------------------------------------------------------------------
	// console.log("%cPráca s textom pomocou JavaScriptu:", "color: red; font-weight: bold")

//------------------------------------------------------------------------------------
	// console.log("%cPráca s textom pomocou JavaScriptu:", "color: red; font-weight: bold")

//------------------------------------------------------------------------------------
	// console.log("%cPráca s textom pomocou JavaScriptu:", "color: red; font-weight: bold")
