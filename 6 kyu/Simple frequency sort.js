// In this kata, you will sort elements in an array by decreasing frequency
// of elements. If two elements have the same frequency, sort them by
// increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.

// More examples in test cases.

// Good luck!

function solve(arr){
    let count = [];

    for(let num of arr){
        let c = 0;
        for(let number of arr){
            if(num === number){
                c++;
            }
        }
        count.push([num, c]);
    }

    const sort =count.sort((a,b) =>{
        if(b[1] === a[1]) return a[0] - b[0];
        return b[1] - a[1];
    })

    return sort.map(x=>x[0]);
}