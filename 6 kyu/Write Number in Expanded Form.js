// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in 
// Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  // Your code here
  let arr = String(num).split('');
  let expanded =[];
  for(let i = 0; i<arr.length; i++){
    let count = 0;
    let str =arr[i];
    while(count < (arr.length - (1+i) )){
      str += '0';
      count++
    }
    expanded.push(str);
  }
return expanded.map(Number).filter(x => x !== 0).map(String).join(' + ');
}
