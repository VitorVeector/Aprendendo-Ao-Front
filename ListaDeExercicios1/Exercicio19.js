function lanche(cod, qtd){
       switch(cod){
           case 100:
               console.log(`Cachorro quente R$3,00, quantidade: ${qtd}, preco: R$${3*qtd}`)
               break
            case 200:
                console.log(`Hamburguer Simples R$4,00, quantidade: ${qtd}, preco: R$${4*qtd}`)
                break
            case 300:
                console.log(`X-Burg R$5,50, quantidade: ${qtd}, preco: R$${5.5*qtd}`)
                break
            case 400:
                console.log(`Bauru R$7,50, quantidade: ${qtd}, preco: R$${7.5*qtd}`)
                break
            case 500:
                console.log(`Refrigerante R$3,00, quantidade: ${qtd}, preco: R$${3*qtd}`)
                break
            case 600:
                console.log(`Suco R$2,80, quantidade: ${qtd}, preco: R$${2.8*qtd}`)
                break
            default:
                console.log(`Produto com o codigo ${cod}, nao existe`)
                break
       }
}

lanche(100, 2)
lanche(300, 7)