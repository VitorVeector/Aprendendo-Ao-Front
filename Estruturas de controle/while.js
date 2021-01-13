//Math.random() retorna um valor aleatorio entre 0 e 1

function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0
while(opcao != -1){
    opcao = getInteiroAleatorio(1, 200)
    console.log(`Opcao escolhida foi ${opcao}.`)
}

