function max(numbers)
{

    if (numbers.length === 0) return "undefined";

    let maximo = numbers[0];

    for (let i = 1; i<numbers.length; i++) 
    {
      if ( maximo <= numbers[i])
      {maximo = numbers[i]; }          
   
    }
    return maximo;
}



console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined