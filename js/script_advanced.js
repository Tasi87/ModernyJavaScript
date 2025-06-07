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
	console.log("%cVyberanie elementov pomocou JavaScriptu:", "color: red; font-weight: bold")



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
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------