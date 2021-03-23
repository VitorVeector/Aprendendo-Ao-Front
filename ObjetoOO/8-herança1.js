const ferrari = {
    modelo: 'F40',
    velMax: 324,
}

const volvo = {
    modelo: 'V40',
    velMax: 250,
}

console.log(ferrari.__proto__) // __proto__ nos da acesso ao prototipo do objeto instanciado.

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
