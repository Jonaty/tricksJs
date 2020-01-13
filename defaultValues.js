// 4. Valores por defecto

function main(){
    let usuario = new Usuario('', 30);
    console.log('Nombre: ', usuario.nombre);
    console.log('Edad: ', usuario.edad);
}

function Usuario(nombre, edad){
    this.nombre = nombre || 'Ivette';
    this.edad = edad || 26; 
}

main();