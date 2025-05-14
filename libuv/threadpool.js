const crypto = require("crypto");

const fs = require("fs");

process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("sid@23789", "salt", 9999900, 8, "sha512", (err, pass) => {
    console.log("The passwod was encrypted successfully 1");
    // console.log("The password is ", pass.toString("hex"));
});


crypto.pbkdf2("sid@23789", "salt", 9999900, 8, "sha512", (err, pass) => {
    console.log("The passwod was encrypted successfully 2");
    // console.log("The password is ", pass.toString("hex"));
});


crypto.pbkdf2("sid@23789", "salt", 9999900, 8, "sha512", (err, pass) => {
    console.log("The passwod was encrypted successfully 3");
    // console.log("The password is ", pass.toString("hex"));
});


crypto.pbkdf2("sid@23789", "salt", 9999900, 8, "sha512", (err, pass) => {
    console.log("The passwod was encrypted successfully 4");
    // console.log("The password is ", pass.toString("hex"));
});


crypto.pbkdf2("sid@23789", "salt", 9999900, 8, "sha512", (err, pass) => {
    console.log("The passwod was encrypted successfully 5");
    // console.log("The password is ", pass.toString("hex"));
});