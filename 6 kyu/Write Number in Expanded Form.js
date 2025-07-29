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
