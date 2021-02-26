console.log(typeof Array, typeof new Array, typeof []) // Tipos do array

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana', 'Maria']
console.log(aprovados[3])

aprovados[3] = 'Paulinha'
console.log(aprovados)

aprovados.push('VitinPVP_') //Metodo recomendado para adicionar elemento no array
console.log(aprovados) 
console.log(aprovados.length) // Lengh me retorna a quantidade de elemento no array

aprovados[9] = 'Marcelin'
console.log(aprovados, aprovados.length)
console.log(aprovados[8] === undefined)

console.log()

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[2]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) // (1,2) apartir do elento 1, ele ira exluir dois elementos
console.log(aprovados)

aprovados.splice(1, 2, 'Elemento2', 'Elemento3') // Ira fazer o procedimento e adicionar elemento2 e elemento3
console.log(aprovados)