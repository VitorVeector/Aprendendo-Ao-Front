// É muito comum referenciar uma biblioteca com '_'(underline)

const _ = require("lodash") // Não é necessário passar o caminho relativo, ao chamar lodash, será redirecionado de maneira automatica

setInterval(() => console.log(_.random(1,1000)), 3000) 


// a função acima, nos permite, não precisar coddar toda uma função para obter um valor randomico, lodash é uma biblioteca que tem várias funções que ao chamas pelo require, nos auxilia.

// nodemon usado para executar o servidor de maneira constante, sem interrupções, podendo alterar o código enquanto o mesmo é executado