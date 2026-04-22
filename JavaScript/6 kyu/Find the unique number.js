// Complete the function which returns the only unique number from an 
// array.

// All numbers in the unsorted array are present twice, except the one 
// you have to find. The numbers are always valid integer values between 
// 1 and 2147483647, so no need for type and error checking. The array 
// contains at least one number and may contain millions of numbers. So 
// make sure your solution is optimized for speed.

// Example
// [ 1, 8, 4, 4, 6, 1, 8 ]  -->  6

function findUnique(numbers) {
    // Return the unique number
  const counts = {};
  for(let i = 0; i < numbers.length; i++){
    counts[numbers[i]] = (counts[numbers[i]] || 0) + 1;
  }
  for(let key in counts){
    if(counts[key] === 1){
      return +key;
    }
  }
}
