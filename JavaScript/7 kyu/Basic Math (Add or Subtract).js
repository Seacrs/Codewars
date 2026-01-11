function calculate(str) {
//your code here...
  const expression = str.replace(/plus/g, '+').replace(/minus/g,'-').split(/(?=[+-])|(?<=[+-])/); //replace and look behind + and -
  let result = 0;
  result+=Number(expression[0])
   for(let i =0 ; i < expression.length; i++){    
    if(expression[i] === '+'){ 
      result+=Number(expression[i+1]);
    }
    if(expression[i] === '-'){
      result-=Number(expression[i+1]);
    }
   }
  return String(result);
}