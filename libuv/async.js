const fs = require("fs");

const https = require("https");

console.log("Hello There");

var a = 3421;

var b = 4742;

https.get("https://dummyjson.com/", (res) => {
    console.log("Data Fetched from API Successfully");
});

setTimeout(() => {
    console.log("Executed after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf-8", (err,data) => {
    console.log("Data from the file is \n", data);
})

function multiply(x, y)
{
    var result = x * y;
    return result;
}

var c = multiply(a,b);
console.log(c);