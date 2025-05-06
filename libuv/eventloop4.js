const fs = require("fs");

const a = 100;

setImmediate(() => console.log("Set Immediate"));

Promise.resolve().then(() => console.log("Promise resolved"));

setTimeout(() => {
    console.log("Set Timeout");
}, 0);

process.nextTick(() => {
    process.nextTick(() => console.log("Process Tick Out"));

    console.log("Inside nextTick");
})

function display()
{
    console.log("The value of a is ", a);
}

display(a);

console.log("The last of the line executed");