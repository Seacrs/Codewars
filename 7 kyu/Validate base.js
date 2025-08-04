// // You need to write a function that checks whether all of the digits of a 
// non-negative integer number are a part of the specified base: for 
// example, the number 17253 is valid for base-8, because this base 
// contains the digits 0, 1, 2, 3, 4, 5, 6, 7, but the number 19823 is not 
// valid for this base, because it contains the digits 9 and 8 which are not a 
// part of base-8.

function validateBase(num, base) {
  // Happy coding!
  const valid = [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0, base)];
  const arr = [...num];
  return arr.every(x=> valid.includes(x));
}