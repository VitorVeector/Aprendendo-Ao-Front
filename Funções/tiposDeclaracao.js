console.log(soma(2, 2))
// No JS, diferente de outras linguagens, carrega todas as funcoes antes de executar o codigo, em c++ teriamos que chamar o prototipo da funcao. Porem se estivermos usando uma *function expression* terei que executar o algoritmo apos a declaracao da funcao


// function declaration
function soma (x,y){
    return x + y
}

// function expression - Soh pode ser chamada apos a declaracao da funcao
const sub = function (x, y){
    return x-y
}
console.log(sub(4, 2))

// named function expression 
const mult = function mult(x, y){
    return x * y
}
console.log(mult(5, 5))