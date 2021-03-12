// Maneira sem usar o MAP (Não recomendável nesse situação)
/*
let nums = [1, 2, 3, 4, 5]
function dobra(){
    let numsMult = []
    for(let i = 0; i < nums.length; i++){
        let mult = nums[i] * 2
        numsMult.push(mult)
        
    }
    return numsMult
}
console.log(nums)
console.log(dobra()) */

let nums = [1, 2, 3, 4, 5]
let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

