function inter(s1, s2){
  // ...
  const arr1 = [...s1];
  const arr2 = [...s2];
  let newArr = [];
  for(let i =0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
      if(arr1[i] === arr2[j]) newArr.push(arr2[j]);
    }
  }
  return new Set([...newArr]);
}