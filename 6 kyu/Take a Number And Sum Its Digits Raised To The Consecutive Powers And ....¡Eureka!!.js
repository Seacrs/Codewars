function sumDigPow(a, b) {
  // Your code here
  const numbers = [];

  for(let i = a; i<b ; i++){
    numbers.push(i);
  }

  let isDisarium = [];

  for(let number of numbers){
        let arr = String(number).split('');
        let result = 0;

        for(let i=0; i<arr.length; i++){
            result += Math.pow(Number(arr[i]),i+1);
        }

        if (result === number) {
            isDisarium.push(number);
        }
  }
  return isDisarium;
}