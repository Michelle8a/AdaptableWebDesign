//Funcion de primera clase la cual se le asigna a una variable
const saludar = function (nombre) {
    console.log(`Hola, ${nombre}`)
}

saludar("Alejandro");


//Funcion de primera clase que recibe como parametro otra funcion
function ejecutarFuncion(fn, valor) {
    console.log(fn(valor))
}

ejecutarFuncion(saludar, "Diego")


//Funcion que retorna otra funcion
function crearMultiplo(multiplicador) {
    return function (numero) {
        return numero + multiplicador;
    }
}

const numeroMultiplicar = crearMultiplo(5);
console.log(numeroMultiplicar(2));


const nombre = ["Marcela", "Alejandro", "Tatiana"];
nombre.push("Daniel");
console.log(nombre);

if(true){
    let variable = "Variable dentro del if";
}

nombre.pop();
console.log(nombre);


function sumarDosNumero(a, b) {
    suma = a + b;
    console.log(`La suma de ${a} + ${b} es ${suma}`);
}

sumarDosNumero(5, 7);

class Animal{
   
    #venenoso

    constructor(especie, edad, color, genero, peso){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.genero = genero;
        this.peso = peso;
    }

    comer(){
        console.log("El animal esta comiendo.");
    }

    dormir(){
        console.log("El animal esta durmiendo.");
    }
}

class Perro extends Animal{
    
    constructor(especie, edad, color, genero, peso, nombre, raza){
        super(especie, edad, color, genero, peso);
        this.nombre = nombre;
        this.raza = raza;
    }

    comer(){
        console.log("El perro esta comiendo pollo.")
    }

    corre(){
        console.log("El perro esta corriendo.")
    }
}

const MiPerro = new Animal("Mamifero", 10, "Café", "Macho", 18, false);

MiPerro.venenoso = true;

console.log(MiPerro);