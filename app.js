//variables a traves de id
nave = document.getElementById("nave");
luna = document.getElementById("luna");
tierra = document.getElementById("tierra");
asteroide1 = document.getElementById("asteroide1");
asteroide2 = document.getElementById("asteroide2");
asteroide3 = document.getElementById("asteroide3");

ObjNave = {
    //variables de la nave
    Velocidad: 1,
    gravedad: 0.08,
    X: 0,
    Y: -15,

    iniciarGravedad(){
        //gravedad
        intervalo = setInterval(()=>{
            if(this.Y >= -142 && this.X >= 140){
                this.Y -= this.gravedad * ObjNave.Velocidad;
            }
            if(this.Y >= 75){
                this.Y -= this.gravedad * ObjNave.Velocidad;
            }
            if(this.Y <= -142){
                this.Y = -142;
            }
        }, 10);
    },
    mostrarDatos(){
        //mostrar coordenadas
        intervalo2 = setInterval(()=>{
            document.getElementById("cords").innerHTML = "X: " + this.X.toFixed(2) + "<br> Y: " + this.Y.toFixed(2);
            document.getElementById("velocidad").innerHTML = this.Velocidad.toFixed(2) + " Km/s";
        }, 10);
    },
    moverNave(){
        intervalo3 = setInterval(()=>{
            nave.style.marginLeft = this.X + "px";
            nave.style.marginBottom = this.Y + "px";
        });
    }
}

//creacion de los intervalos
let arriba, abajo, izquierda, derecha;
let disminuirVelocidad;

document.addEventListener("keydown", function(teclas){
    //pulsar teclas
    switch(teclas.key){
        case "w":
        case "W":
        case "ArrowUp":
            if(!arriba){
                arriba = setInterval(()=>{
                    ObjNave.Velocidad += 0.01;
                    ObjNave.Y += 0.5 * ObjNave.Velocidad;
                    clearInterval(disminuirVelocidad);
                    disminuirVelocidad = null;
                }, 10);
            }
            break;

        case "s":
        case "S":
        case "ArrowDown":
            if(!abajo){
                abajo = setInterval(()=>{
                    if(ObjNave.Y >= -140 || ObjNave.X <= 140){
                        ObjNave.Velocidad += 0.01;
                        ObjNave.Y -= 0.5 * ObjNave.Velocidad;
                        clearInterval(disminuirVelocidad); 
                        disminuirVelocidad = null;
                    }
                }, 10);
            }
            break;

        case "a":
        case "A":
        case "ArrowLeft":
            if(!izquierda){
                izquierda = setInterval(()=>{
                    if(ObjNave.X >= 0){
                        ObjNave.Velocidad += 0.01;
                        ObjNave.X -= 0.5 * ObjNave.Velocidad;
                        clearInterval(disminuirVelocidad); 
                        disminuirVelocidad = null;
                        if(ObjNave.X <= 0){
                            ObjNave.X = 0;
                        }
                    }
                }, 10);
            }
            break;

        case "d":
        case "D":
        case "ArrowRight":
            if(!derecha){
                derecha = setInterval(()=>{
                    ObjNave.Velocidad += 0.01;
                    ObjNave.X += 0.5 * ObjNave.Velocidad;
                    clearInterval(disminuirVelocidad); 
                    disminuirVelocidad = null;
                }, 10);
            }
            break;
    }
});

document.addEventListener("keyup", function(teclas){
    //soltar teclas
    switch(teclas.key){
        case "w":
        case "W":
        case "ArrowUp":
            clearInterval(arriba);
            arriba = null;
            break;

        case "s":
        case "S":
        case "ArrowDown":
            clearInterval(abajo);
            abajo = null;
            break;

        case "a":
        case "A":
        case "ArrowLeft":
            clearInterval(izquierda);
            izquierda = null;
            break;

        case "d":
        case "D":
        case "ArrowRight":
            clearInterval(derecha);
            derecha = null;
            break;
    }

    //comenzar a bajar la velocidad al soltar una tecla
    if(!disminuirVelocidad){
        disminuirVelocidad = setInterval(()=>{
            if (ObjNave.Velocidad <= 1) { 
                clearInterval(disminuirVelocidad); 
                disminuirVelocidad = null;
            }else{
                ObjNave.Velocidad -= 0.005;
            }
        }, 10);
    }
});

ObjNave.iniciarGravedad();
ObjNave.mostrarDatos();
ObjNave.moverNave();

let horizontalX=0;
let direccionX=1;

const anchoPagina=window.innerWidth;
const anchoAsteroide1=asteroide1.offsetWidth;

function moverAsteroide1(){
    horizontalX +=5 * direccionX;
    asteroide1.style.marginLeft=horizontalX+"px";

    if(horizontalX + anchoAsteroide1> anchoPagina){
        horixontalX=anchoPagina-anchoAsteroide1;
        direccionX=-1
    }else if(horizontalX<0){
        horizontalX=0;
        direccionX=1;
    }
}

setInterval(moverAsteroide1, 15);
