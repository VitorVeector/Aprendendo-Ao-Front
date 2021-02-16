// usando notacao literal
const obj1 = {}
console.log(obj1)

console.log(`-----\n`)
// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)
console.log(`-----\n`)

// Funcoes construtoras
function produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('Caneta', 2, 0.15)
const p2 = new produto('Notebook', 3000, 0.2)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
console.log(`-----\n`)

// Funcao Factory 

function criarFuncionario(nome, salario, qtdFaltas) {
    return {
        nome,
        salario,
        qtdFaltas,
        getSalario() {
            return (salario / 30) * (30 - qtdFaltas)
        }
    }
}

const f1 = criarFuncionario('Marcelin', 3000, 2)
const f2 = criarFuncionario('Joel', 3500, 5)
console.log(f1.getSalario(), f2.getSalario())
console.log(`-----\n`)

// Object.create
const filha = Object.create(null)
filha.nome = 'Luiza'
filha.idade = '12'
console.log(filha)
console.log(filha.nome)
console.log(filha.idade)

console.log(`-----\n`)

// Uma funcao famosa que retorna um Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)
console.log(fromJSON.info)