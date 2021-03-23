const escola = "Alf4Master";

//Irá me retornar o que há no array 2 da variavel escola, lembrando que sempre começa contando do zero
console.log(escola.charAt(2));

//Mostrará a localização do caractere na tabela unicode
console.log(escola.charCodeAt(2))

// Irá verificar se existe tal caracter dentro da String
console.log(escola.indexOf(4));

// Irá imprimir o valor a apartir do array selecionado
console.log(escola.substring(2));
console.log(escola.substring(2, 6));

//Dividir elementos em string
console.log('Marcio, José, PedrinhoPVP'.split(','));