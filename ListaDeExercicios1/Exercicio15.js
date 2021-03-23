const pedidoCarro = (nome) => {
    switch (nome) {
        case "Hatch":
            return "Compra efetuada com sucesso"
            break;
        case "Sedan":
            return "Tem certeza que nao quer esse modelo?"
            break;
        case "Motocicleta":
            return "Tem certeza que nao quer esse modelo?"
            break;
        case "Caminhonete":
            return "Tem certeza que nao quer esse modelo?"
            break;
        default:
            return "Nao temos este modelo aqui."
            break;
    }
}

console.log(pedidoCarro("Caminhonete"))

