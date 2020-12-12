//Par nome/valor
const saudacao = 'Opa' //contexto léxico 1 

function exec(){
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso_em_Kg: 90,
    endereco: {
        lougradouro: 'Rua Jasmine',
        numero: 210,
        bairro: 'Jardim Mel',
        cidade: 'Anounima',
    }  
} 

console.log(saudacao)
console.log(exec())
console.log(cliente.nome)