function num(vetorNum) {
    let numPar = 0
    let numImpar = 0
    for (let i = 0; i < vetorNum.length; i++) {
        if (vetorNum[i] % 2 == 0) {
            numPar++
        } else {
            numImpar++
        }
    }
        console.log(`${numPar} numeros pares, ${numImpar} numeros impares.`)
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
num(vetor)