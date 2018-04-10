//Template literals
let favMovie = (movie = 'The Room', name = 'World') =>
	console.log(`My name is ${name} and my favorite movie is ${movie}!`);

favMovie('Gladiator', 'Nick');
favMovie();
// Arrow syntax

let getFirstName = name => {
	let firstName = name.split(' ');
	return firstName[0];

	// could also return name.split(" ")[0] as like below
};

let getFirstName2 = name => name.split(' ')[0];

let fn = getFirstName('Matt Murdock');
let fn2 = getFirstName2('Frank Castle');
console.log(fn);
console.log(fn2);

function getStats(a, b) {
	let squaredResult = a * a + b * b;
	let product = a * b;
	return {
		squaredResult,
		product,
	};
}
let check = getStats(2, 3);
console.log(`The squared result is ${check.squaredResult} and the product is ${check.product}.`);

let user = {
	name: 'Nick',
	profession: 'student',
	age: 26,
};

//spread syntax

function randomStuff(name, location, favFood) {
	console.log(`Hey, my name is ${name} and I live in ${location} and I love ${favFood}!`);
}
let randomInfo = ['Nick', 'Birmingham', 'Pizza'];
randomStuff(...randomInfo);

let myName = 'Nick';

function spreadEx() {
	let letters = [...myName];
	for (var i = 0; i < letters.length; i++) {
		console.log(letters[i]);
	}
}
spreadEx();
