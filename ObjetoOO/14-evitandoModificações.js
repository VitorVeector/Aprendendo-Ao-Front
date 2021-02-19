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