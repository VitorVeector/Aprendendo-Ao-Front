const aprovados = ['Aghata', 'Ana', 'Maria', 'Marcelin', 'Junin']
console.log(`Trabalhando com nome, indice e array`)
aprovados.forEach(function(nome, indice, array){ //forEach possui ate tres parametros em ordem sao -> nome, indice, array EM ORDEM
    console.log(`${indice + 1}) ${nome}`)
    console.log(`Do array: ${array}`)
})
console.log()
console.log(`Trabalhando apenas com nome e indice` )
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

console.log()
console.log(`Trabalhando apenas com o nome`)
aprovados.forEach(nome => console.log(nome))

const reprovados = ["Julia", "Marcelo", "Pedrit", "Fernandao"]

reprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

