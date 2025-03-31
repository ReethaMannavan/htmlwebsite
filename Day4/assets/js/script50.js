// JS50. Reverse a string using a loop. 

let iterable = "hello";

let reversed = "";

for(i = iterable.length - 1; i>=0; i--){
    reversed += iterable[i];

}

console.log("reversed:", reversed);




// let i = 0;
// while(i< iterable.length){
//     reversed = iterable[i]+reversed;
//     i++;
//     console.log('reversed:', reversed);
    
// }