
//Aramazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b);
}
imprimirSoma(3, 3)

//Funcao que nao recebe nenhum nome eh conhecida como funcao anonima. Exemplo acima
console.log()

//Armazenando uma funcao arrow em uma variavel
const imprimirSoma2 = (a, b) =>{
    console.log(a + b)
}
imprimirSoma2(2, 7)

//Com retorno
const imprimirSoma3 = (a, b) => {
    return a + b
}
console.log(imprimirSoma3(2, 7))

//Com retorno implicito
const imprimirSoma4 = (a, b) => a + b
console.log(imprimirSoma4(2, 7))


