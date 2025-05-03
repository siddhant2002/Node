const crypto = require("node:crypto");

console.log("Hello World");

var a = 3213;

var b = 986;

crypto.pbkdf2Sync("password", "salt", 900000, 64, "sha512");
console.log("First key is generated");


setTimeout(() => {
    console.log("Execute it ASAP");
}, 0);

// pbkdf2 ->  Password-Based Key Derivation Function 2
crypto.pbkdf2("Siddhant@2002", "salt", 900000, 64, "sha512", (err, data) => {
    console.log("Password Generated successfully");
    console.log("The password is ", data.toString("hex"));
});

function multiply(x, y)
{
    var result = x * y;
    return result;
}

var c = multiply(a, b);

console.log(c);