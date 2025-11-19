

let secretNumber = Math.floor(Math.random() * 50) + 1;  
let userGuess = 22;  // test value

console.log("Secret Number:", secretNumber);
console.log("Your Guess:", userGuess);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} 
else {
    // Nested conditions
    if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
        console.log("Very close!");
    } 
    else {
        if (userGuess > secretNumber) {
            console.log("Too high");
        } 
        else {
            console.log("Too low");
        }
    }
}
