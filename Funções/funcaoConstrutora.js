function carro(velocidadeMaxima = 200, delta = 5){
    //Atributo privado
    let velocidadeAtual = 0 

    // Metodo publcio
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }      
    }
    // metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

//Sempre que chamar o metodo acelerar, o uno ira aumentar de velocidade
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(400, 10)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())


const fusca = new carro(130, 5)
fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
console.log(`${fusca.getVelocidadeAtual()}Km`)

