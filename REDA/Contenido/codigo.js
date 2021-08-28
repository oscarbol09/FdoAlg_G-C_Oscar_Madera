var correctas = 0;
var incorrectas = 0;

document.getElementById("correctas").innerHTML = correctas;
document.getElementById("incorrectas").innerHTML = incorrectas;

var pregunta = {
    pregunta: "¿En colombia, cuál es la droga que más se consume?",
    opciones: "La Cocaina,La Marihuana,El Éxtasis,La Heroina",
    correcta: 1,
    puntuacion: 1
};

var pregunta2 = {
    pregunta: "¿Según el Observatorio de Drogas de Colombia, qué porcentaje de los consumidores, consumen Marihuana?",
    opciones: "50%,87%,30%",
    correcta: 1,
    puntuacion: 1
};

var pregunta3 = {
    pregunta: "¿Cuál es el rango de edad en el cuál se consume más cocaina?",
    opciones: "18-24,25-40,12-17",
    correcta: 0,
    puntuacion: 1

};

var pregunta4 = {
    pregunta: "¿Cuál es el porcentaje de la población colombiana que consume alcohol?",
    opciones: "80%,10%,50%",
    correcta: 2,
    puntuacion: 1

};

var pregunta5 = {
    pregunta: "¿Se puede dejar de consumir drogas en pocos días?",
    opciones: "Si,No,No Sé",
    correcta: 1,
    puntuacion: 1

};

var pregunta6 = {
    pregunta: "¿Como se llama el dispositivo que atenua los sintomas de la abstinencia a los opioides?",
    opciones: "NSS-2 Bridge,Subutex,Chantix-27",
    correcta: 0,
    puntuacion: 1

};

var pregunta7 = {
    pregunta: "¿Cuales son las mejores alternativas para la prevensión de uso de drogas?",
    opciones: "Consumir en menos cantidad,Jugar video-Juegos,Rutina de actividades fisicas",
    correcta: 2,
    puntuacion: 1

};

var pregunta8 = {
    pregunta: "¿Qué otras actividades alternativas se recomiendan para la prevensión?",
    opciones: "Paracaidismo,Arte,Jardinería",
    correcta: 1,
    puntuacion: 1

};

var pregunta9 = {
    pregunta: "¿Cuál es el derivado de cannabis más consumido?",
    opciones: "Hachís,Polen,Rufis",
    correcta: 0,
    puntuacion: 1

};

var pregunta10 = {
    pregunta: "Sabiendo lo que has investigado, ¿Te gustaría probar alguna sustancia ílicita?",
    opciones: "Si,No,Tal vez",
    correcta: 1,
    puntuacion: 1

};
//Pregunta 1

var trozos = pregunta.opciones.split(",");
document.getElementById("pregunta").innerHTML = "<span class=material-icons>settings</span> " + pregunta.pregunta;
document.getElementById("t_opc1").innerHTML = trozos[0];
document.getElementById("t_opc2").innerHTML = trozos[1];
document.getElementById("t_opc3").innerHTML = trozos[2];
document.getElementById("t_opc4").innerHTML = trozos[3];

document.getElementById("opc1_1").value = "0"
document.getElementById("opc1_2").value = "1"
document.getElementById("opc1_3").value = "2"
document.getElementById("opc1_4").value = "3"

//Pregunta 2

var trozos2 = pregunta2.opciones.split(",");
document.getElementById("pregunta2").innerHTML = "<span class=material-icons>settings</span> " + pregunta2.pregunta;
document.getElementById("t2_opc1").innerHTML = trozos2[0];
document.getElementById("t2_opc2").innerHTML = trozos2[1];
document.getElementById("t2_opc3").innerHTML = trozos2[2];


document.getElementById("opc2_1").value = "0";
document.getElementById("opc2_2").value = "1";
document.getElementById("opc2_3").value = "2";


//Pregunta 3

var trozos3 = pregunta3.opciones.split(",");
document.getElementById("pregunta3").innerHTML = "<span class=material-icons>settings</span> " + pregunta3.pregunta;
document.getElementById("t3_opc1").innerHTML = trozos3[0];
document.getElementById("t3_opc2").innerHTML = trozos3[1];
document.getElementById("t3_opc3").innerHTML = trozos3[2];


document.getElementById("opc3_1").value = "0";
document.getElementById("opc3_2").value = "1";
document.getElementById("opc3_3").value = "2";

//Pregunta 4

var trozos4 = pregunta4.opciones.split(",");
document.getElementById("pregunta4").innerHTML = "<span class=material-icons>settings</span> " + pregunta4.pregunta;
document.getElementById("t4_opc1").innerHTML = trozos4[0];
document.getElementById("t4_opc2").innerHTML = trozos4[1];
document.getElementById("t4_opc3").innerHTML = trozos4[2];


document.getElementById("opc4_1").value = "0";
document.getElementById("opc4_2").value = "1";
document.getElementById("opc4_3").value = "2";


//Pregunta 5

var trozos5 = pregunta5.opciones.split(",");
document.getElementById("pregunta5").innerHTML = "<span class=material-icons>settings</span> " + pregunta5.pregunta;
document.getElementById("t5_opc1").innerHTML = trozos5[0];
document.getElementById("t5_opc2").innerHTML = trozos5[1];
document.getElementById("t5_opc3").innerHTML = trozos5[2];


document.getElementById("opc5_1").value = "0";
document.getElementById("opc5_2").value = "1";
document.getElementById("opc5_3").value = "2";


//Pregunta 6

var trozos6 = pregunta6.opciones.split(",");
document.getElementById("pregunta6").innerHTML = "<span class=material-icons>settings</span> " + pregunta6.pregunta;
document.getElementById("t6_opc1").innerHTML = trozos6[0];
document.getElementById("t6_opc2").innerHTML = trozos6[1];
document.getElementById("t6_opc3").innerHTML = trozos6[2];


document.getElementById("opc6_1").value = "0";
document.getElementById("opc6_2").value = "1";
document.getElementById("opc6_3").value = "2";


//Pregunta 7

var trozos7 = pregunta7.opciones.split(",");
document.getElementById("pregunta7").innerHTML = "<span class=material-icons>settings</span> " + pregunta7.pregunta;
document.getElementById("t7_opc1").innerHTML = trozos7[0];
document.getElementById("t7_opc2").innerHTML = trozos7[1];
document.getElementById("t7_opc3").innerHTML = trozos7[2];


document.getElementById("opc7_1").value = "0";
document.getElementById("opc7_2").value = "1";
document.getElementById("opc7_3").value = "2";


//Pregunta 8

var trozos8 = pregunta8.opciones.split(",");
document.getElementById("pregunta8").innerHTML = "<span class=material-icons>settings</span> " + pregunta8.pregunta;
document.getElementById("t8_opc1").innerHTML = trozos8[0];
document.getElementById("t8_opc2").innerHTML = trozos8[1];
document.getElementById("t8_opc3").innerHTML = trozos8[2];


document.getElementById("opc8_1").value = "0";
document.getElementById("opc8_2").value = "1";
document.getElementById("opc8_3").value = "2";


//Pregunta 9

var trozos9 = pregunta9.opciones.split(",");
document.getElementById("pregunta9").innerHTML = "<span class=material-icons>settings</span> " + pregunta9.pregunta;
document.getElementById("t9_opc1").innerHTML = trozos9[0];
document.getElementById("t9_opc2").innerHTML = trozos9[1];
document.getElementById("t9_opc3").innerHTML = trozos9[2];


document.getElementById("opc9_1").value = "0";
document.getElementById("opc9_2").value = "1";
document.getElementById("opc9_3").value = "2";


//Pregunta 10

var trozos10 = pregunta10.opciones.split(",");
document.getElementById("pregunta10").innerHTML = "<span class=material-icons>settings</span> " + pregunta10.pregunta;
document.getElementById("t10_opc1").innerHTML = trozos10[0];
document.getElementById("t10_opc2").innerHTML = trozos10[1];
document.getElementById("t10_opc3").innerHTML = trozos10[2];


document.getElementById("opc10_1").value = "0";
document.getElementById("opc10_2").value = "1";
document.getElementById("opc10_3").value = "2";

function evaluar() {
    lleno = false;
    var p1 = document.cuestionario.p1;
    var p2 = document.cuestionario.p2;
    var p3 = document.cuestionario.p3;
    var p4 = document.cuestionario.p4;
    var p5 = document.cuestionario.p5;
    var p6 = document.cuestionario.p6;
    var p7 = document.cuestionario.p7;
    var p8 = document.cuestionario.p8;
    var p9 = document.cuestionario.p9;
    var p10 = document.cuestionario.p10;


    for (i = 0; i < p1.length; i++) {
        if (p1[i].checked) {
            lleno = true;
            break;
        } else {
            lleno = false;
        }
    }

    if (lleno) {
        for (i = 0; i < p2.length; i++) {
            if (p2[i].checked) {
                lleno = true;
                break;
            } else {
                lleno = false;
            }
        }
    }
    if(lleno){
        for (i = 0; i < p3.length; i++) {
            if (p3[i].checked) {
                lleno = true;
                break;
            } else {
                lleno = false;
            }
        }
    }
    if(lleno){
        for (i = 0; i < p4.length; i++) {
            if (p4[i].checked) {
                lleno = true;
                break;
            } else {
                lleno = false;
            }
        }
    }
    if(lleno){
        for (i = 0; i < p5.length; i++) {
            if (p5[i].checked) {
                lleno = true;
                break;
            } else {
                lleno = false;
            }
        }
    }
    if(lleno){
        for (i = 0; i < p6.length; i++) {
            if (p6[i].checked) {
                lleno = true;
                break;
            } else {
                lleno = false;
            }
        }
    }
    if(lleno){
        for (i = 0; i < p7.length; i++) {
            if (p7[i].checked) {
                lleno = true;
                break;
            } else {
                lleno = false;
            }
        }
    }
    if(lleno){
        for (i = 0; i < p8.length; i++) {
            if (p8[i].checked) {
                lleno = true;
                break;
            } else {
                lleno = false;
            }
        }
    }
    if(lleno){
        for (i = 0; i < p9.length; i++) {
            if (p9[i].checked) {
                lleno = true;
                break;
            } else {
                lleno = false;
            }
        }
    }
    if(lleno){
        for (i = 0; i < p10.length; i++) {
            if (p10[i].checked) {
                lleno = true;
                break;
            } else {
                lleno = false;
            }
        }
    }



    correctas = 0;
    incorrectas = 0;
    var r_p1 = document.forms["cuestionario"]["p1"].value;
    var r_p2 = document.forms["cuestionario"]["p2"].value;
    var r_p3 = document.forms["cuestionario"]["p3"].value;
    var r_p4 = document.forms["cuestionario"]["p4"].value;
    var r_p5 = document.forms["cuestionario"]["p5"].value;
    var r_p6 = document.forms["cuestionario"]["p6"].value;
    var r_p7 = document.forms["cuestionario"]["p7"].value;
    var r_p8 = document.forms["cuestionario"]["p8"].value;
    var r_p9 = document.forms["cuestionario"]["p9"].value;
    var r_p10 = document.forms["cuestionario"]["p10"].value;


    if (lleno) {

        //evaluacion pregunta 1
        if (r_p1 == pregunta.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p1");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p1");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }

        //evaluacion pregunta 2
        if (r_p2 == pregunta2.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p2");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p2");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }


        //evaluacion pregunta 3
        if (r_p3 == pregunta3.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p3");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p3");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }

        //evaluacion pregunta 4
        if (r_p4 == pregunta4.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p4");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p4");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }

        //evaluacion pregunta 5
        if (r_p5 == pregunta5.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p5");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p5");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }

        //evaluacion pregunta 6
        if (r_p6 == pregunta6.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p6");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p6");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }

        //evaluacion pregunta 7
        if (r_p7 == pregunta7.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p7");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p7");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }

        //evaluacion pregunta 8
        if (r_p8 == pregunta8.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p8");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p8");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }

        //evaluacion pregunta 9
        if (r_p9 == pregunta9.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p9");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p9");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }

        //evaluacion pregunta 10
        if (r_p10 == pregunta10.correcta) {
            correctas += 1;
            var element = document.getElementById("img_p10");
            element.classList.remove("incorrecta");
            element.classList.add("correcta");
        } else {
            incorrectas += 1;
            var element = document.getElementById("img_p10");
            element.classList.remove("correcta");
            element.classList.add("incorrecta");
        }

        document.getElementById("correctas").innerHTML = correctas;
        document.getElementById("incorrectas").innerHTML = incorrectas;

    } else {
        alert("Tienes que marcar todas las preguntas");
    }
}