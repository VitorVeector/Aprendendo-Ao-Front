const soma = function (x, y){
    return x + y
}

const imprimirResultado = function(a, b, opracao = soma){
    console.log(opracao(a, b))
}

imprimirResultado(2, 1)
imprimirResultado(2, 2, soma)
imprimirResultado(8, 4, function(a, b){
    return a-b
})
imprimirResultado(10, 5, (a, b) => a*b)

//Posso atribuir uma funcao dentro de uma caracterista do objeto
console.log(`----//----`)

const pessoa = {
    falar: function(){
        console.log(`Coleh Maneh`)
    }
}

pessoa.falar()