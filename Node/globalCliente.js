require('./global')

console.log(Minhaapp.saudacao())

Minhaapp.nome= 'Hehe, alterado' //Para que não haja alteração, utilize o freeze
console.log(Minhaapp.nome)  