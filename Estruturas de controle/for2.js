const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Paula',
    Idade: 20,
    Peso: 60,
}

//
for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

//
const caracteristica = {
    tamanho: 180,
    cor: 'negro',
}

for(let mostre in caracteristica){
    console.log(`${mostre} = ${caracteristica[mostre]}`)
}