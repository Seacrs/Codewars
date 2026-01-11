// Sentence Calculator
// Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

// 1. Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
// 2. Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
// 3. Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
// 4. Other characters: 0 value

// Note: input will always be a string


function lettersToNumbers(s) {
  // your code......
  const lower = {
    'a': 1,'b': 2,'c': 3,'d': 4,'e': 5,'f':6,'g':7,'h':8,'i':9,'j':10,'k':11,'l':12,'m':13,'n':14,'o':15,'p':16,'q':17,'r':18,'s':19,'t':20,'u':21,'v':22,'w':23,'x':24,'y':25,'z':26}
  let sum = 0;
  let keys = Object.keys(lower);
  let values = Object.values(lower);
  for(let i =0 ;i<s.length;i++){
    for(let j=0; j<keys.length; j++){
      if(s[i] === keys[j]) sum+=values[j];
      if(s[i] === keys[j].toUpperCase()) sum+=(values[j]*2);
    }
    if(!isNaN(Number(s[i]))) {sum+=Number(s[i]);}
  }
  return sum;
}