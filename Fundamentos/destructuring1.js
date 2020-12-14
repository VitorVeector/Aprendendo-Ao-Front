const pessoa = {
    nome: 'Ana',
    idade: 30,
    endereco: {
        logradouro: 'Rua Jasmins',
        numero: 112,
    }
}

//ao chamar o objeto sem seu identificador, estaremos declarando o 'distructuring'
const {nome, idade} = pessoa //Apartir daqui, nome e idade estaram de fora do objeto
console.log(nome, idade)

//Tambem eh possivel a criacao de variaveis para armazenar os respectivos valores
const {nome: n, idade: i} = pessoa
console.log(n, i)

console.log()

const {logradouro, numero, cep} = pessoa.endereco
console.log(numero, logradouro, cep)