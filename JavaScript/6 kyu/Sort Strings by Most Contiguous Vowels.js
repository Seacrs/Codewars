// The goal of this Kata is to write a function that will receive an array of 
// strings as its single argument, then the strings are each processed and 
// sorted (in desending order) based on the length of the single longest 
// sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained 
// within the string. The strings may contain letters, numbers, special 
// characters, uppercase, lowercase, whitespace, and there may be (often 
// will be) multiple sub-strings of contiguous vowels. We are only 
// interested in the single longest sub-string of vowels within each string, 
// in the input array.

// Example:

// str1 = "what a beautiful day today"
// str2 = "it's okay, but very breezy"

// When the strings are sorted, str1 will be first as its longest sub-string 
// of contiguous vowels "eau" is of length 3, while str2 has as its 
// longest sub-string of contiguous vowels "ee", which is of length 2.

// If two or more strings in the array have maximum sub-strings of the 
// same length, then the strings should remain in the order in which they 
// were found in the orginal array.

function sortStringsByVowels(strings){
    const obj = {};
    let vowels = 'aeiou';

    for(let word of strings){
        let g = 0
        let c = 0;
    
        for(let i = 0; i< word.length; i++){
            if(!vowels.includes(word[i].toLowerCase())) c = 0;
        
            if(vowels.includes(word[i].toLowerCase())){
                c++
            }
            if(c > g) g = c
        }
    
        obj[word] = (obj[word] || 0) + g
    }

    return Object.entries(obj).sort((a,b) => b[1] - a[1]).map(word => word[0])
}