//A variavel var, dentro de um bloco de codigo, (desde que nao seja uma funcao) sera visivel em todo local 
{
    {
        {
            var sera = 'Sera'
        }
    }
}
console.log(sera)

function test(){
    var local = 123
}

console.log(test())