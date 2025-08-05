// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


function incrementString (strng) {
  // return incrementedString
  let arr = strng.split('');
  let bool = arr.map(x=>Number(x)).every(x => isNaN(x));
  if(bool){
    arr.push('1');
    return arr.join('');
  }
  else{
    let arr = strng.split('');
    let string = arr.map(x => Number(x)).map(x=> String(x)).lastIndexOf('NaN');
    let values = arr.slice(string + 1);
    let result = Number(values.join('')) + 1;
    const add = result.toString().padStart(values.length, '0')
    let express = arr.slice(0, string+1);
    express.push(add);
    return express.join('')
  }
}