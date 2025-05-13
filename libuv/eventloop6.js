const fs = require("fs");

const a = 100;

Promise.resolve().then(() => console.log("Promise 1"));

setImmediate(() => console.log("Set Immediate"));

setTimeout(() => console.log("Set Time Out"),0);

fs.readFile("./file.txt", "utf-8", (err, data) => console.log("File reading"));

Promise.resolve().then(() => console.log("Promise 2"));

function display()
{
    console.log("The value of a is ", a);
}

display(a);

console.log("Last line executed successfully");