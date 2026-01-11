// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
   let splited = [];
   for(let i=0;i<str.length; i++){
    splited.push([str[i],str[i+1]]);
    i++;
   }
   let arr = splited.map(x=> x.filter(el => el !== undefined));
   for(let i=0 ;i<arr.length;i++){
    if(arr[i].length === 1){
        arr[i].push('_');
    }
   }
   return arr.map(x=>x.join(''));
}