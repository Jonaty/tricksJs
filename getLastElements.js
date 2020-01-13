// 6. Obtener los ultimos elementos de un array

function main(){
    ultimoElemento();
}

function ultimoElemento(){
    let arreglo = [1,2,3,4,5,6,7,8,10];

    // De esta manera se obtiene solo un valor del arreglo
   // console.log('Ultimo', arreglo[arreglo.length, 5]); // Para enteros
    //console.log('Ultimo', arreglo[arreglo.length -5]); // Para negativos

    // De esta manera se obtiene un arreglo de elementos
   //console.log('Ultimo', arreglo.slice(2)); //Con positivos no se muestran los primeros elementos
   console.log('Ultimo', arreglo.slice(-4)); //Con negativos se muestran los ultimos elementos
}

main();