function area(altura, largura){
    const area = altura * largura
    if (area > 20){
        console.log(`A area nao pode ser definida, pois passou dos limites! Total da area: ${area}m2`)
    }else{
        return area
    }
}

//console.log(area(10, 10))

function imc(peso, altura){
    let quad = altura * altura
    const imc = peso / quad
    if(imc < 18.5){
        console.log(`Imc de ${imc}. Abaixo do peso ideal`)
    }else if(imc > 18.5 && imc < 24.9){
        console.log(`Imc de ${imc}. Peso normal`)
    }else if(imc > 25 && imc < 29.9){
        console.log(`Imc de ${imc}. Sobrepeso`)
    }else if(imc > 30 && imc < 34.9){
        console.log(`Imc de ${imc}. Sobrepeso Grau 1`)
    }else if(imc > 35 && imc < 39.9){
        console.log(`Imc de ${imc}. Sobrepeso Grau 2`)
    }else if(imc > 40) {
        console.log(`Imc de ${imc}. Sobrepeso Grau 3`)
    }else{
        console.log(`Valor invalido`)
    }
    return imc
}

console.log(imc(120, 1.8))
