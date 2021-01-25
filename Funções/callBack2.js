const notas = [7, 8.4, 6.5, 3, 8.8, 9, 9, 7.7, 5.5, 6.3]

let notasBaixas1 = []

//Sem callBack
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com callBack
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

//Outro exemplo com callBack
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)