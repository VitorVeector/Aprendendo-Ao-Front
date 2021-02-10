function notaFinal (cod, prov1, prov2, prov3){
    let medP = (prov1 * 4) + (prov2 * 3) + (prov3 * 3)
    let mediaFinal = medP / (4 + 3 + 3) 
    if(mediaFinal >= 5){
        console.log(`O aluno(a) ${cod}, com as respectivas notas ${prov1}, ${prov2}, ${prov3} tem a media de: ${mediaFinal}. APROVADO`)
    } else {
        console.log(`O aluno(a) ${cod}, com as respectivas notas ${prov1}, ${prov2}, ${prov3} tem a media de: ${mediaFinal}. REPROVADO`)
    }

}

notaFinal(343, 4, 5, 7)
notaFinal(9878, 9, 7, 10)
notaFinal(222, 3, 5, 4)

