let persona = {nombre :"Paco", edad:10,ciudad:"Palmira", profesion:"NA"}

let llaves = Object.keys(persona);
for (let i=0; i < llaves.length; i++) {
  let llave = llaves[i];
  console.log(llave);
}

function presentacion (persona){
    return persona.nombre + " " + persona.edad +" " + persona.ciudad;  
}

let mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies=["Leer", "Dibujar", "Musica"];
console.log (persona.hobbies);

for (let i=0; i < persona.hobbies.length; i++) {
  console.log(persona.hobbies[i]);
}