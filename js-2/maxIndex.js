function maxIndex(numbers)
{
    if (numbers.length === 0) return "-1";

    let maximo = numbers[0];
    let indexmax = 0;

    for (let i = 1; i<numbers.length; i++) 
    {
      if ( maximo <= numbers[i])
      {maximo = numbers[i];
       indexmax = i;  }    

        
    }
    return indexmax;  
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1