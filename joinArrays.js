// 9. Unir arreglos

function main(){
    unirArreglos();
}

function unirArreglos(){
    let arreglo1 = [1,2,3,4,5];
    let arreglo2 = [6,7,8,9,10];

    console.log('Arreglos unidos', arreglo1.concat(arreglo2));
}

main();