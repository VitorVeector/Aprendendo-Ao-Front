const alunos = [
    {nome: 'Joao', nota: 7.8, bolsista: false},
    {nome: 'Angelica', nota: 10, bolsista: true},
    {nome: 'Andre', nota: 5.6, bolsista: true},
    {nome: 'Paula', nota: 9.5, bolsista: true},
    {nome: 'Bianca', nota: 10, bolsista: false},
    {nome: 'Marquin', nota: 7, bolsista: false},
    {nome: 'Paola', nota: 6, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)