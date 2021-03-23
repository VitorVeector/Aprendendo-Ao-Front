function media(vet){
    let aux = 0
    let soma = 0
    for(let i = 0; i < vet.length; i++){
       soma = aux + vet[i]
    } let mediaNum = soma/vet.length
    
    console.log(`A media dos vetores eh: ${mediaNum.toFixed(2)}`)
}
let vetor = [2, 3, 4, 5, 6, 7]
media(vetor)
