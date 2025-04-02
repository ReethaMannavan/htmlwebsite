// JS63. Write a function that counts the number of vowels in a string. 

let vowels = ['a','e','i','o','u'];

function vowel(str)
{
  let count= 0;

  for(let letter of str.toLowerCase()){
    if (vowels.includes(letter))
    {
        count++;
    }
  }
  return count;

}
const result = vowel("Hello World");

console.log("Number of Vowels in Hello world is:", result);

