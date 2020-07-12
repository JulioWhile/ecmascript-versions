// Array.prototype.flat(nivel) Método que permite aplanar erreglos
// ej: [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

// Array.prototype.flatMap() permite manipular los datos y luego aplanar
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap((value) => [value, value * 2]));

// Eliminar espacios en blanco
let hello = '                hello world';
console.log(hello);
console.log(hello.trimStart());

let hello = 'hello world             ';
console.log(hello);
console.log(hello.trimEnd());

// Try Catch (eliminas el parentesis de error)
try {
} catch {
	error;
}

// Entries construyen un arreglo en objeto
let entries = [
	['name', 'oscar'],
	['age', 32],
];
console.log(Object.fromEntries(entries));

// Description
let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);
