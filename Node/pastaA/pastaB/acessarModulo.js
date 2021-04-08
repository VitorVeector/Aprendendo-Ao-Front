const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)
const c = require('./pastaC') // Como o nome do arquivo é index, não é necessário fazer sua chamada, apenas instanciar a pasta
console.log(c.tchau)


const http = require('http')
http.createServer((req, res) => {
    res.write('E ai Dadinho! Aqui eh o zeh pequeno')
    res.end()
}).listen(8080)