// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

function findMissingLetter(array){
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const nFirst = alphabet.findIndex((x,i) => x===array[0].toLowerCase());
  const nLast = alphabet.findIndex((x,i) => x===array[array.length-1].toLowerCase());
  const arr = alphabet.slice(nFirst,nLast);
  if(array.every(x=>x === x.toUpperCase())){
    const mLetter = arr.filter(x=> !array.includes(x.toUpperCase())).join('');
    return mLetter.toUpperCase();
  }
  const mLetter = arr.filter(x=> !array.includes(x)).join('');
  return mLetter;
}