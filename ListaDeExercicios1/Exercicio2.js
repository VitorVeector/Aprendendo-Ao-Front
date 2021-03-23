function tipoTriangulo(l1, l2, l3){
    if(l1 == l2 && l2 == l3 ){
        console.log(`Triangulo Equilatero`)
    }else if(l1 == l2 || l2 == l3 || l3 == l1){
        console.log(`Triangulo Isoceles`)
    }else if(l1 != l2 && l2 != l3 && l3 != l1){
        console.log(`Triangulo Escaleno`)
    }
}

tipoTriangulo(3, 3, 4)