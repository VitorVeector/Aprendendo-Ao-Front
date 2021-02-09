function fruta(nome){
    switch(nome){
        case "Maçã":
            console.log(`Não vendemos essa fruta aqui.`)
            break;
        case "Kiwi":
            console.log('Estamos com escassez de Kiwi.')
            break;
        case "Melancia":
            console.log('Aqui está, são três reais o quilo.')
            break;
        default:
            console.log(`Nao entendi que fruta voceh procura`)
            break;
    }
}

fruta("Melancia")
