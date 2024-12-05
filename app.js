//variables
nave = document.getElementById("nave");
luna = document.getElementById("luna");
tierra = document.getElementById("tierra");
asteroide1 = document.getElementById("asteroide1");
asteroide2 = document.getElementById("asteroide2");
asteroide3 = document.getElementById("asteroide3");

//bordes de la ventana
anchoPagina=window.innerWidth;
altoPagina=window.innerHeight;

//hitboxes "colisiones"
anchoNave = nave.offsetWidth;
altoNave = nave.offsetHeight;

anchoLuna = luna.offsetWidth;
altoLuna = luna.offsetHeight;

anchoTierra = tierra.offsetWidth-85;
altoTierra = tierra.offsetHeight-142;

anchoAsteroide1=asteroide1.offsetWidth;
altoAsteroide1=asteroide1.offsetHeight;
anchoAsteroide2=asteroide2.offsetWidth;
altoAsteroide2=asteroide2.offsetHeight;
anchoAsteroide3=asteroide3.offsetWidth;
altoAsteroide3=asteroide3.offsetHeight;

console.log(anchoNave);
console.log(altoNave);
console.log(anchoPagina);
console.log(altoPagina);
console.log(anchoTierra);
console.log(altoTierra);

ObjNave = {
    //variables de la nave
    Velocidad: 1,
    gravedad: 0.08,
    X: 0,
    Y: 0,

    iniciarGravedad(){
        //gravedad
        intervalo = setInterval(()=>{
            //para fuera de la tierra
            if(this.X >= anchoTierra && this.Y <= altoTierra){
                this.Y -= this.gravedad * ObjNave.Velocidad;
            //cuando esta encima de la tierra
            }else if(this.Y >= altoTierra){
                if(this.Y <= 0){
                }else{
                    this.Y -= this.gravedad * ObjNave.Velocidad;
                }
            //si se pasa se recoloca
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
            if(this.X >= 0 || this.Y >= 0){
                
            }
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
                    //colision con la tierra
                    if(ObjNave.X <= anchoTierra-10 && ObjNave.Y <= altoTierra){
                        clearInterval(disminuirVelocidad); 
                        disminuirVelocidad = null;
                    }else{
                        //movimiento
                        if(ObjNave.Y >= -135){
                            ObjNave.Velocidad += 0.01;
                            ObjNave.Y -= 0.5 * ObjNave.Velocidad;
                            clearInterval(disminuirVelocidad); 
                            disminuirVelocidad = null;
                        }
                    }
                }, 10);
            }
            break;

        case "a":
        case "A":
        case "ArrowLeft":
            if(!izquierda){
                izquierda = setInterval(()=>{
                    //colision con la tierra
                    if(ObjNave.X <= anchoTierra && ObjNave.Y <= altoTierra-10){
                        clearInterval(disminuirVelocidad); 
                        disminuirVelocidad = null;
                    }else{
                        //movimiento
                        if(ObjNave.X >= -anchoNave){
                            ObjNave.Velocidad += 0.01;
                            ObjNave.X -= 0.5 * ObjNave.Velocidad;
                            clearInterval(disminuirVelocidad); 
                            disminuirVelocidad = null;
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
                    //colision con la tierra
                    if(ObjNave.X <= anchoTierra-10 && ObjNave.Y <= altoTierra-10){
                        clearInterval(disminuirVelocidad); 
                        disminuirVelocidad = null;
                    }else{
                        //movimiento
                        ObjNave.Velocidad += 0.01;
                        ObjNave.X += 0.5 * ObjNave.Velocidad;
                        clearInterval(disminuirVelocidad); 
                        disminuirVelocidad = null;
                    }
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

//para que solo se ejecute cuando este cargado por completo
document.addEventListener('DOMContentLoaded', function() {
    ObjNave.iniciarGravedad();
    ObjNave.mostrarDatos();
    ObjNave.moverNave();
});




































































































//he subido algunas variables para que quede mas limpio el codigo

let horizontalX=0;
let direccionX=1;

function moverAsteroide1(){
    horizontalX +=5 * direccionX;
    asteroide1.style.marginLeft=horizontalX+"px";

    if(horizontalX + anchoAsteroide1> anchoPagina){
        horizontalX=anchoPagina-anchoAsteroide1;
        direccionX=-1
    }else if(horizontalX<0){
        horizontalX=0;
        direccionX=1;
    }
}

setInterval(moverAsteroide1, 10);

let verticalY=0;
let direccionY=1;

function moverAsteroide2(){
    verticalY +=5 * direccionY;
    asteroide2.style.marginTop=verticalY+"px";

    if(verticalY + altoAsteroide2> altoPagina){
        verticalY= altoPagina-altoAsteroide2;
        direccionY=-1;
    }else if(verticalY<0){
        verticalY=0;
        direccion=1;
    }
}

setInterval(moverAsteroide2, 10);
