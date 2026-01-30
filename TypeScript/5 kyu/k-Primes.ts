// A natural number is called k-prime if it has exactly k prime factors, 
// counted with multiplicity. For example:

// k = 2  -->  4, 6, 9, 10, 14, 15, 21, 22, ...
// k = 3  -->  8, 12, 18, 20, 27, 28, 30, ...
// k = 5  -->  32, 48, 72, 80, 108, 112, ...

// A natural number is thus prime if and only if it is 1-prime.

// Task:
// Complete the function count_Kprimes (or countKprimes, count-K-primes,
// kPrimes) which is given parameters k, start, end (or nd) and returns an array 
// (or a list or a string depending on the language - see "Solution" and "Sample Tests") of 
// the k-primes between start (inclusive) and end (inclusive).

// Example:
// countKprimes(5, 500, 600) --> [500, 520, 552, 567, 588, 592, 594]

// Notes:

//     The first function would have been better named: findKprimes or kPrimes :-)

//     In C some helper functions are given (see declarations in 'Solution').

//     For Go: nil slice is expected when there are no k-primes between start and end.


// Second Task: puzzle (not for Shell)

// Given a positive integer s, find the total number of solutions of the 
// equation a + b + c = s, where a is 1-prime, b is 3-prime, and c is 7-prime.

// Call this function puzzle(s).

// Examples:
// puzzle(138)  -->  1  because [2 + 8 + 128] is the only solution
// puzzle(143)  -->  2  because [3 + 12 + 128] and [7 + 8 + 128] are the solutions

export function isPrime(num: number): boolean {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    const limit = Math.sqrt(num);
    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

export const primeGenerator = (n: number): number[] => {
    const primes: number[] = []
    const limit = Math.floor(Math.sqrt(n));

    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) primes.push(i)
    }
    return primes;
}

export const countPrimes = (n: number, primes: number[]): number => {
    let count = 0;
    let r = n;

    for (let i = 0; i < primes.length; i++) {
        if (primes[i] * primes[i] > r) break;
        while (r % primes[i] === 0) {
            r = r / primes[i];
            count++;
        }
    }
    if (r > 1) count++;
    return count
}

export const countKprimes = (k: number, start: number, nd: number): number[] => {
    const primes = primeGenerator(nd);
    const result: number[] = [];
    for (let i = start; i <= nd; i++) {
        if (countPrimes(i, primes) === k) {
            result.push(i)
        }
    }
    return result;
}

export const puzzle = (s: number): number => {
    const ones: number[] = countKprimes(1, 1, s)
    const twos: number[] = countKprimes(3, 1, s)
    const sevens: number[] = countKprimes(7, 1, s)

    const sevenSet = new Set(sevens);
    let count: number = 0

    for (let a of ones) {
        if (a >= s) continue;
        for (let b of twos) {
            if (a + b >= s) continue;
            let c = s - a - b;
            if (sevenSet.has(c)) count++
        }
    }
    return count;
}