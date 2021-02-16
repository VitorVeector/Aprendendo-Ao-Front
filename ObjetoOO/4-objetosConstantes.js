// const pessoa -> 123x1
// 123x1 => {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa.nome)

/////////////////////////////////

// const pessoa -> 123x2 // ira gerar um erro
/* pessoa = { nome: 'Ana'} */

/////////////////////////////////

Object.freeze(pessoa)
// Object.freeze ira fazer com que nao consiga mais alterar os valores dos enderecos de pessoa
pessoa.nome = 'Vitin'
console.log(pessoa)

/////////////////////////////////
const carro = Object.freeze({nome: 'BMW'})
carro.nome = 'Audi'
console.log(carro)