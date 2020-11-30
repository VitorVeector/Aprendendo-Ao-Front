const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));

console.log("");

const av1 = 9.81;
const av2 = 6.5;

const total = av1 * peso1 + av2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);

//Para imprimir apenas dois casas decimais após o número inteiro
console.log(media.toFixed(2));

//Transformar um valor númerico numa String
console.log(media.toString(2)); //em binário