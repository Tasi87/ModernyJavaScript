// window.addEventListener("scroll", function () {
// 	// variables
// 	let scrolled = window.scrollY
// 	let scrollable = document.documentElement.scrollHeight - window.innerHeight
// 	//note "inner.Height" je vnútorná časť webu, to pod záložkami, kde sa mi načíta obsah stránky

// 	if (Math.floor(scrolled) === scrollable) {
// 		alert("Si na KONCI!!!")
// 	}
// })

// 		!!SCROLLOVACIA IKONKA!!!

window.addEventListener("scroll", function () {
	// variables
	//note "scrolled" vypočítava polohu scrollu na stránke
	let scrolled = window.scrollY
	// console.log(scrolled)
	//note "scrollable" mi pomôže ukázať maximálnu hodnotu scrollu
	// let scrollable = document.documentElement.scrollHeight - window.innerHeight
	// console.log(scrollable)
	
	if (Math.floor(scrolled) < 50) {
		let toTop = document.querySelector(".top-page")
		toTop.style.display = "none"

		//idea Toto tu už nie je potrebné, pretože som to prerobil,tak, že vždy "window.scrollY" klesne pod 50, tak nastane na šípke hore `display = "none"`
		// toTop.addEventListener("click", function () {
		// 	toTop.style.display = "none"
		// })
	} else {
		let toTop = document.querySelector(".top-page")
		toTop.style.display = "block"
	}
})

let firstItemMenu = document.querySelector(".first-item-menu")
let scrollGoal = document.querySelector(".scroll-goal").offsetTop

firstItemMenu.addEventListener("click", function () {
	window.scrollTo({
		top: scrollGoal,
		behavior: "smooth" //! v mozille nefunguje!
	})
})