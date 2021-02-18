const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'

const filha2 = Object.create(pai, {
    nome: { value: 'Isabela', writable: false, enumerable: true }
})

console.log(`A filha de Pedro ${filha1.nome} tem cabelo ${filha1.corCabelo} e a filha ${filha2.nome} tem cabelo ${filha2.corCabelo}`)

// O codigo a seguir nos mostra se o atributo eh proprio do prototipo ou se veio por heranca

for(let key in filha1){
    filha1.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por Herança: ${key}`)
}