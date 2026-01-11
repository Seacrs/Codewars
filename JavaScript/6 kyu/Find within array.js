// We'll create a function that takes in two parameters:

//     a sequence (length and types of items are irrelevant)
//     a function (value, index) that will be called on members of the
//         sequence and their index. The function will return either true or false.

// Your function will iterate through the members of the sequence in
// order until the provided function returns true; at which point your
// function will return that item's index.

// If the function given returns false for all members of the sequence, your function should return -1.

function findInArray(array, iterator) {
    if(array.length === 0) return -1;
    for(let i=0; i < array.length; i++){
        let r = iterator(array[i], i);
        if(r === true) return i;
        if(i === array.length - 1) return -1;
    }
};