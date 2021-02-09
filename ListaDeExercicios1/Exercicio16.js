function calcula(a, op, b) {
    switch (op) {
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '*':
            return a * b
            break
        case '/':
            return a / b
            break
        default:
            return "Opcao invalida"
            break
    }
}

console.log(calcula(2, '+', 3))
console.log(calcula(6, '-', 3))
console.log(calcula(100, '/', 5))
console.log(calcula(2, '*', 3))