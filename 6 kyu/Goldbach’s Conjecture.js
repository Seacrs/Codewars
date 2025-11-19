// German mathematician Christian Goldbach (1690-1764) conjectured
// that every even number greater than 2 can be represented by the sum
// of two prime numbers. For example, 10 can be represented as 3+7 or 5+5.

// Your job is to make the function return a list containing all unique
// possible representations of n in an increasing order if n is an even
// integer; if n is odd, return an empty list. Hence, the first addend must 
// always be less than or equal to the second to avoid duplicates.

// Constraints : 3 ≤ n ≤ 32000

function goldbachPartitions(n){
  //your code here
    if(n % 2 !== 0) return [];
    let prime = [];
    for(let i = 2; i <= n; i++){
        let isPrime = true;
        for(let j = 2; j <= Math.sqrt(i) ; j++){
            if(i % j === 0) isPrime = false;
        }
        if(isPrime === true) prime.push(i);
    }
    let r = [];
    for(let i = 0; i < prime.length; i++){
        for(let j = 0; j < prime.length; j++){
            if(prime[i] + prime[j] === n) {
                const pair = [Math.min(prime[i], prime[j]), Math.max(prime[i], prime[j])].toString();
                if(!r.includes(pair)){
                    r.push(pair);
                }
            }
        }
    }
    return r.map(x=> x.split(",").join("+"));
}