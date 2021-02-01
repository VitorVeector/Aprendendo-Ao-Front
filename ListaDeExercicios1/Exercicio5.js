function paraValorDecimal(valor){
    valorDecimal = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    console.log(valorDecimal)
}

paraValorDecimal(0.1+0.2)