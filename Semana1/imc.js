
//IMC
const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Ingrese su peso en kg: "));
let altura = parseFloat(prompt("Ingrese su altura en m: "));

var imc = peso / (altura * altura);
console.log("Su IMC es: " + imc)
if (peso <= 0 || altura <= 0){
    console.log("Ingrese un valor mayor a 0");
}
else{
    if(imc <18.5){
    console.log("Tiene bajo peso");
    }
    else if(imc >= 18.5 && imc <= 24.9){
        console.log("Tiene peso normal");
    }
    else if(imc >= 25 && imc <= 29.9){
        console.log("Tiene sobrepeso");
    }
    else if(imc >= 30 && imc <= 34.9){
        console.log("Tiene obesidad I");
    }
    else if(imc >= 35 && imc <= 39.9){
        console.log("Tiene obesidad II");
    }
    else if(imc >= 40){
        console.log("Tiene obesidad III");
    }
}
