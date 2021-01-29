//Factory eh uma funcao que sempre retorna um objeto
//Factory simples
function criarProduto(){
    return {
        nome: `Carrinho`,
        preco: 5
    }
}
console.log(criarProduto())
console.log(criarProduto().nome)
console.log(criarProduto().preco)