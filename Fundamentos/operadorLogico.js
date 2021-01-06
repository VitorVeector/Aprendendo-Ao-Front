/*  V e V -> Verdadeiro
    V e F -> Falso
    F e F -> Falso
    F e ? -> Falso

    V ou V -> Verdadeiro
    V ou F -> Verdadeiro
    F ou F -> Falso
    F ou ? -> ?
    V ou ? -> Verdadeiro

    (xor = ou exclusivo)

    V xor V -> Falso
    V xor F -> Verdadeiro
    F xor F -> Falso

    (! negacao logica)

    !V -> F
    !F -> V
*/

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1  || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //BitWise xor
    const comprarTv32 = trabalho1 != trabalho2

    const manterSaude = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaude}
}

console.log(compras(true, true))
console.log()
console.log(compras(true, false))
console.log()
console.log(compras(false, false))

