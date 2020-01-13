//9. Mostrar los elementos de un array de forma aleatoria

function main(){
    randomArray();
}

function randomArray(){
    let arreglo = [1,2,3,4,5,6,7,8,9];

    console.log(arreglo.sort(() => {
        return Math.random() -0.5;
    }));
}

main();