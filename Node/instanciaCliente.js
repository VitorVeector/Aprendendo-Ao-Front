const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorB.inc()
console.log(contadorA.valor, contadorB.valor) // Aqui a instancia é armamzenada em CACHE *O NODE faz cache do que é retornado em um require*

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // Aqui a instância não é armazenada em CACHE, já que foi retornado por uma função factory

