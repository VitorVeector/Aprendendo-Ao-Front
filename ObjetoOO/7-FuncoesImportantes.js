const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
}

console.log(Object.keys(pessoa)) // Retorna todas as chaves do objeto
console.log(Object.values(pessoa)) // Retorna o valroes das chaves do objeto
console.log(Object.entries(pessoa)) // Retorna em arrays e sub-arrays as Keys e values do objeto 

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // If False, nao ira listar dentro do objeto
    writable: false, // If true, nos permite fazer modificacoes nessa keys fora do escopo
    value: '31/05/2018'
})

console.log(pessoa.dataNascimento)
console.log(pessoa)


// Object.assign (ECMAScript 2015)
const dest = { a:1 }
const o1 = { b:2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(obj)

