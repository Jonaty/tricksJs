// 2. Convertir un string a numero

function main(){
    console.log('Número: ', convertirANumero('255'));
    console.log('Tipo: ', typeof(convertirANumero('1345')));
}

function convertirANumero(texto){
    return +texto;
}

main();