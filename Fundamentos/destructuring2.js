const [num] = [10]
console.log(num)

const [n, n2, n3, n4] = [2, 4, 6, 8]
console.log(n2)

//Tambem eh possivel pular valores
const [a, , c, , e = 5] = [1, 2, 3, 4]
console.log(a, c, e)

const [, [, nota]] = [[, 8, 8], [9, 7, 6]]
console.log(nota) 