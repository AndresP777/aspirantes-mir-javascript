function join(numbers) {
    let cadena="";
    for (let i = 0; i < numbers.length; i++) {

        cadena += numbers[i] + " ";
    }

    return cadena;
}

console.log(join([1, 2, 3])) // 1 2 3
console.log(join([10, 8, 12, 5])) // 10 8 12 5
console.log(join([1, 1, 1])) // 1 1 1 