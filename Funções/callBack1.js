const fabricantes = ["Mercedes", "Audi", "BWM"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
//forEach eh um metodo muito eficaz para acessar todos os elementos de um array (um por um) para depois fazer algo com eles
fabricantes.forEach(imprimir)

const aprovados = ['Luanzin', 'Pedrin', 'Marquin']
function imprimir2(nome, indice){
    console.log(`${indice + 1}- ${nome}`)
}

aprovados.forEach(imprimir2)