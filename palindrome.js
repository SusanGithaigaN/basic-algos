// Declare a function palindrome and pass the parameter word(user input)
function palindrome(word){
    // remove non alpphanumeric characters from user input using regex
    // regex: zA-Z0-9]/g; match anything that is not a letter or a digit
    const nonAlphanumericInput = word.replace(/[^a-zA-Z0-9]/g, '');
    // lowecase user input
    const lowercaseWord=nonAlphanumericInput.toLowerCase();
    // check if lowercase word is the same when reversed
    return lowercaseWord === lowercaseWord.split('').reverse().join('');
}

// Call prompt-sync in order to get the actual prompting function.
const prompt = require("prompt-sync")();

function isPalindrome(){
    // prompt user to input data
    const userInput = prompt("Enter a word: ");

    // check if it's a palindrome
    if (palindrome(userInput)){
        console.log(`${userInput} is a palindrome`);
    }else{
        const reversedInput = userInput.split('').reverse().join('');
        console.log(reversedInput)
    }
}

isPalindrome()

