function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Ate Breve', 456)
console.log(aula1, aula2)

// Simulando o new
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = new Aula(Aula, 'Bem vindo', 123)
const aula4 = new Aula(Aula, 'Ate Breve', 456)
console.log(aula3, aula4)