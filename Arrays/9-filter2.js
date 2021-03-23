Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }return newArray
}

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
const resultado = produtos.filter2(precoCaro).filter2(fragilidade)
console.log(resultado)