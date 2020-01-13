// 7. Truncar un arreglo ( que del arreglo original solo muestre algunos elementos)

function main(){
    truncarArreglo();
}

function truncarArreglo(){
    let arreglo = [1,2,3,4,5,6,7,8,9];

    arreglo.length = 4;

    console.log('Arreglo truncado', arreglo);
}

main();