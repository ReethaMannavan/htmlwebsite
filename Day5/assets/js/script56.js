// JS56. Write a function to find the factorial of a number. 

function factorialize(num){

    if(num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i>=1; i--){
        num*=i;
    }
    return num;
}

console.log(factorialize(5));
