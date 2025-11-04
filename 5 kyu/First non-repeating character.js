// Write a function named first_non_repeating_letter† that takes 
// a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the 
// letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, 
// but the function should return the correct case for the initial letter. For example, 
// the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, 
// but your function should handle any Unicode character.

function firstNonRepeatingLetter(s) {
  // Add your code here
  let valid = [];

  for(let i = 0; i<s.length; i++){
    let isUnique = true;
    for(let j = 0; j < s.length; j++ ){
      if(i !== j && s[i] === s[j]) {
        isUnique = false;
      }
    }
    valid.push(isUnique);
  }

  if(valid.every(x => x === false)) return "";

  let count = [];
  
  s.split("").forEach(x =>{
    let num = 0;
    s.split("").forEach( el =>el.toLowerCase() === x.toLowerCase() ? num++ : 0)
    if(!count.includes(num)){
    count.push(num);
    }
  });

  let arr = [];

  s.split("").forEach(x => {
    let num = 0;
    s.split("").forEach(el=>el.toLowerCase() === x.toLowerCase() ? num++ : 0)
    if(num === Math.min(...count) && !arr.includes(x)){
      arr.push(x);
    }
  });
  
  return arr[0];
}