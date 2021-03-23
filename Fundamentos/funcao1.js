//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}
imprimirSoma(2, 3)

//Funcao com retorno
function imprimirSoma2(a, b){
    return a + b
}
console.log(imprimirSoma2(2, 3))

console.log()

//Sem retorno
//Quando declaro 'totalSem = 4' digo que totalSem ter o valor 4 por padrao
function media(a, b, c, d, totalSem = 4){ 
    let total = a + b + c + d
    let med = total / totalSem
    console.log(med)
}
media(8, 8.8, 9.5, 5)
 
//Com retorno
function media2(a, b, c, d, totalSem = 4){
    let total = a + b + c + d
    let med = total / totalSem
    return med;
}
console.log(media2(8.1, 6.4, 6.6, 5.0))

console.log()

