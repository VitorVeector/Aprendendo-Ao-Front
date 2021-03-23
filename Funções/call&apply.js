function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * ( 1 - imposto)}`
}

const produto = {
    nome: `Caixa de leite`,
    preco: 3,
    desc: 0.15,
    getPreco 
}

console.log(produto.getPreco())

global.preco = 20
global.desc = 0.1
console.log(getPreco())

const carro = { preco: 120000, desc: 0.2, getPreco }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro)) //diferenca entre call e apply esta na passagem de parametros

console.log(getPreco.call(carro, 0.1, '$' ))
console.log(getPreco.apply(carro, [0.1, '$']))

console.log(getPreco.apply(global, [0.1, '$']))
console.log(getPreco.call(global, 0.1, '$' ))