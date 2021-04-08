console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) // É uma questão muito importante e pergisa, é necessário revisar por onde está referênciando o this
    console.log(this === module)
}

logThis()