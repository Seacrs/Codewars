// Sort the given array of strings in alphabetical order, case insensitive. For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]


function sortme(names){
  const otherNames = [...names].map( (x,i) => [x.toLowerCase(), i]).sort((a,b) => a[0] < b[0] ? -1 : 1);
  return otherNames.map( x => {
    return names.find((element, index)=> element.toLowerCase()===x[0]  && index === x[1]);
  });
}