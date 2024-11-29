nave = document.getElementById("nave");
luna = document.getElementById("luna");
asteroide1 = document.getElementById("asteroide1");
asteroide2 = document.getElementById("asteroide2");
asteroide3 = document.getElementById("asteroide3");

velocidad = 0;
gravedad = 0;

let intervalo;
document.getElementById("nave").addEventListener("keydown", (evento)=>{
    switch(evento.key){
        case "ArrowUp":
        case "w":
            intervalo = setInterval(()=>{
                velocidad += 1;
            }, velocidad);
        break;
    }   
});

intervalo = setInterval(()=>{
    gravedad += 1;
}, velocidad);