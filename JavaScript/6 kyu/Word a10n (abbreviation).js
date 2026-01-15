// The word i18n is a common abbreviation of internationalization 
// in the developer community, used instead of typing the whole word 
// and trying to spell it correctly.Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words"(see below) 
// within that string of length 4 or greater into an abbreviation, following these rules:

//     A "word" is a sequence of alphabetical characters.By this 
//     definition, any other character like a space or hyphen(eg. 
//     "elephant-ride") will split up a series of letters into two words(eg. "elephant" and "ride").

//     The abbreviated version of the word should have the first letter, 
//     then the number of removed characters, then the last letter(eg. 
//     "elephant ride" => "e6t r2e").

// Example

// input: "elephant-rides are really fun!"
//     ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
//     words(^): "elephant" "rides" "are" "really" "fun"
// 123456     123     1     1234     1
//  ignore short words:               X              X

// abbreviate: "e6t"     "r3s"  "are"  "r4y"   "fun"
//  all non - word characters(*) remain in place
// "-"      " "    " "     " "     "!"
// output: "e6t-r3s are r4y fun!"


function abbreviate(string) {
    const arr = []
    for (let i = 0; i < string.length; i++) {
        let isWord = true
        let char = "";
        let words = [];

        while (isWord && i < string.length) {
            let letter = string[i]
            if (/[^a-zA-Z]/.test(letter)) {
                char = letter;
                isWord = false
                break
            }
            words.push(letter)
            i++
        }

        if (words.length > 0) {
            if (words.length < 4) arr.push(words.join(''))
            else {
                let result = words[0] + (words.length - 2) + words[words.length - 1]
                arr.push(result)
            }
        }
        if (char) arr.push(char)
    }
    return arr.join('');
}