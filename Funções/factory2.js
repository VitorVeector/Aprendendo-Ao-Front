function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.5
    }
}
console.log(criarProduto(`Arroz`, 10))