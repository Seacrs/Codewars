// Given the string representations of two integers, return the string 
// representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters 
// besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a 
// milion digits), converting to int will not work.

function sumStrings(a,b) {
    const arr1 = [...a].reverse().map(Number);
    const arr2 = [...b].reverse().map(Number);
    
    const maxLength = Math.max(arr1.length, arr2.length);
    
    const total = [];
    let carry = 0;
    
    for(let i = 0; i < maxLength; i++){
        const sum = (arr1[i] ?? 0) + (arr2[i] ?? 0)+ carry;
        if(sum >= 10){
            carry = Math.floor(sum / 10);
            total.push(sum % 10)
        }
        else if(sum < 10){
            carry = 0;
            total.push(sum)
        }
    }
    if(carry) total.push(carry)

    total.reverse()

    while(total.length > 1 && total[0] === 0){
        total.shift()
    }

    return total.join("")
}