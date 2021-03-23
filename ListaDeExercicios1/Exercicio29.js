function intervalo(vetNum){
    let numInter = 0
    let notInter = 0
    for ( let i = 0; i < vetNum.length; i++){
        if(vetNum[i] <= 20 && vetNum[i] >= 10){
            numInter++
        } else {
            notInter++
        }
    }console.log(`${numInter} números estão dentro do intervalo e ${notInter} estão fora do intervalo`)
}

let vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 17, 18, 18, 18, 19, 20, 21, 23, 25, 27]
intervalo(vetor)