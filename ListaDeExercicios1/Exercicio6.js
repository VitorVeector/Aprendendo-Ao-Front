function juroSimples(capIni, i, temp){
    let j = capIni * i * temp
    console.log(`Montante = ${j + capIni}`)
    console.log(`Juros = ${j}`)
}

function juroComposto(capIni, i, temp){
    let aux = (1 + i)
    let aux2 = Math.pow(aux, temp)
    let aux3 = capIni * aux2
    console.log(`Montante = ${aux3.toFixed(2)}`)
}
juroSimples(2000, 0.035, 12)
console.log()
juroComposto(2000, 0.02, 4)