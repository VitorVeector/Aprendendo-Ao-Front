console.log(Math.ceil(6.1)) //Arredondamento +, ceil eh teto
console.log(Math.floor(6.1)) //Arredondamento -, floor eh piso

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

console.log()

//This transforma atributos e funcoes em publicos
function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
