// 2. Palindrome Checker (Real-World Mini Project) 


function checkPalindrome(string) {
  
  const arrayValues = string.split('');


  const reverseArrayValues = arrayValues.reverse();


  const reverseString = reverseArrayValues.join('');

  if(string == reverseString) {
      console.log('It is a palindrome');
  }
  else {
      console.log('It is not a palindrome');
  }
}


const string = prompt('Enter a string: ').trim().toLocaleLowerCase();

checkPalindrome(string);