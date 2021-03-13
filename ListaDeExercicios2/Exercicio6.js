function inverso(variavel){
    const tipo = typeof variavel
    if(tipo === 'number'){
        return -variavel
    } else if (tipo === 'boolean'){
        return !variavel
    }
    
}
console.log(inverso(4))