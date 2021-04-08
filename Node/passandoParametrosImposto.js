module.exports = function(...produtos){
    return produtos.map(produto => `O produto ${produtos.length} custará R$${produto + 100}`)
}

