// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count(string) {
  // TODO
 let obj = {};
  if(string.length === 0) return {};
  for(let i=0;i<string.length; i++){
    let count = 0;
    for(let j = 0; j<string.length; j++){
        if(string[i] === string[j]) count++;
    }
    if(!(string[i] in obj)){
        Object.assign(obj, {[string[i]] : count});
    }
  }
  return obj;
}