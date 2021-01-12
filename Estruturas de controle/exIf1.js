function maiorDeles(valor1, valor2){
    if(valor1 < valor2){
        console.log(valor2)
    }else{console.log(valor1)}
}

maiorDeles (8, 9)

function AnoNasc(anoN){
    let idade = 2021 - anoN 
    if (idade < 18){
        console.log('Idade insuficiente para voto!')
    }else{
        console.log('Idade permitida para voto!')
    }
}

AnoNasc(2004)

const pass = function (senha){
    if(senha === 1234){
        console.log('Acesso Permitido')
    }else{
        console.log('Acesso Negado')
    }
}

pass(1234)