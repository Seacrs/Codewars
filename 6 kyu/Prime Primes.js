// Define a "prime prime" number to be a rational number written as one 
// prime number over another prime number: primeA / primeB (e.g. 7/31)

// Given a whole number N / n, generate the number of "prime prime" rational 
// numbers less than 1, using only prime numbers between 0 and N / n(non inclusive).

// Return the count of these "prime primes", and the integer part of their sum.

// Example
// N = 6

// // The "prime primes" less than 1 are:
// 2/3, 2/5, 3/5               // count: 3

// 2/3 + 2/5 + 3/5 = 1.6667    // integer part: 1

// Thus, the function should return [3, 1].

const isPrime = num =>{
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

const primePrimes = n => {
    const primes = [];
    for(let i = 0; i < n; i++){
        if(isPrime(i)) primes.push(i);
    }
    const ratios = [];
    for(let i = 0; i < primes.length; i++){
        for(let j = i + 1; j < primes.length; j++){
        ratios.push(primes[i]/primes[j])
        }
    }
    const sum = Math.floor(ratios.reduce((acc, curV)=> acc + curV, 0));
    return [ratios.length, sum];
};