// Object.preventExtensions -> nao permitira que introduza atributos ao objeto

const pessoa = Object.preventExtensions({
    nome: 'Maria',
    idade: 22,
    escolaridade: 'Ensino Medio'
})

pessoa.altura = 129
console.log(pessoa)
console.log(`Objeto pessoa eh extensivel:  ${Object.isExtensible(pessoa)}`)

delete pessoa.escolaridade
console.log(pessoa)

// Object.seal ->diferente do ex. acima, aqui voce nao pode nem remover ou adicionar um attr

const objeto = {cod: 123, nome: 'Caneta', preco: 1.50}
Object.seal(objeto)
objeto.tamanho = 20
console.log(objeto)
console.log(`O objeto ${objeto.nome} esta selado? ${Object.isSealed(objeto)}`)
// Porem pode haver alteração nos valores de um atributo
objeto.cod = 456
console.log(objeto.cod)

// Object.freeze = seal + valores constantes
const carro = {
    aro: 22,
    modelo: 'Sedan',
    marca: 'BMW'
}
Object.freeze(carro)
carro.piloto = 'Josue'
carro.aro = 45

console.log(carro)
console.log(`O objeto CARRO esta freezado? ${Object.isFrozen(carro)}`)

