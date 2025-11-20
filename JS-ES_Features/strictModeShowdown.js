// //original code
// function demo(a, a) {
//   total = 10;
//   delete total;
// }
// demo(5, 10);

// with strict
// "use strict";
// function demo(a, a) {
//   total = 10;
//   delete total;
// }
// demo(5, 10);


// without strict
// function demo(a, a) {
//   total = 10;      // becomes an accidental global variable
//   delete total;    // will return false (cannot delete)
// }
// demo(5, 10);

