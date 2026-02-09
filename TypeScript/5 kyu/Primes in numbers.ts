// Given a positive number n > 1 find the prime factor decomposition of n. 
// The result will be a string with the following form :

//     "(p1**n1)(p2**n2)...(pk**nk)"

// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

export const primeFactors = (n:number) => {
  // your code
    const factors = [];
    let d = 2;
    while(n >= 2 && d <= Math.floor(Math.sqrt(n))){
        if(n % d === 0){
            factors.push(d)
            n /= d;
        }
        else d++
    }
    if(n > 1) factors.push(n)
    
    let count = 0
    let c = factors[0]
    let arr = []
    
    for(let i = 0; i < factors.length; i++){
        if(factors[i] === c) count++;
        else{
            count === 1 
            ? arr.push(`(${factors[i-1]})`) 
            : arr.push(`(${factors[i-1]}**${count})`);
            
            c = factors[i]
            count = 1;
        }
        if(i === factors.length - 1){
            count === 1 
            ?   arr.push(`(${factors[i]})`) 
            :   arr.push(`(${factors[i]}**${count})`);
        }
    }
    return arr.join("")
}