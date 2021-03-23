//DICA
/*  INFIXO -> op1 + op2
    Prefixo -> ++op1
    Posfixo -> op1++ */

const [a, b, c, d] = [3, 4, 1, 15]
const soma = a + b + c + d 
const subtracao = d - b - a - c
const multiplcacao = (a * b) * (c * d)
const divisao = d / a
const modulo = b % 2
console.log(soma, subtracao, multiplcacao, divisao, modulo)

if (modulo == 1){
    console.log('Modulo eh Impar')
}else{
    console.log('Modulo eh Par')
}
