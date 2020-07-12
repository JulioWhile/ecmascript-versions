// Object.entries devuelve los valores de una matriz
const data = {
	frontend: 'Julio',
	backend: 'Gely',
	design: 'Pikachu',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object.values devuelve los valores del objeto en un arreglo
const data = {
	frontend: 'Julio',
	backend: 'Gely',
	design: 'Pikachu',
};

const values = Object.values(data);
console.log(values);

// Permite añadir cadenas vacías a strings
const string = 'hello';
console.log(string.padStart(7, 'hi')); // Agrega al inicio
console.log(string.padEnd(12, ' -----')); // Agrega al final
console.log('food'.padEnd(12, '  -----'));

// Async - Await
const helloWorld = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => resolve('Hello World'), 3000)
			: reject(new Error('Test error'));
	});
};

const helloAsync = async () => {
	const hello = await helloWorld();
	console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
	try {
		const hello = await helloWorld();
		console.log(hello);
	} catch (error) {
		console.log(error);
	}
};

anotherFunction();
