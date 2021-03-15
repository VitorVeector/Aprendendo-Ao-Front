// filter eh para filtrar arrays para obter resultados especificos dentro de uma array.

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4999, fragil: true,},
    {nome: 'Copo de vidro', preco: 12.90, fragil: true},
    {nome: 'Copo de plastico', preco: 4, fragil: false}
]
console.log(produtos.filter(function(p){
    return p.preco > 500 && p.fragil === true
}))


const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4999, fragil: true,},
    {nome: 'Copo de vidro', preco: 12.90, fragil: true},
    {nome: 'Copo de plastico', preco: 4, fragil: false}
]

const precoCaro = p => {
    return p.preco > 500
}
const fragilidade = p => {
    return p.fragil === true
}
const resultado = produtos.filter(precoCaro).filter(fragilidade)
console.log(resultado)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
console.log(nums.filter(function(n){
    return n % 2 === 0
}))