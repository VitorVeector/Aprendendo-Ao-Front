console.log(module.exports === this)
console.log(exports === module.exports)

this.a = 1 // a será visivel fora do arquivo igualmente os atributos a seguir
exports.b = 2
module.exports.c = 3