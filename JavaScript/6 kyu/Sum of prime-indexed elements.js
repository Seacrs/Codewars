// In this Kata, you will be given an integer array and your task is 
// to return the sum of elements occupying prime-numbered indices.

// The first element of the array is at index 0.

// Good luck!

function isPrime(number) {
    if(number < 2) return false;
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0) return false;
    }
    return true;
}

function total(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        if(isPrime(i)) sum += arr[i]
    }
    return sum;
}