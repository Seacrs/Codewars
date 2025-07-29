function createPhoneNumber(numbers){
  let first = numbers.splice(0,3);
  let second = numbers.splice(0,3);
  let third = numbers.splice(0,4);

  return `(${first.join('')}) ${second.join('')}-${third.join('')}`;
}