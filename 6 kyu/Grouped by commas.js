// Finish the solution so that it takes an input n (integer) and returns a 
// string that is the decimal representation of the number grouped by commas after every 3 digits.

// Assume: 0 <= n <= 2147483647

// Examples
//        1  ->           "1"
//       10  ->          "10"
//      100  ->         "100"
//     1000  ->       "1,000"
//    10000  ->      "10,000"
//   100000  ->     "100,000"
//  1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"

function groupByCommas(n) {
    const s = String(n);
    if(s.length < 4) return s;
    let arr = [...s].reverse();
    let r = [];
    let i = 0;
    while(r.length < arr.length){
        r.push(arr.slice(i, i+3))
        i+=3;
    }
    return r.map(x => x.reverse()).reverse().filter(x => x.length !== 0).map(x => x.join("")).join(",");
}