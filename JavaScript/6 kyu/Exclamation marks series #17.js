// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"


function balance(left, right) {
  //coding and coding....
  let leftCount = 0;
  let rightCount = 0;
    for(let i = 0; i<left.length; i++){
      if(left[i] === '!') leftCount+=2;
      if(left[i] === '?') leftCount+=3;
    }
  for(let i = 0; i<right.length; i++){
      if(right[i] === '!') rightCount+=2;
      if(right[i] === '?') rightCount+=3;
    }
  if(leftCount > rightCount) return 'Left';
  else if(rightCount > leftCount) return 'Right';
  else return 'Balance';
}
