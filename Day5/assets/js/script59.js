// JS59. Write a function that checks if a string is a palindrome.

function palindromestr(string){
    
let strValues = string.split('');
let reversestrValues = strValues.reverse();
let reverseString = reversestrValues.join('');

if(string == reverseString)
{
    console.log( string, "is a Palindrome");
    
}
else{
    console.log(string,"is not a palindrome");
    
}
}

palindromestr("eye");