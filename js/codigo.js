// Arrays
let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

// Numero de datos dentro de los Arrays
// var whoNro = who.length;
// var whatNro= what.length;
// var whenNro = when.length;

// Generar numeros aleatorios
var whoRandom = Math.floor(Math.random()*who.length);
var whatRandom = Math.floor(Math.random()*what.length);
var whenRandom = Math.floor(Math.random()*when.length) ;

//Comprobar Valores
// console.log(whoRandom);
// console.log(whatRandom);
// console.log(whenRandom);


// Buscar Id en el HTML
var excuse = document.getElementById('excuse');

// // Generar Cadena
excuse.innerHTML = `${who[whoRandom]} ${what[whatRandom]} ${when[whenRandom]}`;

//Cambio de Colores

function obtenerColor(){
    var symbols, color;
    symbols = "0123456789ABCDEF";
    color="#";

    for (var i = 0; i < 6; i++) {
       color = color + symbols[Math.floor(Math.random()* 16)];        
    }
    console.log(color);
    document.body.style.background=color;
}