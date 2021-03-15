const alunos = [
    {nome: 'Joao', nota: 7.5},
    {nome: 'Maria', nota: 9.5}
]

// Objetivo -> Calcular a média

// Maneira Imperativa
let total = 0
for (let i = 0; i < alunos.length; i++){
    total += alunos[i].nota
}
console.log(total/alunos.length)

// Maneira declarativa

const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual
const totalizando = alunos.map(getNota).reduce(soma)
console.log(totalizando/alunos.length)