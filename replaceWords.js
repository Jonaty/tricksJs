// 8. Reemplazar palabras en un string

function main(){
    reemplazaPalabras();
}

function reemplazaPalabras(){
    let string = "Naty es mas kawaii que Naty";

    console.log(string.replace(/Naty/g, "Ivette"));
}

main();