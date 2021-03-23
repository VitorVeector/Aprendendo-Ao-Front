let isActive = false;
console.log(isActive)

isActive = true;
console.log(isActive)

//Logo abaixo irá transformar o valor 1 em booleano, utilizando !!
isActive = 1;
console.log(!!isActive)

console.log("")

//Abaixo será mostrado tudo que será verdadeiro
console.log("Os verdadeiros: ");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!"texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

console.log("")

//Abaixo será mostrado tudo que será falso
console.log("Os falsos: ")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN) //NaN: Not a Namber
console.log(!!undefined) 
console.log(!!(isActive = false))

console.log("")

// &&(e), ||(ou), 
console.log(!!("" || null || 0 || ' '))
