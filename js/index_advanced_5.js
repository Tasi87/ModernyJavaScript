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
	let scrolled = window.scrollY
	let scrollable = document.documentElement.scrollHeight - window.innerHeight

	// if (Math.floor(scrolled) === scrollable) {
	// 	let toTop = document.querySelector(".top-page")
	// 	toTop.style.display = "block"

	// 	toTop.addEventListener("click", function () {
	// 		toTop.style.display = "none"
	// 	})
	// }

	if (Math.floor(scrolled) > 50) {
		let toTop = document.querySelector(".top-page")
		toTop.style.display = "block"

		toTop.addEventListener("click", function () {
			toTop.style.display = "none"
		})
	}
	
})