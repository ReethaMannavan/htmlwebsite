// JS52. Find the largest number in an array using a loop.



let a = [1,22,2,33,3,44,4,55,5,66,6,77,7,88,8,99,9,100,10];
let i;
let max = a[0];

for (i = 1; i < a.length; i++) {
    if (a[i] > max)
        max = a[i];
}

console.log(`Largest number in the array is: ${max}`);