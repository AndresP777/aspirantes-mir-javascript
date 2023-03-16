let receta = {}
receta.nombre = "sandwitch";
receta.ingredientes = [];

let ingrediente1 = {nombre: "Pan", cantidad: 2};
receta.ingredientes.push(ingrediente1);

let ingrediente2 = {nombre:"Queso", cantidad: 1};
receta.ingredientes.push(ingrediente2);

console.log(receta.ingredientes[0].nombre); 
console.log(receta.ingredientes[0].cantidad+receta.ingredientes[1].cantidad);
