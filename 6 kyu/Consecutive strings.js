function longestConsec(strarr, k) {
    // your code
    let n = strarr.length;
    if( n === 0 || k > n || k <= 0) return "";
    if(k<2){
    let arr = [];
    for(let i = 0; i<strarr.length; i++){
      let count = strarr[i].length;
      arr.push(count);
    }
    let highest = Math.max(...arr);
    return strarr.find( x => x.length === highest);
    }
    else{
      let arr = [];
      let newArr = [];
      for(let i=0;i<=strarr.length - k; i++){
        let count = 1;
        let string = strarr[i];
        while(count < k){
          string+=strarr[count+i];
          count++;
        }
        arr.push(string);
      }
        for(let i = 0; i<arr.length; i++){
          let count = arr[i].length;
          newArr.push(count);
        }
      let highest = Math.max(...newArr);
      return arr.find(x => x.length === highest);
    }
}