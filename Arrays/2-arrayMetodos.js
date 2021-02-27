const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove ultimo elemento do Array
console.log(pilotos)

pilotos.push('VitinFast') // Aiciona elemento na ultima posicao
console.log(pilotos)

pilotos.shift() //Antagonista do .pop(), shift() remove o pirmeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no primeiro elemento
console.log(pilotos)

//splice para adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // Carro do Massa quebrou :(
console.log(pilotos)

// SLICE != SPLICE

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(2, 4)
console.log(algunsPilotos2)