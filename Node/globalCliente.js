require('./global')

console.log(Minhaapp.saudacao())

Minhaapp.nome= 'Por aqui. não consigo alterar' //Para que não haja alteração, utilize o freeze
console.log(Minhaapp.nome)  


MinhaImpressao.nome = 'Sem o freeze, eu irei alterar!!!'
console.log(global.MinhaImpressao.nome)