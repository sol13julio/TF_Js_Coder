var texto = prompt("Hola usuario");
var resultado = texto;
var texto2 = "";


let entrada = prompt("¿Como se llama?") ;
let salida =  "Es un placer " + entrada
alert(salida)

while(texto2 != "si") {
    texto2 = prompt("¿Estas preparado para abrir los ojos?");
    resultado = resultado + " " + texto2;
    console.log(resultado);
}

alert("Bienvenido a la Matrix " + entrada);
