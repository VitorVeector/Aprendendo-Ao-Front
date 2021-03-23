const nome = "Rebeca";
const concatenação = "Olá " + nome + '!';

// Templete String, utilizado por uma crase, suporta quebra de linhas e adição de variáveis
const templete = `
    Olá
    ${nome}`

// Para adicionar uma variável dentro de uma string:
const frase = `Meu nome é ${nome}`;

console.log(concatenação, templete);
console.log(frase);

/* EXPRESSÕES */

console.log(`1 + 1 = ${1 + 1}`);

// Convertendo o Case (letras maiúsculas e minúsculas)

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up(`cuidado`)}!`);