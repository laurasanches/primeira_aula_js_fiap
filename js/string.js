let firstNumber = 10;
let secondNumber = '10';

console.log(`${firstNumber} == ${secondNumber} = ${firstNumber == secondNumber}`)
console.log(`${firstNumber} == ${secondNumber} = ${firstNumber === secondNumber}`)

firstNumber = 10;
secondNumber = 3;
console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);

// objeto string
const text = 'JS é uma linguagem de programação fantástica'
console.log(text);

// tamanho do texto
console.log(text.length);
console.log(text[5]);

// maiúsculas e minúsculas
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// pegar pedaço da string slice (onde começa e onde termina)
let pedacoString = text.slice(3,8)
console.log(pedacoString);

let stringVirouArray = text.split(' ');
console.log(stringVirouArray);