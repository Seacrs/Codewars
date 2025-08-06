// ROT13 is a simple letter substitution cipher that replaces a letter with 
// the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered 
// with Rot13. If there are numbers or special characters included in the 
// string, they should be returned as they are. Only letters from the 
// latin/english alphabet should be shifted, like in the original Rot13 
// "implementation".

function rot13(message){
  //your code here
  return message.split('').map(char=> {
    if(/[^a-zA-Z]/.test(char)) return char;
    if(/[A-Z]/.test(char)){
      let ascii = char.charCodeAt(0);
      return (ascii + 13) > 90 ?  String.fromCharCode(65+((ascii + 13) - 91)):String.fromCharCode((ascii + 13));
    }
    if(/[a-z]/.test(char)){
      let ascii = char.charCodeAt(0);
      return (ascii + 13)> 122? String.fromCharCode(97+((ascii + 13) - 123)) : String.fromCharCode((ascii + 13));
    }}).join('');
}