const fs = require('fs')
const caminho = __dirname + "/arquivo.json"

//Sincrona

const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

// Assincrona

fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


// Sincrona
const acessandoDireto = require('./arquivoBE.json')
console.log(acessandoDireto.clientes)

// Como a segunda função é assincrona, ela só executa, após a execução das funções sincronas

// Leitura do dir
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Arquivos desta pasta local: ')
    console.log(arquivos)
})
