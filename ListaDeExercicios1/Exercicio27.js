function altura(alt, txCre, alt2, txCre2){
    if (alt == alt2){
        if(txCre == txCre2){
            console.log('As crianças terão a mesma altura, por terem mesmo tamanho e taxa de crescimento')
        } else if (txCre > txCre2){
            console.log('A criança 1, será maios que a criança 2 por ter maior taxa de crecimento')
        } else if (txCre < txCre2){
            console.log('A criança 2, será maior que a criança 1 por ter maior taxa de crescimento')
        }
    } if (alt > alt2){
        if(txCre > txCre2){
            console.log(`A criança 1, será maior que a crianca 2`)
        } else if (txCre < txCre2){
            console.log('A criança 2 é menor que a criança 1, mas, poderá ser maior por sua taxa de crecimento ser maior')
        } 
    } if (alt < alt2){
        if(txCre2 > txCre){
            console.log('A criança 2 será maior que a criança 1')
        } else if (txCre2 < txCre){
            console.log('A criança 1 e menor que a criança 2, mas podera ser maior sua taxa de crescimento é maior')
        }
    }
}

altura(120, 30, 130, 2)
altura(130, 10, 130, 5)

