function toCamelCase(str){
  const words = str.split(/[-/_]/);
  let arr = [];
  for(let word of words){
    if(word === words[0]) {
      arr.push(word);
      continue;}
    let firstLetter = word.slice(0,1).toUpperCase() + word.slice(1);
    arr.push(firstLetter);
  }
  return arr.join('');
}