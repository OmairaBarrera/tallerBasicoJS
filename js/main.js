const tablaNotas = {
    tradicional:    ['90-100', '80-89', '70-79', '60-69', '1-59', '0'],
    rango:          ['12-14', '9-11', '6-8', '3-5', '1-2', '0'],
    letra:          ['A','B','C','D','E','F'],
    SBG:          ['5','4','3','2','1','0'],
};

console.table(tablaNotas);

let metodo = 0;
metodo = Number(prompt("Escoge tu metodo de calificacion: \n\t1. tradicional \n\t2.rango \n\t3. letra"));

if (metodo == 1){

    let nota = parseInt(prompt("Escogiste Metodo Tradicional \nIngresa tu nota en porcentaje de 0 a 100"));
    let mensaje;
    
    switch (true){
        case (nota>=90 && nota<=100):
            mensaje = "Eres el mejor, tu nota en el SBG corresponde a: 5";
            break;
        case (nota>=80&&nota<=89):
            mensaje = "Eres bueno, tu nota en el SBG corresponde a: 4";
            break;
        case (nota>=70&&nota<=79):
            mensaje = "Eres regular, tu nota en el SBG corresponde a: 3";
            break;
        case (nota>=60&&nota<=69):
            mensaje = "Puedes Mejorar, tu nota en el SBG corresponde a: 2";
            break;
        case nota<60 && nota>0:
            mensaje = "Ni lo sigas intentando, tu nota en el SBG corresponde a: 1";
            break;
        case nota == 0:
            mensaje = "Eres lo peor, tu nota en el SBG corresponde a: 0";
            break;
        default:
            console.log("Nota no valida");
            break;
    }
    console.log(mensaje);
    
} else if (metodo == 2){

    let nota = parseInt(prompt("Escogiste Metodo Rango \nIngresa tu nota en rango de 0 a 14"));
    let mensaje;

    switch (true){
        case (nota>=12 && nota<=14):
            mensaje = "Eres el mejor, tu nota en el SBG corresponde a: 5";
            break;
        case (nota>=9 && nota<=11):
            mensaje = "Eres bueno, tu nota en el SBG corresponde a: 4";
            break;
        case (nota>=6 && nota<=8):
            mensaje = "Eres regular, tu nota en el SBG corresponde a: 3";
            break;
        case (nota>=3 && nota<=5):
            mensaje = "Puedes Mejorar, tu nota en el SBG corresponde a: 2";
            break;
        case (nota==1 || nota ==2):
            mensaje = "Ni lo sigas intentando, tu nota en el SBG corresponde a: 1";
            break;
        case nota == 0:
            mensaje = "Eres lo peor,, tu nota en el SBG corresponde a: 0";
            break;
        default:
            console.log("Nota no valida");
            break;
    }
    console.log(mensaje);

} else if (metodo == 3){

    let nota = prompt("Escogiste Metodo Letra \nIngresa tu nota en letra de A a la F");
    let mensaje;
    
    switch (nota){
        case 'A':
            mensaje = "Eres el mejor, tu nota en el SBG corresponde a: 5";
            break;
        case 'B':
            mensaje = "Eres bueno, tu nota en el SBG corresponde a: 4";
            break;
        case 'C':
            mensaje = "Eres regular, tu nota en el SBG corresponde a: 3";
            break;
        case 'D':
            mensaje = "Puedes Mejorar, tu nota en el SBG corresponde a: 2";
            break;
        case 'E':
            mensaje = "Ni lo sigas intentando, tu nota en el SBG corresponde a: 1";
            break;
        case 'F':
            mensaje = "Eres lo peor, tu nota en el SBG corresponde a: 0";
            break;
        default:
            console.log("Nota no valida");
            break;
    }
    console.log(mensaje);
};

