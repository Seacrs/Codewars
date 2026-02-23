// In this kata, you need to implement three functions that take an 
// integer n and return its prime factorization in different formats.

// Function 1: Get All Prime Factors
// Write a function that returns an array containing its prime 
// decomposition in ascending order. If a factor appears multiple times 
// in the decomposition, it should appear as many times in the result.

// Example: For n = 100, return [2, 2, 5, 5] in this order

// Function 2: Get Unique Prime Factors With Count
// Write a function that returns an array containing two arrays:

// The first contains the unique prime factors appearing in the decomposition (in ascending order)
// The second contains their respective powers 
// (same order as their corresponding prime factors)

// Example: For n = 100, return [[2, 5], [2, 2]]

// Function 3: Get Unique Prime Factors With Products 
// / Get Prime Factor Potencies (if Java)
// Write a function that returns an array containing each prime factor 
// raised to its respective power. The results should be ordered 
// according to their prime factors in ascending order.

// Example: For n = 100, return [4, 25] (2² = 4, 5² = 25)

// Invalid Value Handling
// If:

// n is not a number
// n not an integer
// n is negative or 0
// The three functions should respectively return [], [[],[]] and [].

// Edge cases
// if n = 0, the functions should respectively return [], [[],[]] and [].
// if n = 1, the functions should respectively return [1], [[1],[1]], [1].
// if n = 2, the functions should respectively return [2], [[2],[1]], [2].

// Note: The result for n = 2 follows standard prime factorization. 
// The result for n = 1 is arbitrary and has been chosen to return a 
// useful result. The result for n = 0 is also arbitrary but cannot be 
// both useful and intuitive ([[0], [0]] would be meaningful but 
// won't work for general decomposition use; [[0], [1]] would work but is not intuitive).

function getAllPrimeFactors(n) {
    if(!Number.isInteger(n) || n < 1) return [];
    if(n === 1) return [1];
    if(n === 2) return [2];
    const arr = [];
    while(n % 2 === 0){
        arr.push(2);
        n/=2;
    }
    let div = 3;
    while(div * div <= n){
        while(n%div === 0){
            arr.push(div);
            n/=div;
        }
        div+=2;
    }
    if(n > 1) arr.push(n);
    return arr;
}

function getUniquePrimeFactorsWithCount(n) {
    if(!n || n === 0) return [[], []];
    if(n === 1) return [[1],[1]];
    if(n === 2) return [[2], [1]];
    const pf = getAllPrimeFactors(n);
    let count = {};
    for(let i = 0; i< pf.length; i++){
        count[pf[i]] = (count[pf[i]] || 0) + 1;
    }
    return [ Object.keys(count).map(Number), Object.values(count)];
}

function getUniquePrimeFactorsWithProducts(n) {
    if(!n || n === 0) return [];
    if(n === 1) return [1];
    if(n === 2) return [2];
    const upf = getUniquePrimeFactorsWithCount(n);
    const [primes, powers] = upf;
    let r = [];
    for(let i = 0; i < primes.length; i++){
        r.push(Math.pow(primes[i], powers[i]));
    }
    return r;
}