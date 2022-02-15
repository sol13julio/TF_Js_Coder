function alertaPrincipal() {  
    alert("ALERTA: DESPIERTA");
}  


var password;
var pass1="conejo";
password = prompt('Hola usuario ¿Cual es el primer animal que se le viene a la cabeza? Sólo una respuesta correcta te llevará al siguiente conejo, digo proceso...');
    

if (password == pass1){ 
    alert("Claro que es el conejo.")
}


var texto = prompt("Ahora si podemos conversar. ¿Como se encuentra el dia de hoy?");
var resultado = texto;
var texto2 = "";


let entrada = prompt("Realmente no importa. ¿Como se llama?") ;
let salida =  "Es un placer " + entrada
alert(salida)




while(texto2 != "si") {
texto2 = prompt("¿Estas preparado para abrir los ojos?");
resultado = resultado + " " + texto2;
console.log(resultado);
}

alert("Presta mucha atencion, " + entrada);


var pildora = prompt("Esta es tu última oportunidad. Después de esto, no hay vuelta atrás. Tomas la píldora azul: la historia termina, te despiertas en tu cama y crees lo que quieras creer. Tomas la píldora roja: te quedas en el País de las Maravillas y te enseño lo profunda que es la madriguera del conejo. Recuerda: todo lo que ofrezco es la verdad. Nada más. .Elige una pildora... ¿Azul o Roja?");

if (pildora == "azul") {
alert("Interesante... Voy a contar hasta 5 y te despertarás en tu cama...");
} 
else alert("Roja será... Bienvenido a la madriguera del conejo")