const fs = require("fs");

const a = 100;

setImmediate(() => console.log("set Immediate"));

Promise.resolve("Promise").then(() => console.log("Resolved"));

fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File reading");
});

setTimeout(() => {
    console.log("execute immediately");
},0);

process.nextTick(() => console.log("Process next Tick"));

function display()
{
    console.log("The value of a is ", a);
}

display(a);
console.log("Execute the program");