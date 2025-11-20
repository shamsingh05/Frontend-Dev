

function outer() {
  console.log(count); 
  var count = 5;

  function inner() {
    console.log(count);
    var count = 10;
  }

  inner();
}
outer(); 

//1.outer is called ->
// 2.console count -> not called before intilization -> stored with undefined in memory creation phase
// 3.var count inside inner also hoists to that scope.

// ach function has its own separate hoisted count variable.
// So both prints show the outer and inner count before assignment.


// count is declared inside the function, but hoisting changes when that declaration becomes active, and that’s exactly why you see undefined.



