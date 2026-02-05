//idea Šípková notácia

//note 1. spôsob zápisu
	// const square = function (num) {
	// 	return num * num
	// }

//note 2. spôsob zápisu (moc často sa nepoužíva)
	// const square = (num) => {
	// 	return num * num
	// } 
//note 3.spôsob zápisu (kratší)
	const square = (num) =>  num * num
	
	console.log(square(5))
	console.log(square(4))

	// 1. napíšte šípkovu notáciu pre funkciu súčtu dvoch čísel
	let sum = (num1, num2) => num1 + num2
	
	console.log(sum(5,8))

	// 2. napíšte šípkovu notáciu pre funkciu delenia dvoch čísel
	let diff = (num1, num2) => num1 - num2

	console.log(diff(6,2))
	console.log(diff(10,12))