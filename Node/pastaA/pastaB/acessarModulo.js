const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('E ai Dadinho, aqui eh o zeh pequeno')
    res.end()
}).listen(8080)