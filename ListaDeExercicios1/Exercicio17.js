function aumentaSalario(sal, plano) {
    switch (plano) {
        case 'A':
            let salTotal = sal + (sal * 0.1)
            console.log(`Seu plano e o A, e seu aumento eh de 10%, seu montante sera ${salTotal}`)
            break
        case 'B':
            let salTotal1 = sal + (sal * 0.15)
            console.log(`Seu plano e o B, e seu aumento eh de 15%, seu montante sera ${salTotal1}`)
            break
        case 'C':
            let salTotal2 = sal + (sal * 0.2)
            console.log(`Seu plano e o C, e seu aumento eh de 20%, seu montante sera ${salTotal2}`)
            break
        default:
            console.log('Opcao invalida')
            break

    }
}

aumentaSalario(2000, 'A')
aumentaSalario(2000, 'B')
aumentaSalario(2000, 'C')
