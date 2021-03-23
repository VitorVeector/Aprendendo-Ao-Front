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
}
acao('d')

const opcao = function(press){
    switch(press) {
        case 1:
            console.log('Voce escolheu a primeira opcao')
            break;
        case 2:
            console.log('Voce escolheu a segunda opcao')
            break;
        default:
            console.log('Opcao Invalida')
            break;
    }
}

opcao(4 )
