deriv(list("*", list("*", "x", "y"), list("+", "x", 4)), "x");
// [ "+",
//   [["*", [["*", ["x", ["y", null]]], 
//           [["+", [1, [0, null]]], null]]],
//    [["*",
//      [["+",
//        [["*", ["x", [0, null]]], 
//         [["*", [1, ["y", null]]], null]]],
//         [["+", ["x", [4, null]]], null] ] ],
//     null ]]]