// Spread operator
const obj = {
	name: 'Julio',
	age: 21,
	country: 'MX',
};

let { name, ...all } = obj;
console.log(name, all);
console.log(all);

// Propagation Properties
const obj = {
	name: 'Julio',
	age: 21,
};

const obj1 = {
	...obj,
	country: 'MX',
};

console.log(obj1);

// Finally en promesas
const helloWorld = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => {
					resolve('Hello World!');
			  }, 3000)
			: reject(new Error('Test error'));
	});
};

helloWorld()
	.then((response) => console.log(response))
	.catch((error) => console.log(error))
	.finally(() => console.log('Finalizado'));

// Regex más poderosos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
