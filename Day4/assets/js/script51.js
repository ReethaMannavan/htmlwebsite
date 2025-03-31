// JS51. Count the number of vowels in a string using a loop. 



// for(let vowels of word){
//    if(['a','e','i','o','u']==true)
//    {
//      count = vowels.length;
      
//    }
//    console.log(count);
   
// }

let word = "hello world";
const vowelsMap = new Map([
   ["a", true], ["e", true], ["i", true], ["o", true], ["u", true],
   ["A", true], ["E", true], ["I", true], ["O", true], ["U", true]
]);

let count = 0;
for (const char of word) {
   if (vowelsMap.has(char)) {
    
       count++;
   
   }
   
}
console.log(count);


