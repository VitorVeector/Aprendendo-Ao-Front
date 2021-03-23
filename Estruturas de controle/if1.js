console.log('Expressão com condicional:')
function resultado(nota) {
    if(nota >= 7){
        console.log('Aprovado com a nota: ' + nota)
    }else{
        console.log('Reprovado com a nota: ' + nota)
    }
}

resultado(6)

console.log()
console.log('Expressão booleana:')
function seForVddEuDigo(valor){
    if(valor){
        console.log('Eh vdd' + valor)
    }
}

seForVddEuDigo()
seForVddEuDigo(0)
seForVddEuDigo(null)
seForVddEuDigo(undefined)
seForVddEuDigo(NaN)
seForVddEuDigo('')

seForVddEuDigo(-1)
seForVddEuDigo(' ')
seForVddEuDigo(1)
seForVddEuDigo(true)
seForVddEuDigo([])
seForVddEuDigo({})