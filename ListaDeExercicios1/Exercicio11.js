function anoBixesto(ano) {
    if (ano <= 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 400 == 0) {
        return true
    } else {
        return false
    }
}

console.log(anoBixesto(102))
console.log(anoBixesto(104))
console.log(anoBixesto(400))
console.log(anoBixesto(600))