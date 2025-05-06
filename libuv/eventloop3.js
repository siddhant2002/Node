const fs = require("fs");

const a = 100;

setImmediate(() => console.log("set Immediate 1"));

Promise.resolve().then(() => console.log("Promise resolved 1"));

setTimeout(() => {
    console.log("Set Timeout 1");
}, 0);


fs.readFile("./file.txt", "utf-8", (err, data) => {
    setTimeout(() => {
        console.log("Set Timeout 2");
    }, 0);

    process.nextTick(() => console.log("Process Tick 2"));

    setImmediate(() => console.log("Set Immediate 2"));

    console.log("Last line of the async function");
});

process.nextTick(() => console.log("Process Tick 1"));

function display()
{
    console.log("The value of a is ", a);
}

display(a);

console.log("The last line of the code");