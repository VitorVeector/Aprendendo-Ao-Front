const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const brasileiros = f => f.pais === 'Brazil'
const mulheres = f => f.genero === 'M'
const homens = f => f.genero === 'H'
const menorSalario = (func, funcAtual)=>{
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    //Mulher chinesa com menorSalario
    const mulherChinesa = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(mulherChinesa)
    const homemBrasileiro = funcionarios.filter(brasileiros)
    console.log(homemBrasileiro)
})
