//IMC
const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Ingrese su peso en kg: "));
let altura = parseFloat(prompt("Ingrese su altura en m: "));

var imc = peso / (altura ** 2);
var estado = "";
console.log("Su IMC es: " + imc)
if (peso <= 0 || altura <= 0){
    console.log("Ingrese un valor mayor a 0");
}
else{
    if(imc <18.5){
        estado = "bajo peso";
    }
    else if(imc >= 18.5 && imc <= 24.9){
        estado = "normal";
    }
    else if(imc >= 25 && imc <= 29.9){
        estado = "sobre peso";
    }
    else if(imc >= 30 && imc <= 34.9){
        estado = "obesidad I";
    }
    else if(imc >= 35 && imc <= 39.9){
        estado = "obesidad II";
    }
    else if(imc >= 40){
        estado = "obesidad III";
    }
    else{
        estado = "obesidad grave";
    }
    console.log("Su indice de masa corporal es: " + imc.toFixed(2));
    console.log("Tu estado es " + estado);
}
