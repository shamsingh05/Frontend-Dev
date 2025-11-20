console.log(score);//accessed before initialization and declare with var -> udefined
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() {
console.log(status);
}