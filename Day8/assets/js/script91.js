// JS91.  Use new keyword inside a function to create an instance of another constructor function. 

function Fun()
{
    this.name = new function()
    {
console.log("New function");

    }
}

let function1 = new Fun();

console.log(function1.name);

