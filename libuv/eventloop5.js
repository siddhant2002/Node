const fs = require("fs");

const a = 100;

setImmediate(() => console.log("Set Immediate 1"));

setTimeout(() => {
    console.log("Set Timeout");
}, 0);

Promise.resolve().then(() => {
    Promise.resolve().then(() => {
        process.nextTick(() => console.log("Process Tick"));
    });

    setTimeout(() => {
        console.log("Set Timeout 2");
    }, 0);
});

function display(a)
{
    console.log("The value of a is ", a);
}

process.nextTick(() => {
    Promise.resolve().then(() => {
        process.nextTick(() => {
            Promise.resolve().then(() => console.log("Complex Promise Resolved"));

            console.log("Dsiplay 1");
        });

        console.log("Display 2");
    });

    console.log("Display 3");

    
});

display(a);

console.log("Last Line of the code");