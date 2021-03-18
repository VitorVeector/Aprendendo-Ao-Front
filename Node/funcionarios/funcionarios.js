const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    
    console.log(funcionarios.genero)
    // Filtrar todos os chineses
const chineses = (f) => f.pais === 'China'

//Filtrar mulheres 
const mulheres = (f) => f.genero === 'F'

//Filtrar salario
const menorSalario = (f, fAtual) => {
    if(f.salario < fAtual.salario){
        return f 
    } else {
        return fAtual
    }
}

const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
console.log(func)
})

