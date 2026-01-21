// Acknowledgments:

// I thank yvonne - liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the 
// Decipher this! kata.Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
//     The first letter must be converted to its ASCII code.
//     The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

const encryptThis = (text) => {
    // Implement me! :)
    return text.split(" ").map(word => {
        if (word.length === 1) return word[0].charCodeAt()
        if (word.length === 2) return word[0].charCodeAt() + word[1]
        return word[0].charCodeAt() + word.at(-1) + word.slice(2, -1) + word.at(1)
    }).join(" ")
}