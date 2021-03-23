function situacao(nome, nota){
    if(nota <= 40){
        console.log(`Aluno ${nome} reprovado. Nota sem arredondamento ${nota}`)
    }else if(nota > 40){
        console.log(`Aluno ${nome} aprovado. Nota sem arredondamento ${nota}`)
    }
}

function arredondamento(nota){
    if(nota % 5 > 2){
        console.log(nota + (5 - (nota % 5)))
    } else {
        return nota
    }

}

situacao("Marquin", 28)
arredondamento(28)
situacao("Paolinha", 48)
arredondamento(48)
situacao("Josezin", 90)
arredondamento(90)



