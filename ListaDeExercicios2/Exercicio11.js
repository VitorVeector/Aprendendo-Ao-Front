function primeiroEUltimo(vetor){
    let primeiro = vetor[0]
    let ultimo = vetor[vetor.length - 1]
    let resultado = [primeiro, ultimo]
    return resultado
}
console.log(primeiroEUltimo([1,2,3,4,5,6,7,8,9]))
console.log(primeiroEUltimo(['Marcelin', 'Junin', 'Cavalcante']))