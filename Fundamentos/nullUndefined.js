let valor //Nao inicializado, ira imprimir: Undefined
console.log(valor)

/* NULL -> nao tem nenhum valor ou tipo de variavel alem de nao apontar para nenhum local na memoria*/ 

valor = null //Atribuindo valor nullo a variavel
console.log(valor)

console.log()

const produto = {}
console.log(produto.preco) //Preco nao esta definido

produto.preco = 34.77
console.log(produto.preco) //Definindo preco do produto

produto.preco = undefined
console.log(produto.preco)

console.log()

console.log(!!produto.preco) //Dara false, esta como undefined
 
console.log()

console.log(produto)
delete produto.preco
console.log(produto)

produto.preco = null //Sem preco
console.log(produto)