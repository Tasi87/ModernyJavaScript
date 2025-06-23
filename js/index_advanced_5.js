window.addEventListener("scroll", function () {
	// variables
	let scrolled = window.scrollY
	let scrollable = document.documentElement.scrollHeight - window.innerHeight
	//note "inner.Height" je vnútorná časť webu, to pod záložkami, kde sa mi načíta obsah stránky

	if (Math.floor(scrolled) === scrollable) {
		alert("Si na KONCI!!!")
	}
})