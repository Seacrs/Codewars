// We need prime numbers and we need them now!

// Write a method that takes a maximum bound and returns all primes up 
// to and including the maximum bound.

// For example,

// 11 => [2, 3, 5, 7, 11]

function prime(num) {
  // Generate an array containing every prime number between 0 and the num specified (inclusive)
    let prime = [];
    for(let i = 2; i <= num; i++){
        let isPrime = true;
        for(let j = 2; j <= Math.sqrt(i) ; j++){
            if(i % j === 0) isPrime = false;
        }
        if(isPrime === true) prime.push(i);
    }
    return prime;
}