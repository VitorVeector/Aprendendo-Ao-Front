const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10: 
        case 9:
            console.log("Quadro de honra! Sua note eh: " + nota)
            break  
        case 8: case 7:
            console.log("Parabens! Nota azul. Sua note eh: " + nota)
            break
        case 6:  case 5: case 4:
            console.log("Recuperacao! Sua note eh: " + nota)
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado! Sua note eh: " + nota)
            break
        default:
            console.log('Opcao Invalida')
    }
}

imprimirResultado(4)