// Coleção dinâmica de pares chaves/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
produto.desconto = 0.2

console.log(produto)
delete produto.desconto
console.log(produto)
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'BMW M4',
    valor: 200000,
    proprietario: {
        nome: 'Vitor Hugo',
        idade: 27,
        endereco: {
            logradouro: undefined,
            numero: undefined,
            cidade: 'Santo André-SP'
        }
    },
    condutores: [{
        nome: 'Luizin',
        idade: '17',
    },{
        nome: 'Marquin',
        idade: '18',
    }],
    calcularValorDoSeguro: function(){
        // ...
    }

}

carro.proprietario.endereco.numero = 2000
carro['proprietario']['endereco']['logradouro'] = 'Rua Jasmins'
delete carro.condutores
console.log(carro)