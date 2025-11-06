const nombre = prompt("Ingresa tu nombre:");
const apellido = prompt("Ingresa tu apellido:");
alert("Hola " + nombre + " " + apellido + ", bienvenido a la clase de JavaScript --Introduccion--!");


//Numeros
console.log(typeof 42);      
console.log(typeof -666);     
console.log(typeof 0);        
console.log(typeof 3.14);     
console.log(typeof Infinity);  
console.log(typeof NaN);       

//Textoo
console.log(typeof 'Veinticinco');  
console.log(typeof '');            
console.log(typeof "Hola Mundo");   


//Booleanos

console.log(typeof true);      
console.log(typeof false);     


//Null
let nulo = null;
console.log(typeof nulo);

//Undefined
let nodefinido;
console.log(typeof nodefinido);



let persona = { nombre: "Jose", edad: 25 };
console.log(typeof persona);


let numeros = [8, 10, 21];
console.log(typeof numeros);   
console.log(Array.isArray(numeros));



function saludar() {
    return "Hola";
}
let saludo = saludar();
console.log(typeof saludar);  
console.log(typeof saludo);


let sym = Symbol("id");
console.log(typeof sym);

let big = 123456789012345678901234567890n;
console.log(typeof big);





//Ejemplos

const edad = 8;

if (edad >= 18) {
    let nombre = "Wilfred"
    console.log("Eres mayor de edad.");
} else {
    console.log("Deberias ser mayor de edad.");
}

if (edad <= 18) {
    let nombre = "Wilfred";
    console.log("Eres menor de edad" + nombre);

}



let hora = 8;
if (hora <= 12) {
    console.log("Buenos días");
} else if (hora <= 19) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}


let Temperatura = 22;
if (Temperatura < 0) {
    console.log("Hace mucho frrio Para pinguninos");
} else if (Temperatura <= 15) {
    console.log("Hace frío");
} else if (Temperatura <= 25) {
    console.log("Hace buen Clima baby");
} else {
    console.log("Hace calor, una playita?");
}




let eddad = 16;
if (eddad >= 18) {
    console.log("Eres mayor de edad viejo");
} else {
    console.log("Eres menor de edad enano");
}