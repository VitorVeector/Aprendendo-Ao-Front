const patente = function (nivel) {
    if (nivel < 10) {
        console.log('Bronze')
    } else if (nivel <= 19) {
        console.log('Prata')
    } else if (nivel <= 29) {
        console.log('Ouro')
    } else if (nivel <= 39) {
        console.log('Diamante')
    } else {
        console.log('Nivel Invalido')
    }
}

patente(10)

//OUTRO EXEMPLO

Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('QUADRO DE HONRA')
    }else if(nota.entre(7, 8)){
        console.log('Nota azul, parabens!')
    }else if(nota.entre(5, 6)){
        console.log('Poderah fazer recuperacao, AGENDE SUA PROVA')
    }else if(nota.entre(0, 4)){
        console.log('Nao sera possivel recuperacao, REPROVADO')
    }else{
        console.log('Nota invalida')
    }
}

imprimirResultado(10)