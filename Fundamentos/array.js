const value = [7.7, 6.3, 8.9, 4.2];
console.log(value[0], value[2]);

console.log();

//Declarando um novo elemento dentro do array
value[4] = 6.7;
console.log(value[4]);

console.log();

//Ao declarar um elemento com espaços vazio entre eles
value[10] = 100;
console.log(value)

console.log();

//Acessar a quantidade de elementos de um array
console.log(value.length)

console.log();

//Dando push em novos elementos ao array
value.push('novos valores:', 2, 4.5, 4.4);
console.log(value);

console.log();

//Retirada de elementos
console.log(value.pop())//Imprimi o elemento retirado
console.log(value)//Imprimi o array com elemento retirado

console.log();

//Retirada de VALOR dentro do elemento
delete value[0]
console.log(value)