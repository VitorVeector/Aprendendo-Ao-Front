// Operação estranha que dará o resultado Infinito
console.log(7 / 0);

// O 10 entre aspas é do tipo string, em outras linguagem o trecho abaixo daria um erro. JS verifica o que tem dentro da String
console.log("10" / 2);

// O Resultado correto seria 0.8 em outras linguagens, porém as especificações em Js são diferentes. Isso só acontece em expressões que não retornam um número inteiro
console.log(0.1 + 0.7); 

console.log( 0.3 + 0.7);

//Para impremir 2 casas decimais após um número inteiro, além de arredondar
console.log((10.3456).toFixed(2)); 