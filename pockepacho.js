let ataqueJugador 
let ataqueEnemigo
let resultado
let vidasJugador = 3;
let vidasEnemigo = 3;


function iniciarJuego() {
    let zonaAtaque = document.getElementById("selec_ataque")
    zonaAtaque.style.display = "none";

    let bReinicio = document.getElementById("reiniciar")
    bReinicio.style.display = "none";

    document.getElementById("vidaJugador").innerHTML = vidasJugador;
    document.getElementById("vidaenemigo").innerHTML = vidasEnemigo;

    let botonMascotaJugador = document.getElementById("boton-mascota");

    botonMascotaJugador.addEventListener("click", MascotaElegida);

    let botonFuego = document.getElementById("boton-fuego")
        botonFuego.addEventListener("click",ataqueFuego);

    let botonAgua = document.getElementById("boton-agua")
        botonAgua.addEventListener("click",ataqueAgua);

    let botonTierra = document.getElementById("boton-tierra")
        botonTierra.addEventListener("click",ataqueTierra);

    let botonReinicio = document.getElementById("boton-reiniciar")
        botonReinicio.addEventListener("click", reinicio);
        
}

function aleatorio(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

//al hacer click en el boton se selecciona el pokepacho
function MascotaElegida(){
    if (document.getElementById("whaterman").checked) {
       document.getElementById("mascotajugador").innerHTML = "Whaterman";
       document.getElementById("AliadoImg").setAttribute("src", "./imagenes/godzila.png");

    }else if  (document.getElementById("tierraman").checked) {
        document.getElementById("mascotajugador").innerHTML = "Tierraman";
        document.getElementById("AliadoImg").setAttribute("src", "./imagenes/tierra-removebg-preview.png");

    }
    else if (document.getElementById("fuegoman").checked) {
        document.getElementById("mascotajugador").innerHTML = "Fuegoman";
        document.getElementById("AliadoImg").setAttribute("src", "./imagenes/fuegoman-removebg-preview.png");

    }
    else if (document.getElementById("pachomang").checked) {
        document.getElementById("mascotajugador").innerHTML = "Pachomang";
        document.getElementById("AliadoImg").setAttribute("src", "./imagenes/pachomang.png");

    }
    else if (document.getElementById("monicang").checked) {
        document.getElementById("mascotajugador").innerHTML = "Monicang"
        document.getElementById("AliadoImg").setAttribute("src", "./imagenes/pacho-removebg-preview.png");

    }
    else if (document.getElementById("peepo").checked) {

        document.getElementById("mascotajugador").innerHTML = "Peepo";
        document.getElementById("AliadoImg").setAttribute("src", "./imagenes/peepo-removebg-preview.png");


    }
    else {
        alert("por favor elige un personaje");
        window.location.reload(true);
    } ; 

    seleccionarMascotaEnemigo()   
    let zonaAtaque = document.getElementById("selec_ataque")
    zonaAtaque.style.display = "flex";

    let zonaPersonaje = document.getElementById("selec_mascota")
    zonaPersonaje.style.display = "none";

    let textoEligeMonstruo = document.getElementById("texto-elige-monstruo") 
    textoEligeMonstruo.style.display ="none"
}
function seleccionarMascotaEnemigo(){
    let personaje = aleatorio(1,6)
    if (personaje == 1) {
        document.getElementById("mascotaenemigo").innerHTML = "Whaterman";
        document.getElementById("enemigoImg").setAttribute("src", "./imagenes/godzila.png");
    }
    else if (personaje == 2) {
        document.getElementById("mascotaenemigo").innerHTML = "Tierraman";
        document.getElementById("enemigoImg").setAttribute("src", "./imagenes/tierra-removebg-preview.png");
    }
    else if (personaje == 3) {
        document.getElementById("mascotaenemigo").innerHTML = "Fuegoman";
        document.getElementById("enemigoImg").setAttribute("src", "./imagenes/fuegoman-removebg-preview.png");
    }
    else if (personaje == 4) {
        document.getElementById("mascotaenemigo").innerHTML = "Pachomang";
        document.getElementById("enemigoImg").setAttribute("src", "./imagenes/pachomang.png");
    }
    else if (personaje == 5) {
        document.getElementById("mascotaenemigo").innerHTML = "Monicang";
        document.getElementById("enemigoImg").setAttribute("src", "./imagenes/pacho-removebg-preview.png");
    }
    else if (personaje == 6) {
        document.getElementById("mascotaenemigo").innerHTML = "Peepo";
        document.getElementById("enemigoImg").setAttribute("src", "./imagenes/peepo-removebg-preview.png");
    }
}
function ataqueAleatorioEnemigo(){
    let ataque = aleatorio(1,3);
    if (ataque == 1) {
        ataqueEnemigo = "FUEGO"
    }
    else if (ataque == 2) {
        ataqueEnemigo = "AGUA"
    }
    else {
        ataqueEnemigo = "TIERRA"
    }
    resultadoPelea()
    historialPelea()
    vidasTodos()
    revidionvidas()

};
function vidasTodos() {
    if (resultado =="Empatasteis 😮💁‍♂️") {
        vidasEnemigo = vidasEnemigo -1;
        vidasJugador = vidasJugador -1;
    } else if (resultado =="GANASTE 🐱‍👤😎"){
        vidasEnemigo = vidasEnemigo -1;
    } else {
        vidasJugador = vidasJugador -1;
    }
    document.getElementById("vidaJugador").innerHTML = vidasJugador;
    document.getElementById("vidaenemigo").innerHTML = vidasEnemigo;
}
function resultadoPelea() {
    if (ataqueJugador == ataqueEnemigo) {
        resultado = "Empatasteis 😮💁‍♂️";
    } else if ((ataqueJugador == "FUEGO") && (ataqueEnemigo == "TIERRA")) {
        resultado = "GANASTE 🐱‍👤😎"
    } else if ((ataqueJugador == "AGUA") && (ataqueEnemigo == "FUEGO")) {
        resultado = "GANASTE 🐱‍👤😎"
    } else if ((ataqueJugador == "TIERRA") && (ataqueEnemigo == "AGUA")) {
        resultado = "GANASTE 🐱‍👤😎"
    } else {
        resultado = "PERDISTE 😪🏴‍☠️"
    }
} ;
function revidionvidas() {
    if (vidasJugador == 0) {
        historiafinal("Tu personaje se quedó sin vidas, PERDISTE 🙊💀💀")
        historiafinal("Buen combate, dale al botón reiniciar para volver a luchar 🥊🥊")
        let botonFuego = document.getElementById("boton-fuego")
        botonFuego.disabled = true;

        let botonAgua = document.getElementById("boton-agua")
        botonAgua.disabled = true;

        let botonTierra = document.getElementById("boton-tierra")
        botonTierra.disabled = true;    
        
        let bReinicio = document.getElementById("reiniciar")
        bReinicio.style.display = "block";

    } else if (vidasEnemigo == 0) {
        historiafinal("El enemigo se quedó sin vidas, GANASTE 🦸‍♀️😎👾")
        historiafinal("buen combate, dale al botón reiniciar para volver a luchar 🥊🥊")
        let botonFuego = document.getElementById("boton-fuego")
        botonFuego.disabled = true;

        let botonAgua = document.getElementById("boton-agua")
        botonAgua.disabled = true;

        let botonTierra = document.getElementById("boton-tierra")
        botonTierra.disabled = true;
        
        let bReinicio = document.getElementById("reiniciar")
        bReinicio.style.display = "block";
    }
function historiafinal(resultadofinal) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadofinal

    sectionMensajes.appendChild(parrafo)
}
}
function historialPelea() {
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
     parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador +", la mascota del enemigo atacó con "+ ataqueEnemigo +", "+ resultado;
    sectionMensajes.appendChild(parrafo)
}
function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
};
function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
};
function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
};
function reinicio() {
    location.reload()
}
window.addEventListener("load",iniciarJuego)