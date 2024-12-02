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

document.addEventListener("keydown", function(teclas){
    //teclas
    switch(teclas.key){
        case "w":
        case "W":
        case "ArrowUp":
            ObjNave.Y += 0.03;
            break;
        case "s":
        case "S":
        case "ArrowDown":
            if(ObjNave.Y >= 0.02){
                ObjNave.Y -= 0.03;
            }
            break;
        default:
            alert("tecla no valida")
    }
});

ObjNave.iniciarGravedad();
ObjNave.mostrarDatos();