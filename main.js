"use strict";
let a = 10;
let b = 20;
//          true       true    = true
console.log(a >= 10 && b <= 20);
let haveDegree = "Yes";
let haveJob = "No";
//           true         false   = true
console.log(haveDegree || haveJob);
let yourMonthlyExpanse = 20000;
let result = !(yourMonthlyExpanse > 30000);
console.log(result);
