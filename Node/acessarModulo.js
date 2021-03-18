const moduloA = require('./moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)
const c = require('./pastaA/pastaB/pastaC/index')
console.log(c.ola2)


const http = require('http')
http.createServer((req, res) => {
    res.write('E ai Dadinho! Aqui eh o zeh pequeno')
    res.end()
}).listen(8080)