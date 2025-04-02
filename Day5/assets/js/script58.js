// JS58. Write a function that returns the largest of three numbers. 

function largest(x,y,z){
    let max_value = 0;

    if(x > y)
    {
        max_value = x;
    }
    else{
        max_value = y;
    
    }

    if(z > max_value)
    {
        max_value = z;
    }
    return max_value;

}

console.log(largest(100,1000,5000));
