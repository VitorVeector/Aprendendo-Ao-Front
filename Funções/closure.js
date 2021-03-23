// Closures eh o escopo quando uma funcao eh declarada, esse escopo permite acessar e manipular as variaveis externas ah funcao

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro (){
        return x
    }
    return dentro()
}
const minhaFuncao = fora()
console.log(minhaFuncao)