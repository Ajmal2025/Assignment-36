"use strict";
// 36.	T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
let T_shirt = function (size, message) {
    return `${message} size no ${size}`;
};
// function call 
console.log(T_shirt(20, "JUST DO  IT, Body shirt"));
