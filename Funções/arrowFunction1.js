let dobro = function (a) {
    return 2 * a
}

//Funcao arrow sempre sera anonima, para voce chamar a funcao, voce tera de armazenar numa variavel
dobro = (a) => {
    return 2 * a
}

//Voce pode ainda reduzir mais, se tiver apenas um parametro, nao sera necessario uso de parenteses, e ao retirar o corpo da funcao (as chaves), voce tera um retorno implicito
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function () {
    return `Olah`
}

ola = () => {
    return `Olah`
}

ola = () => `Olah`
ola = _ => `Olah` //Underline significa que eh um parametro, mas sera ignorado

console.log(ola())

let soma = function (a, b) {
    soma1 = a + b
    return soma1
}

soma = (a, b) => {
    return a + b
}

soma = (a, b) => a + b

console.log(soma(2, 2))

let sub = (a, b) => {
    subt = a - b
    return subt
}

sub = (a, b) => a - b

console.log(sub(10, 5))