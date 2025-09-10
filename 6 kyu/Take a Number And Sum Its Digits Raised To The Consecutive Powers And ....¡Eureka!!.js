// The number 89 is the first integer with more than one digit that fulfills
// the property partially introduced in the title of this kata. What's the
// use of saying "Eureka"? 
 

// Task
// We need a function to collect these numbers, that may receive two 
// integers a, b that defines the range [a,b] (inclusive) and outputs a list 
// of the sorted numbers in the range that fulfills the property described 
// above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a,b], the function 
// should output an empty list.

// 90, 100 --> []
// Enjoy it!!



function sumDigPow(a, b) {
  // Your code here
  const numbers = [];

  for(let i = a; i<b ; i++){
    numbers.push(i);
  }

  let isDisarium = [];

  for(let number of numbers){
        let arr = String(number).split('');
        let result = 0;

        for(let i=0; i<arr.length; i++){
            result += Math.pow(Number(arr[i]),i+1);
        }

        if (result === number) {
            isDisarium.push(number);
        }
  }
  return isDisarium;
}
