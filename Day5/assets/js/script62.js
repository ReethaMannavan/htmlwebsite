// JS62. Create a function that reverses an array. 

function reverse(arr) {
	let a = [];
	for (let i = 0; i < arr.length; i++) {
		a[i] = arr[arr.length- (i + 1)];
	}
	return a;
};

console.log(reverse([1, 2, 3, 4]));



/*
		a[i] = arr[arr.length- (i + 1)];
	BY using this assignment we are assigning to the a[i],
	the value of arr[arr.length - (i + 1) ] i.e.
	the value of ith element from last .
 	so when i = 0, a[0] will get value of last element of arr
 & when i = 1, a[1] will get value of 2nd last element of arr from
 last & so on.
*/