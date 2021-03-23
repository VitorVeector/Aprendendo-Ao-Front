function meuObjeto(){

} 
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__)

meuObjeto.prototype.nome = 'Paizao'
meuObjeto.prototype.falar = function(){
    console.log(`Bom Dia! Meu nome eh ${this.nome}!`)
} 

obj1.nome = 'Filhao'
obj1.falar()

obj2.nome = 'Filhona'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'Filhonho'
obj3.falar()

// Resumo

console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)