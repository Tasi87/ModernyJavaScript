// console.log("Hallo, ich heiße Tasi.");

// String
	let firstName = "Tasi";
	let job = "instructor";
	console.log("Hallo, ich heiße " + firstName + " und ich arbeite als " + job + ".");

// Number
	let age = 37;

// Počtové operácie
	let x = age + 5;			// môžem používať aj iné matematické operácie "+", "*", "/".

	console.log("Volám sa " + firstName + " a mám " + age + ".");
	console.log("O päť rokov budem mať " + x + ".");
	console.log("O päť rokov budem mať " + (age + 5) + ".");
	// age = age + 5;
	// console.log("O päť rokov budem mať " + (age + 5) + ".");

// Premeny sa nesmú definovať viackrát ako raz
	//!	let age = 20;
	//!	let age = 30;
	//note	Takto predefinovať premenu môžem
	//!	let age = 20;
	//!	age = 30;

//	Názvy premenných
	//!	Nikdy by nemali začínať číslom ani špeciálne znaky nepoužívať!
	//		let 5m = 3	//! 		NEMÔŽE
			let m5 = 3;	//NOTE	MÔŽE
			console.log(m5);

// Žadne rezervované slová
	//! napr.: let if = 5;

//------------------------------------------------------------------------------------

// String
	let firstName1 = "Tasi";

// Number
	let age1 = 21;

// Boolean (true / false)
	let adult = age >= 18
	console.log(adult);

// Boolean - operátory
	let result = age <= 10;

	//note === rovná sa
	//note !== nerovná sa
	//note < menší (<=)
	//note > väčší (>=)

//------------------------------------------------------------------------------------

// Podmienky if a else

	let age2 = 10
	if(age2 >= 18) {
		console.log("Si dospleý")
	} else {
		console.log("Si dieťa")
	}
			// Spôsob zapísania bez else

			// if(age2 >= 18) {
			// 	console.log("Si dospleý")
			// }
			// if(age2 < 18) {
			// 	console.log("Si dieťa")
			// }

//------------------------------------------------------------------------------------

	let firstName2 = "Peter"

	if( firstName2 === "Tasi" ) {
		console.log("Ahoj Tasi")
	} else {
		console.log("Ahoj " + firstName2)
	}

//------------------------------------------------------------------------------------

// Logické operátory

	// a zároveň - &&
	let firstName3 = "Tasi"
	let height = 181

	if ( firstName3 === "Tasi" && height === 181 ) {
		console.log("Ja to on!")
	} else {
		console.log("Nie je to on.")
	}

		//note true = true, true
		//note false = false, true
		//note false = true, false
		//note false = false, false

	// alebo ||

	if ( firstName3 === "Tasi" || height === 181 ) {
		console.log("Našiel sa.")
	} else {
		console.log("Nenašiel sa.")
	}

		//note true = true, true
		//note true = false, true
		//note true = true, false
		//note false = false, false

//------------------------------------------------------------------------------------

// Scope - rozsah
	// Globálny scope (first)
	// Lokálny scope (second)

	let first = "Prvý text"

	if ( true ) {
		console.log(first)
		let second = "Druhý text"
		console.log(second)
		//note V tomto prípade je second dcérsky scope rodičovského scope (first)

		if ( true ) {
			let third = "Tretí text"
			console.log(third)
			console.log(second)
		}
	}

//------------------------------------------------------------------------------------

// Variable shadowing

	let myName = "Tasi"

	if ( true ) {
		let myName = "Peter"
		if ( true ){
			let myName = "Laura"
			console.log(myName)
		}
	}

	if ( true ) {
		console.log(myName)
		//note Tento blok je sesterský s predošlým blokom, preto vypíše "Tasi".
		//note Nemá prístup do sesterského bloku, kde je predefinovaný myName.
	}

//------------------------------------------------------------------------------------

// Funkcie

	function pozdrav1 () {
		console.log("Toto je pozdrav 1!")
	}

	pozdrav1()

	let pozdrav2 = function () {
		console.log("Toto je pozdrav 2!")
	}

	pozdrav2()

	// Šípkový zápis
	let pozdrav3 = () => console.log("Toto je pozdrav 3!")

	pozdrav3()

//------------------------------------------------------------------------------------

// Funkcie - parameter a argument

	// Parametre
	function naDruhu (num) {
		console.log(num * num) // (number * number)
	}

	// Argumenty
	naDruhu(3)

	function zdraviacaFunkcia(name) {
		console.log("Ahoj, ja som " + name)
	}

	zdraviacaFunkcia("Tasi")

//------------------------------------------------------------------------------------

	function nasobenie(num) {
		let result = num * num
		return result
	}
	//note "return" vracia výsledok funkcie aby sa s výsledkom dalo ďalej pracovať
	//! Výsledok funkcie MUSÍM uložiť aby som s ním mohol ďalej pracovať!

	let value1 = nasobenie(5)
	value1 = value1 + 50
	console.log(value1)

	function zvysovaciaFunkcia(num) {
		let result = num + 100
		return result
	}

	let value2 = zvysovaciaFunkcia (7)
	console.log(value2)

//------------------------------------------------------------------------------------

// undefined a null
	//note "undefined" je hláska JS
	//note "null" je definované programátorom

	// undefined v premennej
	let age3

	if( age3 === undefined ) {
		console.log("Prosím vypľnte vek.")
	} else {
		console.log(age3)
	}

	// undefined ako argument fukcie
	let mojaFunkcia = function( num ) {
		console.log(num)
	}

	mojaFunkcia()

	// undefined v return

	let mojaFunkcia2 = function ( num ) {
		return num
	}

	let value = mojaFunkcia2()
	console.log(value)

	// null ako priradená hodnota
	let myAge = 30
	myAge = null
	console.log(myAge)

//------------------------------------------------------------------------------------

	// Funkcia s viacero parametrami
	function sucet(a, b, c) {
		return a + b + c
	}

	let value4 =  sucet(5, 30, 3)
	console.log(value4)

	// Defaultna (východzia) hodnota
	function game(name = "Anonym", score = 0) {
		return "Meno: " + name + ", Score: " + score
	}

	// game()
	//note pokiaľ definujem hodnoty "game("Tasi" ,21)", tak sa mi vypíše do konzoly "Tasi", "21".
	// game(undefined, 50)
	//note pokiaľ by som zavola funkciu "game(50)", tak by mi 50 bralo ako meno aby som toto zmenil, tak musím zadať do funkcie namiesto mena "undefined".
	let value5 = game()
	console.log(value5)

//------------------------------------------------------------------------------------

// Funkcie Globálne a lokálne scope funkcie

	//note Globálny scope môžem používať kdekoľvek globálne a aj v Lokálnych scopoch.
	//note Lokálny scope (a, b, c) môžem použiť iba v Lokálnom "podscope" (myName2), ale nie v Globálnom scope. Používanie scopov funguje z hora dole, nie nopak (potomka nemôžem použiť v rodičovi, ale rodiča môžem použiť v potomkovi).

	// Globálny scope (num1, num2, num3)
	// Lokálny scope (a, b, c)
	// Lokálny scope (myName2)

	let num1 = 5
	let num2 = 3
	let num3 = 8

	function code(a, b, c) {
		// console.log(myName2)
		if ( a === num1 && b === num2 && c === num3 ) {
			console.log("Môžeš vstúpiť.")
			let myName2
		} else {
			console.log("Zlé zadaný kód. Skúste to prosím znovu.")
		}
	}

	code(5, 3, 8)

//------------------------------------------------------------------------------------

// Template strings

	let myName3 = "Hanry Proper"
	let age4 = 15
	console.log("Ahoj ja som " + myName3 + " a mám " + age4 + " rokov.")
	console.log("Ahoj ja som", myName3,"a mám",age4,"rokov.")
	//note Toto je Template strings
	console.log(`Ahoj, ja som ${myName3} a mám ${age4} rokov.`)

	function pozdrav(firstName, lastName) {
		console.log(`Ahoj, moje meno je ${firstName} a priezvisko je ${lastName}`)
	}

	pozdrav("Jožko", "Mrkvička")

//------------------------------------------------------------------------------------

// Objekty

	let myBook = {
		title: "Harry Potter a kameň mudrcov",
		author: "J. K. Rowlingová",
		published: 1997
	}

	// výpis jednotlivých vlastností
	console.log(myBook.title) 							
	//note "myBook.title" je bodková notácia
	console.log(myBook.author)
	console.log(myBook.published)
	
	// výpis všetkých vlastností naraz
	console.log(myBook)
	console.log(`${myBook.title} je kniha od autorky ${myBook.author} a bola vydaná v roku ${myBook.published}.`)

	// zmena vlastností objektu
	myBook.title = "Harry Potter a Tajomná komnata"
	myBook.published = 1998

	console.log(`${myBook.title} je kniha od autorky ${myBook.author} a bola vydaná v roku ${myBook.published}.`)
	
//------------------------------------------------------------------------------------

// Vypisovanie objektov pomocou funkcie
	let firstBook = {
		title: "Harry Potter a kameň mudrcov",
		author: "J. K. Rowlingová",
		published: 1997
	}
	
	let secondBook = {
		title: "Harry Potter a Tajomná komnata",
		author: "J. K. Rowlingová",
		published: 1998
	}

	function resultBook(book) {
		console.log(`Kniha od ${book.author} z roku ${book.published} sa volá ${book.title}.`)
	}

	resultBook(firstBook)
	resultBook(secondBook)

//------------------------------------------------------------------------------------

// Objekty a return
	
	function bookInfo(book) {
		return {
			basicInfo: `${book.title} od ${book.author}`,
			publishing: `Kniha ${book.title} bola vydaná v roku ${book.published}.`
		}
	}

	let result2 = bookInfo(firstBook)
	console.log(result2)
	//note môžem vypísať všetko alebo len to čo chcem, viď nižšie
	// console.log(result2.basicInfo)
	// console.log(result2.publishing)

//------------------------------------------------------------------------------------

// Objekty a ich metódy
	// Metódy
	//note Metóda je funkcia priradená nejakému objektu.

	let person1 = {
		//note toto sú PROPERTY / VLASTNOSTI
		firstName: "Jožko",
		lastName: "Mrkvička",
		age: 21,
		height: 181,
		salary: 5000,
		//note toto sú METHOD / METÓDY
		greet: function (friends/** toto je PARAMETER */) {
			console.log(`
				Ahoj, mám ${friends} priateľov.
				`)
		},
		toWork: function (job) {
			return "Idem do svojej práce čo je " + job
		}
	}

	console.log(person1.firstName)
	console.log(person1.height)
	person1.greet(5/** toto je ARGUMENT */)
	let result3 = person1.toWork("programátor") 
	//! odtialťo sa to vracia vďaka return a ukladá sa to do result3
	console.log(result3)
	//! toto to až vypíše

//------------------------------------------------------------------------------------

// Objekty a this
	//note this. zastupuje objekt a lepšie sa s ním pracuje keď sa píse kód objektovo, umožňuje pracovať univerzálne
	let person2 = {
		firstName: "Jožko",
		secondName: "Mrkvička",
		age: 100,
		greet: function () {
			console.log(this.firstName)
			console.log(this.secondName)
			console.log(this.age)
			console.log(`Ahoj, ja som ${this.firstName}`)
		}
	}
	
	person2.greet()
	
	let person3 = {
		firstName: "Janko",
		secondName: "Hraško",
		age: 20,
		greet: function () {
			console.log(this.firstName)
			console.log(`Ahoj, ja som ${this.firstName}`)
		}
	}
	
	person3.greet()

//------------------------------------------------------------------------------------
	
	let nickName = "Tasi"
		// dĺžka stringu
		console.log(nickName.length)					//note .lengt je PROPERTY
		// veľké/malé písmená
		console.log(nickName.toUpperCase())			//note .toUpperCase je METHOD
		console.log(nickName.toLowerCase())			
		// zahrňuje
		let sentence = "Tasi sa učí javascript."
		let word = "Tasi"
		console.log(sentence.includes(word))
		// odstranenie white spaces/bielych medzier
		let nick = "     Peanut"
	console.log(nick.trim())							//note odstraňuje prebytočné medzeri

//------------------------------------------------------------------------------------

	let number = 3.1453
	// zaokrúhľovanie na desatiné miesta
	console.log(number.toFixed(2))
	// zaokrúhľovanie na celé čísla
	console.log(Math.round(number))
	console.log(Math.floor(number))					//note zaokrúhľuje vždy dole
	console.log(Math.ceil(number))					//note zaokrúhľuje vždy hore
	// náhodné číslo
	console.log(Math.random())							//note desatiné čísla
	console.log(Math.random() *10)
	console.log(Math.ceil(Math.random() * 10))	//note náhodné čísla od 0 po 10
	// náhodné číslo z intervalu
	let min = -15
	let max = 0
	console.log(Math.floor(Math.random() * (max - min + 1)) + min)

//------------------------------------------------------------------------------------

// const a let
	//note const sa používa ak sa NIKDY nebude meniť hodnota premennej
	//note let sa používa ak sa hodnota premennej v priebehu času bude meniť
	// const a premenná
	const nickName1 = "Tasi"

	console.log(nickName1)

	// const a objekt
	//note obsah/vlastnotsti objektu môžeme prepisovať
	//! nemôžem meniť objekt ako celok napr.: nemôžem do const uložiť nový objekt
	const man = {
		age: 34
	}
	man.age = 50
//------------------------------------------------------------------------------------

	// var a let
	//! nezabraňuje opäatovnej predeklerácií premennej
	//note var sa už nepoužíva
	var age5 = 30
	var age5 = 40

	// chovanie v bloku
	//! nezabraňuje volanie premennej mimo bloku
	if (true) {
		var num4 = 5
	}
	console.log(num4)

	// divnosť u var
	//! konzola vypíše "undefined" a navypíše chybu
	console.log(value3)
	var value3 = 6

//------------------------------------------------------------------------------------

	// zmeny vlastností textu v konzole
	console.log("%cTento text je farebný.", "color: #db0000; font-weight: bold; background: #bada55")

//------------------------------------------------------------------------------------

	// Polia
	//note polia sa číslujú od 0
	let emlpoyes = ["David", "Martin", "Jana"]

	console.log(emlpoyes)
	console.log(emlpoyes[0])
	console.log(emlpoyes[1])
	console.log(emlpoyes[2])

	let data = ["Anna", 12, true, false, 8.314]

	console.log(data[0])
	console.log(data[1])
	console.log(data[2])
	console.log(data[3])
	console.log(data[4])

	// dĺžka pola
	console.log(emlpoyes.length)
	console.log(data.length)

	//note keď chcem zistiť poslednú hodnotu v poli bez toho aby som vedeľ koľko hodnôt má pole
	console.log(data[data.length-1])
	//note predposledná hodnota v poli atď.
	console.log(data[data.length-2])

//------------------------------------------------------------------------------------

	// Práca s poliami
		// Prepísanie prvku
		let testArray = ["test1", "test2", "test3"]
		testArray[0] = "Nový prvok v poli"
		console.log(testArray)

		// Pridanie posledného prvku
		testArray.push("test4")
		console.log(testArray) 

		// Odstránenie posledného prvku
		testArray.pop()
		console.log(testArray)

		// Pridanie prvého prvku
		testArray.unshift("test0")
		console.log(testArray)

		// Odstránenie prvého prvku
		testArray.shift()
		console.log(testArray)

//------------------------------------------------------------------------------------
	// Mdn array - properties a methods
	// odstránenie z ľubovolnej pozície v poli
	let myArray = ["jedna", "dva", "tri"]
	myArray.splice(0,1)		//note začne s odstraňovaním prvkov na pozící 1 a koľko prvkov odstráni
	console.log(myArray)

	// pridanie prvku do pola pred konkrétnu pozíciu pomocou "splice"
	let mySecondArray = ["jedna", "dva", "štyri"]
	mySecondArray.splice(2,0, "tri") //note vyber 2. prvok, nič nemaž, a pridaj pred neho prvok "tri"
	console.log(mySecondArray)

//------------------------------------------------------------------------------------

	// Cyklus "forEach"
	let employees = ["Aragorn", "Legolas", "Gymli", "Gandalf"]
	
	// vypisovanie obsahu poľa podľa mena
	// employees.forEach(function (person) {
		// 	console.log(person)
		// })
		
	// vypisovanie obsahu poľa podľa indexu
	employees.forEach(function (person, index) {
		console.log(index)
		console.log(person)
	})

//------------------------------------------------------------------------------------
	// Cyklus "for"
	for(let i = 0; i <= 5; i++) {			//note i++ = +1
		console.log(`${i}: testovaci text`)
	}

	// obrátený cyklus "for"
	for(let j = 3; j >= 0; j--) {		//note j-- = -1
		console.log(`${j}: test`)
	}

	// výpis poľa pomocou "for"
	let employees1 = ["Laura", "Sara", "Denisa", "Táňa"]

	for(let k = 0; k < employees1.length ; k++) {
		console.log(employees1[k])
	}


//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

