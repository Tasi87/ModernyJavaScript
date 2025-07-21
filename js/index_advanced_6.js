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

let user = {
	firstName: "Laura",
	age: 27
}
//note toto spraví z objektu string
let userJSON = JSON.stringify(user)
// console.log(userJSON)
localStorage.setItem("user", userJSON)

let userFromLS = localStorage.getItem("user")
//note toto zmení string na normálny objekt kde text je streing a číslo je number
let myUser = JSON.parse(userFromLS)
// console.log(myUser)

console.log(`Ahoj, ja som ${myUser.firstName} a mám ${myUser.age} rokov.`)

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------