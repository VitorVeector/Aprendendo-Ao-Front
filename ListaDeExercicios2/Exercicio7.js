function estaEntre(min, max, num, inclusao = false){
    if(num < min || num > max){
        return false
    } else if(num > min && num < max){
        return true
    } else if (inclusao === true && num >= min || num <= max){
        return false
    }
}

console.log(estaEntre(3, 150, 3, false))