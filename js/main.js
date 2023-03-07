const tablaNotas = {
    tradicional:    ['90-100', '80-89', '70-79', '60-69', '<60', '0'],
    rango:          ['12-14', '9-11', '6-8', '3-5', '1-2', '0'],
    letra:          ['A','B','C','D','E','F'],
};

console.table(tablaNotas);

let metodo = 0;
metodo = prompt("Escoge tu metodo de calificacion: 1. tradicional 2.rango 3. letra");

if (metodo == 1){

    console.log("Escogiste Metodo Tradicional");

    let nota = parseInt(prompt("Ingresa tu nota"));
    let mensaje;
    
    switch (true){
        case (nota>=90 && nota<=100):
            mensaje = "Eres el mejor";
            break;
        case (nota>=80&&nota<=89):
            mensaje = "Eres bueno";
            break;
        case (nota>=70&&nota<=79):
            mensaje = "Eres regular";
            break;
        case (nota>=60&&nota<=69):
            mensaje = "Puedes Mejorar";
            break;
        case nota<60 && nota>0:
            mensaje = "Ni lo sigas intentando";
            break;
        case nota == 0:
            mensaje = "Eres lo peor";
            break;
        default:
            console.log("Nota no valida");
            break;
    }
    console.log(mensaje);
    
} else if (metodo == 2){

    console.log("Escogiste Metodo Rango");
    let nota = parseInt(prompt("Ingresa tu nota"));
    let mensaje;

    switch (true){
        case (nota>=12 && nota<=14):
            mensaje = "Eres el mejor";
            break;
        case (nota>=9 && nota<=11):
            mensaje = "Eres bueno";
            break;
        case (nota>=6 && nota<=8):
            mensaje = "Eres regular";
            break;
        case (nota>=3 && nota<=5):
            mensaje = "Puedes Mejorar";
            break;
        case (nota==1 || nota ==2):
            mensaje = "Ni lo sigas intentando";
            break;
        case nota == 0:
            mensaje = "Eres lo peor";
            break;
        default:
            console.log("Nota no valida");
            break;
    }
    console.log(mensaje);

} else if (metodo == 3){

    console.log("Escogiste Metodo Letra");
    let nota = prompt("Ingresa tu nota");
    let mensaje;
    
    switch (nota){
        case 'A':
            mensaje = "Eres el mejor";
            break;
        case 'B':
            mensaje = "Eres bueno";
            break;
        case 'C':
            mensaje = "Eres regular";
            break;
        case 'D':
            mensaje = "Puedes Mejorar";
            break;
        case 'E':
            mensaje = "Ni lo sigas intentando";
            break;
        case 'F':
            mensaje = "Eres lo peor";
            break;
        default:
            console.log("Nota no valida");
            break;
    }
    console.log(mensaje);
};

