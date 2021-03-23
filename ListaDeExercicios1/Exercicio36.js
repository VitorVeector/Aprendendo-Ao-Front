let vet = [1, 2, 3, 4, 5]

function multiplicaVetor(vet, mult){
    let resultado = []
    vet.forEach(elemento => {
        resultado.push(elemento * mult)
    })

    return resultado
}

console.log(multiplicaVetor(vet, 3))
