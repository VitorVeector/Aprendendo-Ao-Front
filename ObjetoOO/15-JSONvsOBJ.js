const obj = {a: 1,b: 2,c: 3,soma() {return a + b + c}}
console.log(JSON.stringify(obj)) // me retorna em String
//console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")) TEM QUE SER POR ASPAS DUPLAS
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) // me retorna em OBJ
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": []}'))