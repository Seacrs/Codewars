// Assume "#" is like a backspace in string. This means that string 
// "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
    return [...s].reduce((acc, curV) =>{
        if(curV === "#") acc.pop();
        else acc.push(curV);
        return acc;
    }, []).join('');
}