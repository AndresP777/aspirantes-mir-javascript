function suma (num){
    var suma1, i
    suma1=0
    for (let i = 1; i <= num; i++) {
        suma1 = suma1 + i;
        }
        return suma1
}

console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(10)) // 55
console.log(suma(15)) // 120