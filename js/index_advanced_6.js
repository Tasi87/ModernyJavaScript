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
// localStorage.setItem("user", userJSON)

// let userFromLS = localStorage.getItem("user")
// //note toto zmení string na normálny objekt kde text je streing a číslo je number
// let myUser = JSON.parse(userFromLS)
// // console.log(myUser)

// console.log(`Ahoj, ja som ${myUser.firstName} a mám ${myUser.age} rokov.`)

//------------------------------------------------------------------------------------------

let myArray = []

let myForm = document.querySelector("#test-form")
myForm.addEventListener("submit", function (e) {
	e.preventDefault()

	//note to, čo napíšem do inputu sa uloží do poľa "myArray"
	myArray.push (e.target.elements.firstName.value)
	myArrayToLS = JSON.stringify(myArray)
	localStorage.setItem("users", myArrayToLS)
	
	//note vymaže input po odoslaní formuláru
	e.target.elements.firstName.value = ""

	//note funkcia na získavanie "user" z localStorage
	let myArrayFromLS = localStorage.getItem("users")
	//note funkcia na "prejdenie cez vrátnicu dát" localStoragu
	let myArrayFromLSj = JSON.parse(myArrayFromLS)

	//note funkcia na vytvorenie "<p></p>" v html
	let paragraph = document.createElement("p")
	//note vybratie posledného objektu
	paragraph.textContent = myArrayFromLSj[myArrayFromLSj.length - 1]
	//note vloženie "<p></p>" na konkrétne miesto pomocou "id"
	document.querySelector("#my-users").appendChild(paragraph)

})

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------