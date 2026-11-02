{/*
let arr = [1, 2, 3, 4, 5];

arr.push(6); // Adds 6 to the end of the array
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

arr.pop(); // Removes the last element (6) from the array
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.unshift(10);
console.log(arr); // Output: [10, 1, 2, 3, 4, 5]
arr.shift(); // Removes the first element (10) from the array
console.log(arr); // Output: [1, 2, 3, 4, 5]

const index = arr.indexOf(3); // Finds the index of the element 3
console.log(index); // Output: 2

const includes = arr.includes(4); // Checks if the array includes the element 4
console.log(includes); // Output: true

const some = arr.some((num) => num > 4); // Checks if any element in the array is greater than 4
console.log(some); // Output: true

const every = arr.every((num) => num>0); // Checks if all elements in the array are greater than 0
console.log(every); // Output: true

const filter = arr.filter((num)=> num > 3); // Filters the array to include only elements greater than 3
console.log(filter); // Output: [4, 5]

const map = arr.map((num) => {return num * 2 +1}); // Maps each element in the array to a new value (num * 2 + 1)
//NOTE: We have to use return statement in the map function because we are using curly braces. If we don't use curly braces, we can omit the return statement and it will work fine.
console.log(map); // Output: [3, 5, 7, 9, 11]'

const reduce = arr.reduce((acc, curr) => {
    console.log(`Accumulator: ${acc}, Current Value: ${curr}`);
    return acc + curr;
});
console.log(arr);

console.log("Slice", arr.slice(0, 3)); // Output: [1, 2, 3] - Returns a shallow copy of a portion of the array from index 0 to index 3 (not inclusive)
console.log("Slice", arr.slice(1, 2)); // Output: [2, 3] - Returns a shallow copy of a portion of the array from index 1 to index 2 (not inclusive)

console.log("Slice", arr.slice(-2, -1)); // Output: [4] - Returns the second-to-last element of the array

console.log("Slice", arr.slice(0)); // Output: [1, 2, 3, 4, 5] - Returns a shallow copy of the entire array
*/
}

//All the above methods are non-mutating methods, which means they do not change the original array. They return a new array or value based on the original array.

let arr = [1, 2, 3, 4, 5];

//Mutating methods
arr.reverse(); // Reverses the order of the elements in the array
console.log(arr); // Output: [5, 4, 3, 2, 1]

console.log("Splice", arr.splice(1,3)); // Output: [4, 3, 2] - Removes elements from the array starting at index 1 and removes 3 elements
console.log(arr); // Output: [5, 1] - The original array is modified after splice is called

console.log("Splice", arr.splice(1,0, 10, 20)); // Output: [] - Inserts elements 10 and 20 at index 1 without removing any elements
console.log(arr); // Output: [5, 10, 20, 1] - The original array is modified after splice is called

console.log("arr.push", arr.push(90))
console.log(arr); // Output: [5, 10, 20, 1, 90] - Adds 90 to the end of the array and returns the new length of the array