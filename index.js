const userInfo = require('./information.js');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello ! My name is ${userInfo.name} and i'm from ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));