// Cadeia de prototipo (prototype chain)
const avo = {
    attr1: 'A'
}
const pai = {
    __proto__: avo,
    attr2: 'B'
}
const filho = {
    __proto__: pai,
    attr3: 'C'
}
console.log(filho.attr1)

const carro = {
    velAtual: 0,
    velMax: 200,
    aumentaVel(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual = +delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, //shadowing
}
const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aumentaVel(150)
console.log(volvo, volvo.status())

ferrari.aumentaVel(300)
console.log(ferrari, ferrari.status())