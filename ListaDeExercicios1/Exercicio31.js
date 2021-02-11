function negNumber(vet){
    let numNeg = 0
    let numPos = 0
    for(let i = 0; i < vet.length; i++){
        if(vet[i] < 0){
            numNeg++
        } else {
            numPos++
        }
    }console.log(`${numNeg} número negativos e ${numPos} números positivos`)
}

let vetor = [-2, -1, -3, 0, 5, 6, 7, 3, 2, -4, 6, -5, -8, -4, 4]
negNumber(vetor)