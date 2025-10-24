// Write a function that flattens an Array of Array objects into a flat 
// Array. Your function must only do one level of flattening.



// Version 1
function flatten(array) {
    let newArr = [];
    array.forEach(el=>{
        if(Array.isArray(el)){
            newArr.push(...el);
        }
        else{
            newArr.push(el);
        }
    });
    return newArr;
}
// version 2
const flatten = (array) => array.flat();