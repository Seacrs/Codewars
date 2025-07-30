// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(array){
    let arr = [];
    for(let i = 0; i<array.length; i++){
        if(array[i] === 0){
            arr.push(array[i]);
            array.splice(i,1);
            i--;
        }
    }
    for(let i = 0; i< arr.length ; i++){
        array.push(arr[i]);
    }
    return array;
}