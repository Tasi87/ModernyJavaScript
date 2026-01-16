// // Pridanie položky do Local storage
// localStorage.setItem("location", "Bratislava")
// localStorage.setItem("firstName", "Peter")

// // Update položky
// localStorage.setItem("location", "Kremnica")
// localStorage.setItem("firstName", "Laura")

// // Získanie položky
// localStorage.getItem("location")
// // console.log(localStorage.getItem("location"))
// // console.log(localStorage.getItem("firstName"))

// // Zmazanie položky
// // localStorage.removeItem("location")
// // localStorage.removeItem("firstName")

// // Zmazanie všetkého v Local storage
// localStorage.clear()

//------------------------------------------------------------------------------------------

// let user = {
// 	firstName: "Laura",
// 	age: 27
// }
// //note toto spraví z objektu string
// let userJSON = JSON.stringify(user)
// // console.log(userJSON)
// //note nastavenie položky "user"
// localStorage.setItem("user", userJSON)

// let userFromLS = localStorage.getItem("user")
// //note toto zmení string na normálny objekt kde text je string a číslo je number
// let myUser = JSON.parse(userFromLS)
// // console.log(myUser)

// console.log(`Ahoj, ja som ${myUser.firstName} a mám ${myUser.age} rokov.`)

//------------------------------------------------------------------------------------------

// //note zabezpečí aby pri ďaľšom načítaní sa opätovne nemazalo a nevytváralo nové pole
// if(localStorage.getItem("users") == null) {
// 	var myArray = [] //! !!!let by nefungovalo, ale var funguje!!!
// } else {
// 	// vytiahne "users" a rovno to pridá k existujúcim "users"
// 	myArray = JSON.parse(localStorage.getItem("users"))
// }

// 	//! !!!FUNGUJE PRI ODOSLANÍ FORMULÁRU!!!
// 	let myForm = document.querySelector("#test-form")
// 	myForm.addEventListener("submit", function (e) {
// 		e.preventDefault()

// 		//note to, čo napíšem do inputu sa uloží do poľa "myArray"
// 		myArray.push (e.target.elements.firstName.value)
// 		// prevedenie všetkého na stringy, čo chcem uložiť do úložiska "myArray"
// 		myArrayToLS = JSON.stringify(myArray)
// 		// uloženie do úložiska "myArray", 
// 		// pričom vytvorí pole "user" a priďaľšom vkladaní upraví pole "user"
// 		localStorage.setItem("users", myArrayToLS)
		
// 		//note vymaže input po odoslaní formuláru
// 		e.target.elements.firstName.value = ""

// 		//note funkcia na získavanie "user" z localStorage
// 		let myArrayFromLS = localStorage.getItem("users")
// 		//note funkcia na "prejdenie cez vrátnicu dát" localStoragu
// 		let myArrayFromLSj = JSON.parse(myArrayFromLS)
		
// 		//note funkcia na vytvorenie "<p></p>" v html
// 		let paragraph = document.createElement("p")
// 		//note vybratie posledného objektu
// 		paragraph.textContent = myArrayFromLSj[myArrayFromLSj.length - 1]
// 		//note vloženie "<p></p>" na konkrétne miesto pomocou "id"
// 		document.querySelector("#my-users").appendChild(paragraph)
		
// 	})

// 	//! !!!funguje bez ohľadu na odoslanie formuláru!!!
// 	//note načítanie "users" z "localStarage"
// 	let myPresentArray = localStorage.getItem("users")
// 	//note funkcia na "prejdenie cez vrátnicu dát" localStoragu
// 	let myPresentArrayJ = JSON.parse(myPresentArray)

// 	if (myPresentArrayJ !== null) {
// 		//note cyklus "forEach" s funkciou na ukladanie do "oneUser"
// 		myPresentArrayJ.forEach(function (oneUser) {
// 			// vytvorenie "<p></p>" v html
// 			let paragraph = document.createElement("p")
// 			// uloženie toho "oneUser"
// 			paragraph.textContent = oneUser
// 			// chytíme "<div></div>" do ktorého chcem ten paragraph vytvoriť
// 			document.querySelector("#my-users").appendChild(paragraph)
// 		})
// 	}

//------------------------------------------------------------------------------------------

let myForm = document.querySelector("#test-form")

if(localStorage.getItem("criminals") == null){
	var myArray = []
} else {
	myArray = JSON.parse(localStorage.getItem("criminals"))
}

// odoslanie formuláru
myForm.addEventListener("submit", function (e) {
	e.preventDefault()

	//note ".push" znamená, že to dá na koniec poľa
	myArray.push({
		id: "",
		firstName: e.target.elements.firstName.value,
		secondName: e.target.elements.secondName.value,
		crime: e.target.elements.crime.value,
	})
	
	e.target.elements.firstName.value = ""
	e.target.elements.secondName.value = ""
	e.target.elements.crime.value = ""

	myArrayJSON = JSON.stringify(myArray)
	localStorage.setItem("criminals", myArrayJSON)

})

// vypisovanie späť do stránky
let toList = document.querySelector(".to-list")
toList.addEventListener("click", function () {

	if(localStorage.getItem("criminals") == null ){
		
		let paragraph = document.createElement("p")
		paragraph.textContent = "Databáza zločincov je prázdna."
		document.querySelector(".list-criminals").appendChild(paragraph)

	//note vypíše obsah local storage
	} else {
		
		let myStorage = localStorage.getItem("criminals")	
		let myStorageJSON = JSON.parse(myStorage)
		
		//note premazanie vypísaného zoznamu
		document.querySelector(".list-criminals").innerHTML = ""
	
		myStorageJSON.forEach(oneCriminal => {
			let paragraph = document.createElement("p")
	
			paragraph.innerHTML = 
				`
				Meno: ${oneCriminal.firstName}, <br>
				Priezvisko: ${oneCriminal.secondName}, <br>
				Zločin: ${oneCriminal.crime} <br>
				`
			//note pridanie "class" k vznikajúcemu elementu
			paragraph.classList.add("basic-styles")
	
	
			document.querySelector(".list-criminals").appendChild(paragraph)
		});
	}
})

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------