// A natural number is called k-prime if it has exactly k prime factors, 
// counted with multiplicity. A natural number is thus prime if and only if it is 1-prime.

// Examples:
// k = 2 -> 4, 6, 9, 10, 14, 15, 21, 22, …
// k = 3 -> 8, 12, 18, 20, 27, 28, 30, …
// k = 5 -> 32, 48, 72, 80, 108, 112, …
// Task:
// Given an integer k and a list arr of positive integers the function 
// consec_kprimes (or its variants in other languages) returns how 
// many times in the sequence arr numbers come up twice in a row 
// with exactly k prime factors?

// Examples:

// arr = [10005, 10030, 10026, 10008, 10016, 10028, 10004]
// consec_kprimes(4, arr) => 3 because 10005 and 10030 are consecutive 4-primes, 10030 and 10026 
// too as well as 10028 and 10004 but 10008 and 10016 are 6-primes.

// consec_kprimes(4, [10175, 10185, 10180, 10197]) => 3 because 10175-10185 and 10185- 10180 and 10180-10197 
// are all consecutive 4-primes.

export function isPrime(num: number): boolean {
    if (num < 2) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;
    const limit = Math.sqrt(num);
    for (let i = 3; i <= limit; i+=2) {
        if (num % i === 0) return false;
    }
    return true;
}

export const primeGenerator = (n: number): number[] =>{
    const primes: number[] = []
    const limit = Math.floor(Math.sqrt(n));

    for(let i = 2; i <= limit; i++){
        if(isPrime(i)) primes.push(i)
    }
    return primes;
}

export const countPrimes = (n: number): number => {
    const primes: number[] = primeGenerator(n);
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

export function consecKprimes(k: number, arr: number[]): number {
    const counts = arr.map(n => countPrimes(n))
    let res = 0;
    for(let i = 0; i < counts.length - 1; i++){
        if(counts[i] === k && counts[i+1] === k) res++
    }
    return res;
}