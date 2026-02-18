// Consider the prime number 23. If we sum the square of its digits we 
// get: 2^2 + 3^2 = 13, then for 13: 1^2 + 3^2 = 10, and finally for 
// 10: 1^2 + 0^2 = 1.

// Similarly, if we start with prime number 7, the sequence is: 
// 7->49->97->130->10->1.

// Given a range, how many primes within that range will eventually end 
// up being 1?

// The upperbound for the range is 50,000. A range of (2,25) means 
// that: 2 <= n < 25.

// Good luck!

function isPrime(number) {
    if(number < 2) return false;
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0) return false;
    }
    return true;
}

function squareDigits(n) {
  return String(n).split('').map(d => d ** 2).reduce((acc, curV)=> acc + curV);
}

function solve(a, b) {
    let count = 0
    
    for(let i = a; i < b; i++){
        if(!isPrime(i)) continue;

        let res = i;
        let s = new Set();

        while(res !== 1 && !s.has(res)){
            s.add(res)
            res = squareDigits(res)
        }

        if(res === 1) count++
    }

    return count
}