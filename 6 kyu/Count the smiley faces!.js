function countSmileys(arr) {
  if(arr.length === 0) return 0;
  let count = 0;
  let correct = [':)',':-)',':~)',':D',';D',';-D',';~D',':-D',':~D',';~)',';)',';-)'];
  for(let i = 0; i < arr.length; i++){
    if(correct.includes(arr[i])){
        count++;
    }
  }
  return count;
}