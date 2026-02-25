// You are given two positive integers a and b (a < b <= 20000). 
// Complete the function which returns a list of all those numbers in 
// the interval [a, b) whose digits are made up of prime numbers 
// (2, 3, 5, 7) but which are not primes themselves.

// Be careful about your timing!

// Good luck :)

const isPrime = (num) =>{
    if (num < 2) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;
    for (let i = 3; i*i <= num; i+=2) {
        if (num % i === 0) return false;
    }
    return true;
}

const notPrimes = (a,b) =>{
    const nPrimes = [];
    for(let i = Math.max(a, 11); i < b; i++){
        if(!isPrime(i)){
            [...String(i)].every(el => isPrime(+el)) ? nPrimes.push(i): 0;
        }
    }
    return nPrimes
}