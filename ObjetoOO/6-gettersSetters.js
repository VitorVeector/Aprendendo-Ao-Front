const sequencia = {
    _valor: 1, // O ato de colocar underline, quer dizer uma CONVENCAO para um atributo privado
    get valor(){ return this._valor++ },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor, sequencia.valor)


sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

