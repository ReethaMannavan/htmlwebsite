// JS65. Create a function that takes a callback and calls it.


function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}


function callMe() {
    console.log('I am callback function');
}


greet('john', callMe);