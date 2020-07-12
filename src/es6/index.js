// Funciones Antes de ES6
function newFunction(name, age, country) {
	var name = name || 'Julio';
	var age = age || 21;
	var country = country || 'MX';
	console.log(name, age, country);
}

// Funciones Con ES6
function newFunction2(name = 'Julio', age = 21, country = 'MX') {
	console.log(name, age, country);
}

newFunction2();
newFunction2('Raul', 22, 'CO');

// Concatenación antes de ES6
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Concatención con ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Multilinea antes de ES6
let lorem =
	'quiero escribir una frase epica. soy como superman \n' +
	'mentiraaaaa, soy batman!!!';

// Multilinea con ES6
let lorem2 = `otra fase epica de mi compa el pirata de culiacán
el dice que le pelan el choriflui`;

console.log(lorem);
console.log(lorem2);

// Desestructuración antes de ES6
let person = {
	name: 'Julio',
	age: 32,
	country: 'MX',
};
console.log(person.name, person.age, person.country);

// Desestructuración Con ES6
let { name, age, country } = person;
console.log(name, age, country);

// Spread Operator
let team1 = ['Oscar', 'Julio', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);

// Bloques de código (Var no se usa ya)
{
	var globalVar = 'Global Var';
}
{
	let globalLet = 'Global Let';
	console.log(globalLet);
}

console.log(globalVar);

// Objetos mejorados
let name = 'Julio';
let age = 21;

obj = { name: name, age: age }; //antes de es6
obj2 = { name, age }; // con es6
console.log(obj2);

// Funciones de flecha
const names = [
	{ name: 'Julio', age: 21 },
	{ name: 'David', age: 19 },
];

// Antes de es6
let listOfNames = names.map(function (item) {
	console.log(item.name);
});

// con es6
let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age, country) => {};

const listOfNames4 = (name) => {};

const square = (num) => num * num;

// Promesas para asincronismo
const helloPromise = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve('Hey, todo bien!');
		} else {
			reject('Ups! Algo malió sal');
		}
	});
};

helloPromise()
	.then((response) => console.log(response))
	.catch((error) => console.log(error));

// Clases
class calculator {
	constructor() {
		this.valueA = 0;
		this.valueB = 0;
	}

	sum(valueA, valueB) {
		this.valueA = valueA;
		this.valueB = valueB;
		return this.valueA + this.valueB;
	}
}

const calc = new calculator();
console.log(calc.sum(1, 2));

// Modulos
const hello = require('./module');
hello();

// Generators
function* helloWorld() {
	if (true) {
		yield 'Hello, ';
	}
	if (true) {
		yield 'World';
	}
}

const genetatorHello = helloWorld();
console.log(genetatorHello.next().value);
console.log(genetatorHello.next().value);
console.log(genetatorHello.next().value);
