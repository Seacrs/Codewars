// Backwards - read - primes are primes that when read backwards in base
// 10(from right to left) are a different prime. (This rules out primes which are palindromes.)

// Examples:

// 13 17 31 37 71 73

// 13 is such because it's prime and read from right to left writes 31
// which is prime too. Same for the others.

// Task

// Find all Backwards - read - primes between two positive given numbers
// (both inclusive), the second one always being greater than or equal to
// the first one.The resulting array or the resulting string will be ordered
// following the natural order of the prime numbers.

// Examples(in general form):

// (start = 2, end = 100) => [13, 17, 31, 37, 71, 73, 79, 97]
//     (start = 9900, end = 10000) => [9923, 9931, 9941, 9967]
//         (start = 501, end = 599) => []

// See "Sample Tests" for your language.

// Notes

//     Forth: Return only the first backwards - read prime between start
//     and end or 0 if you don't find any
//     Ruby: Don't use the Prime class, it's disabled.


export function isPrime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

export function backwardsPrime(start: number, stop: number): number[] {
    const prime: number[] = [];

    for (let i = start; i <= stop; i++) {
        if (!isPrime(i)) continue;

        const reversedNum: number = Number(String(i).split('').reverse().join(''))

        if (reversedNum !== i && isPrime(reversedNum)) prime.push(i)
    }

    return prime
}