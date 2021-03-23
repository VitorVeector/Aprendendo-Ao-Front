const alunos = [
    {nome: 'Joao', nota: 7.8, bolsista: true},
    {nome: 'Angelica', nota: 10, bolsista: false},
    {nome: 'Andre', nota: 5.6, bolsista: true},
    {nome: 'Paula', nota: 9.5, bolsista: true},
    {nome: 'Bianca', nota: 10, bolsista: false},
    {nome: 'Marquin', nota: 7, bolsista: false},
    {nome: 'Paola', nota: 6, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?

// Desafio 2: Algum aluno é bolsista?

// Desafio 1 ->
const desafio1 = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista){
    if (resultado && bolsista === true){
        return true
    } else {
        return false
    }
    
})

console.log(desafio1)

const desafio2 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if (acumulador || atual === true){
        return true
    } else {
        return false
    }
})

console.log(desafio2)