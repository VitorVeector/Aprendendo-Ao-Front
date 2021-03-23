function maiorMenor(vet){
    let maior 
    let menor 
    for(let i = 0; i < vet.length; i++){
        if(maior === undefined && menor === undefined){
            maior = vet[i]
            menor = vet[i]
        } else {
            if(vet[i] > maior){
                maior = vet[i]
            }
            if(vet[i] < menor){
                menor = vet[i]
            }
        }
    }console.log(`[${maior}, ${menor}]`)
}

let vetor = [10, 5, 7, 3, 2, 3, 11, 20, 6, 30, 9]
maiorMenor(vetor)