// 1. Convertir un valor a un booelano

function main(){
    let cuenta = new Cuenta(4, 'Naty');
 /*    console.log('Dinero: ', cuenta.dinero);
    console.log('Tiene dinero:', cuenta.tieneDinero); */

    if(cuenta.dinero && cuenta.nombre){
        console.log('Tiene los dos')
    } else {
        console.log('Solo tiene uno');
    }
}

function Cuenta(dinero, nombre){
    this.dinero = dinero;
    this.nombre = nombre;
    // Con doble negación se convierte cualquier valor a 'booleano'
    this.tieneDinero = !!this.dinero;
    this.tieneNombre = !!this.nombre;
}

main();