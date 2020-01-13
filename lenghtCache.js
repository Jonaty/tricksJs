// 5. Longuitud con caché

function main() {
    cicloConCache();
}

function cicloConCache(){
    let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    // let n = arreglo.length;

  //  for(i = 0; i < n; i++){
    for(i = 0; i < arreglo.length; i++){
        console.log('Número', arreglo[i]);
    }
}

main();