//FOR
/*
let edad = parseInt(prompt("Ingresar Edad:"));

for (let i = 1; i <= 80; i++){
    let Nombre = prompt("Ingresar Nombre:");
    alert ("Tu nombre es " + Nombre + " y tenes " + edad + " de edad");
    console.log ("Se llama " + Nombre + " y tiene" + edad);
    Nombre = prompt("Ingresar otro Nombre:");
    edad = prompt("Ingresar otra Edad:");
    if (edad >= 18){
        break;
        console.log ("Es menor de edad");
    }
 
}
*/
//WHILE
let edad = parseInt(prompt("Ingresar Edad:"));

while (edad < 18){
    alert ("Sos menor de edad, Tu edad es: " + edad);
    edad = prompt("Ingresar Edad: ")
    console.log ("Menor de edad")
    if (edad >= 18){
        break;
        console.log ("Mayor de edad")
    }
 
}

