const acao = function (botao){
    switch(botao){
        case 'w':
            console.log('Andar para frente')
            break
        case 'd':
            console.log('Andar para tras')
            break
        case 'a':
            console.log('Andar para esquerda')
            break
        case 'd':
            console.log('Andar para direita')
            break
        default:
            console.log('Opcao invalida')
    }

    acao('w')

}