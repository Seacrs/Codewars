// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input 
// numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
    let big = a.length >= b.length ? a.split("").reverse() : b.split("").reverse();
    let small = a.length < b.length ? a.split("").reverse() : b.split("").reverse();
    
    let carry = 0;
    let total = [];
    
    for(let i = 0; i < big.length; i++){
        let sum = +big[i] + (small[i] ? +small[i] : 0) + carry;
        if(sum > 9){
            let [first, second] = String(sum).split("");
            total.push(second);
            carry = +first;
        }
        else{
            total.push(sum+"");
            carry = 0;
        }
    }
    
    if(carry) total.push(carry+"");
    
    return total.reverse().join("");
}