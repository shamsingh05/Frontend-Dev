// console.log(score);//accessed before initialization and declare with var -> udefined
// announce(); //yes -> can be called before initailization
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() {
// console.log(status);
// }

//code with arrow function

console.log(score);
var score = 50;
const announce = () => { console.log("Game started"); }
announce();
let status = "ready";
const startGame = () => {
console.log(status);
}
startGame();
