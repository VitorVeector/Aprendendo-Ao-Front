// Primeira estrategia para criar parametros padrao
function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}
console.log(soma())
console.log(soma(0, 0, 0))
console.log(soma(1, 1, 1))
console.log(soma(3, 3))

console.log(`--------//--------`)

// Estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2())
console.log(soma2(2))
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0, 0))
console.log(`--------//--------`)

// Valor padrao do ES2015

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3())
console.log(soma3(2, 2, 2))
console.log(soma3(2, 2))
console.log(soma3(`a`, 3, 3))