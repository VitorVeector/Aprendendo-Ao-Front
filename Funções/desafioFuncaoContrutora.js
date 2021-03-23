class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome eh ${this.nome}`)
    }
}

const p1 = new Pessoa('Pedrin')
p1.falar()
const p2 = new Pessoa(`Marquin`)
p2.falar()

function criarPessoa(nome){
    return{
        falar: () => console.log(`Meu nome eh ${nome}`)
    }
}

const p3 = criarPessoa('Vitin')
p3.falar()