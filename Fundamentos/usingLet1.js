//Let estara limitado a apenas ser reconhecido dentro de seu bloco, diferente do var
var num = 1 
{
    let num = 2
    console.log('Dentro: ', num)
}
console.log('Fora: ',num)
