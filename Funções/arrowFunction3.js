let comparaComThis = function (a) {
    console.log(this === a)
}

comparaComThis(global)

const obj = {
    
}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThis(global)
comparaComThis(module.exports)

