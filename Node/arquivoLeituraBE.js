const fs = require('fs')
const caminho = __dirname + '/arquivoBE.json'

// Sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8') // Neste momento o conteudo está em string, não sendo possível acessar os atributos dentro do JSON
console.log(typeof conteudo)
const config = JSON.parse(conteudo)
console.log(typeof config)
console.log(`${config.clientes.Maria.email}: ${config.clientes.Maria.senha}`)

// Assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.clientes.Jose.email}: ${config.clientes.Jose.senha}`)
})


// Sincrona
const acessandoDireto = require('./arquivoBE.json')
console.log(acessandoDireto.clientes)

// Como a segunda função é assincrona, ela só executa, após a eecução das funções sincronas

