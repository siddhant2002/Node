const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File reading done");
});

setTimeout(() => console.log("Execute immediately"), 100);

function display()
{
    console.log("The value of a is ", a);
}

display(a);