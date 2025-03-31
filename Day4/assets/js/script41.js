// JS41. Print even numbers from 2 to 20 using a for loop. 

let numbers = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for(let num of numbers){
   if(num %2==0)
   {
    console.log("Even numbers are:", num);
    continue;
    
   }
}