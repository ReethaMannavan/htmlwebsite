// JS48. Skip printing numbers divisible by 3 using continue. 

let numbers = [1, 3, 5, 9, 10 , 12, 13 ,15];

for(num of numbers){

    if(num %3 ==0)
       continue;
    console.log("These numbers are not divisible by 3:", num);
    
        
}