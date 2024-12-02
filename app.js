nave = document.getElementById("nave");
luna = document.getElementById("luna");
asteroide1 = document.getElementById("asteroide1");
asteroide2 = document.getElementById("asteroide2");
asteroide3 = document.getElementById("asteroide3");

ObjNave = {
    //variables de la nave
    gravedad: 0.01,
    X: 0,
    Y: 0,

    iniciarGravedad(){
        //gravedad
        intervalo = setInterval(()=>{
            if(this.Y >= 0){
                this.Y -= this.gravedad;
            }
            if(this.Y <= 0){
                this.Y = 0;
            }
        }, 100);
    },
    mostrarDatos(){
        //mostrar coordenadas
        intervalo2 = setInterval(()=>{
            document.getElementById("cords").innerHTML = "X: " + this.X.toFixed(2) + "<br> Y: " + this.Y.toFixed(2);
        });
    }
}

let arriba, abajo, izquierda, derecha;
document.addEventListener("keydown", function(teclas){
    //pulsar teclas
    switch(teclas.key){
        case "w":
        case "W":
        case "ArrowUp":
            if(!arriba){
                arriba = setInterval(()=>{
                    ObjNave.Y += 0.03;
                }, 100);
            }
            break;

        case "s":
        case "S":
        case "ArrowDown":
            if(!abajo){
                abajo = setInterval(()=>{
                    if(ObjNave.Y >= 0.03){
                        ObjNave.Y -= 0.03;
                    }
                }, 100);
            }
            break;

        case "a":
        case "A":
        case "ArrowLeft":
            if(!izquierda){
                izquierda = setInterval(()=>{
                    if(ObjNave.X >= 0.03){
                        ObjNave.X -= 0.03;
                    }
                }, 100);
            }
            break;

        case "d":
        case "D":
        case "ArrowRight":
            if(!derecha){
                derecha = setInterval(()=>{
                    ObjNave.X += 0.03;
                }, 100);
            }
            break;

        default:
            alert("tecla no valida")
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

        default:
            alert("tecla no valida")
    }
});

ObjNave.iniciarGravedad();
ObjNave.mostrarDatos();