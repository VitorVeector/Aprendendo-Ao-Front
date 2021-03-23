const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Exercicio: Retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json) // Converte String para objeto
const acessaPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(acessaPreco)
console.log(resultado)