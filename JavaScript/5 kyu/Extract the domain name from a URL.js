// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  //your code here
  let arr =url.split(/[./:]/);
  if(!arr.includes('http') && !arr.includes('https') && !arr.includes('www')) {return arr[0];}
  let newArr = [];
  for(let letter of arr){
    if(letter === '') continue;
    if(letter !== 'http' && letter != 'www' && letter != 'https') newArr.push(letter);
  }
  return newArr[0];
}