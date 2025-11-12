// An isogram (also known as a "nonpattern word") is a logological term
// for a word or phrase without a repeating letter. It is also used by some
// to mean a word or phrase in which each letter appears the same
// number of times, not necessarily just once.

// You task is to write a method isogram? that takes a string argument
//  and returns true if the string has the properties of being an isogram
//   and false otherwise. Anything that is not a string is not an isogram (ints, nils, etc.)

// Properties:

// must be a string
// cannot be nil or empty
// each letter appears the same number of times (not necessarily just once)
// letter case is not important (= case insensitive)
// non-letter characters (e.g. hyphens) should be ignored

function isIsogram(str) {
    if(!str || typeof(str) !== 'string') return false;

    let count = [];
    str.split('').forEach(x=>{
        let c = 0;
        if(!/[A-Za-z]/.test(x)) return;
        str.split('').forEach( el => {
            if(/[A-Za-z]/.test(el)){
                if(el.toLowerCase() === x.toLowerCase()){
                    c++;
                }
            }
        })
        count.push(c);
    })

    if(count.length === 0) return false;
    let first = count[0];
    if(count.every(x => x === first)) return true;
    return false;
}