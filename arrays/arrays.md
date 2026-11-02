
# JavaScript Arrays

An **array** is a data structure used to store multiple values in a single variable. Arrays are ordered, zero-indexed, and can contain values of different data types.

## 1. Creating Arrays

```js
const fruits = ["apple", "banana", "mango"];

const numbers = [10, 20, 30, 40];

const mixed = ["hello", 25, true, null];

const empty = [];
```

You can also create an array using the `Array` constructor:

```js
const numbers = new Array(10, 20, 30);
```

Prefer array literals (`[]`) for most use cases.

## 2. Accessing Array Elements

Array indexes start at `0`.

```js
const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "mango"
console.log(fruits[3]); // undefined
```

Use `.length` to get the number of elements:

```js
console.log(fruits.length); // 3
```

Access the last element:

```js
console.log(fruits[fruits.length - 1]); // "mango"
console.log(fruits.at(-1)); // "mango"
```

## 3. Updating and Adding Elements

```js
const fruits = ["apple", "banana"];

fruits[1] = "orange"; // Update an element
fruits[2] = "mango"; // Add at index 2

console.log(fruits); // ["apple", "orange", "mango"]
```

Assigning to an index beyond the current length creates empty slots:

```js
const values = [10, 20];

values[4] = 50;

console.log(values); // [10, 20, empty × 2, 50]
console.log(values.length); // 5
```

## 4. Adding and Removing Elements

### `push()` and `pop()`

Add or remove elements at the end.

```js
const fruits = ["apple", "banana"];

fruits.push("mango");
console.log(fruits); // ["apple", "banana", "mango"]

const removed = fruits.pop();
console.log(removed); // "mango"
```

### `unshift()` and `shift()`

Add or remove elements at the beginning.

```js
const fruits = ["banana", "mango"];

fruits.unshift("apple");
console.log(fruits); // ["apple", "banana", "mango"]

const removed = fruits.shift();
console.log(removed); // "apple"
```

These methods modify the original array.

## 5. Finding Elements

### `indexOf()` and `lastIndexOf()`

Return the index of a matching element, or `-1` if it is not found.

```js
const numbers = [10, 20, 30, 20];

numbers.indexOf(20); // 1
numbers.lastIndexOf(20); // 3
numbers.indexOf(50); // -1
```

### `includes()`

Checks whether an array contains a value.

```js
const fruits = ["apple", "banana"];

fruits.includes("banana"); // true
fruits.includes("mango"); // false
```

### `find()` and `findIndex()`

Find the first element or index that satisfies a condition.

```js
const numbers = [5, 12, 8, 20];

numbers.find((num) => num > 10); // 12
numbers.findIndex((num) => num > 10); // 1
```

If no element matches, `find()` returns `undefined` and `findIndex()` returns `-1`.

## 6. Looping Through Arrays

### Traditional `for` loop

```js
const fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### `for...of`

```js
for (const fruit of fruits) {
  console.log(fruit);
}
```

### `forEach()`

Runs a callback for each array element.

```js
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
```

`forEach()` does not return a new array and cannot be stopped with `break`.

## 7. Transforming Arrays

### `map()`

Creates a new array by transforming each element.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6]
```

### `filter()`

Creates a new array containing elements that pass a condition.

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

### `reduce()`

Combines array elements into a single result.

```js
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total); // 60
```

The second argument (`0`) is the initial accumulator value.

## 8. Checking Array Conditions

### `some()`

Returns `true` if at least one element passes the condition.

```js
const numbers = [1, 3, 4];

numbers.some((num) => num % 2 === 0); // true
```

### `every()`

Returns `true` if every element passes the condition.

```js
const numbers = [2, 4, 6];

numbers.every((num) => num % 2 === 0); // true
```

## 9. Extracting and Combining Arrays

### `slice()`

Returns a shallow copy of part of an array. It does not modify the original array.

```js
const numbers = [10, 20, 30, 40, 50];

numbers.slice(1, 4); // [20, 30, 40]
numbers.slice(2); // [30, 40, 50]
numbers.slice(-2); // [40, 50]
```

The ending index is excluded.

### `splice()`

Adds, removes, or replaces elements in the original array.

```js
const fruits = ["apple", "banana", "mango"];

fruits.splice(1, 1); // Remove 1 element at index 1
console.log(fruits); // ["apple", "mango"]
```

Add elements without removing any:

```js
const fruits = ["apple", "mango"];

fruits.splice(1, 0, "banana");
console.log(fruits); // ["apple", "banana", "mango"]
```

### `concat()`

Combines arrays into a new array.

```js
const first = [1, 2];
const second = [3, 4];

const combined = first.concat(second);

console.log(combined); // [1, 2, 3, 4]
```

### Spread syntax

```js
const first = [1, 2];
const second = [3, 4];

const combined = [...first, ...second]; // [1, 2, 3, 4]
const copy = [...first]; // Shallow copy
```

## 10. Sorting and Reversing

### `sort()`

Sorts an array in place. By default, values are sorted as strings.

```js
const fruits = ["mango", "apple", "banana"];

fruits.sort();

console.log(fruits); // ["apple", "banana", "mango"]
```

For numbers, provide a comparison function:

```js
const numbers = [100, 5, 20];

numbers.sort((a, b) => a - b); // Ascending
numbers.sort((a, b) => b - a); // Descending
```

### `reverse()`

Reverses the array in place.

```js
const numbers = [1, 2, 3];

numbers.reverse();

console.log(numbers); // [3, 2, 1]
```

To avoid modifying the original array:

```js
const reversed = [...numbers].reverse();
```

## 11. Converting Arrays to Strings

### `join()`

Joins array elements into a string.

```js
const fruits = ["apple", "banana", "mango"];

fruits.join(); // "apple,banana,mango"
fruits.join(" - "); // "apple - banana - mango"
fruits.join(""); // "applebananamango"
```

### `toString()`

Converts the array to a comma-separated string.

```js
const numbers = [1, 2, 3];

numbers.toString(); // "1,2,3"
```

## 12. Flattening Arrays

### `flat()`

Creates a new array with nested arrays flattened.

```js
const numbers = [1, [2, 3], [4, [5]]];

numbers.flat(); // [1, 2, 3, 4, [5]]
numbers.flat(2); // [1, 2, 3, 4, 5]
numbers.flat(Infinity); // Flatten all nested levels
```

### `flatMap()`

Maps each element and flattens the result by one level.

```js
const numbers = [1, 2, 3];

const result = numbers.flatMap((num) => [num, num * 2]);

console.log(result); // [1, 2, 2, 4, 3, 6]
```

## 13. Checking Whether a Value Is an Array

```js
Array.isArray([1, 2, 3]); // true
Array.isArray("hello"); // false
```

Use `Array.isArray()` instead of `typeof`, because:

```js
typeof [1, 2, 3]; // "object"
```

## 14. Important Array Concepts

### Arrays are mutable

Methods such as `push()`, `pop()`, `splice()`, `sort()`, and `reverse()` modify the original array.

Methods such as `map()`, `filter()`, `slice()`, and `concat()` return new arrays.

### Shallow copies

Spread syntax and `slice()` create shallow copies. Nested objects are still shared by reference.

```js
const original = [{ name: "Alex" }];
const copy = [...original];

copy[0].name = "Sam";

console.log(original[0].name); // "Sam"
```

### Empty slots and `undefined`

```js
const values = [10, , 30];

console.log(values.length); // 3
console.log(values[1]); // undefined
```

An empty slot is not exactly the same as an explicitly stored `undefined`.

## Quick Revision

| Method | Purpose | Modifies original? |
|---|---|---|
| `push()` / `pop()` | Add/remove at the end | Yes |
| `unshift()` / `shift()` | Add/remove at the beginning | Yes |
| `map()` | Transform each element | No |
| `filter()` | Keep matching elements | No |
| `reduce()` | Combine elements into one result | No |
| `find()` | Find the first matching element | No |
| `includes()` | Check whether a value exists | No |
| `slice()` | Copy part of an array | No |
| `splice()` | Add/remove/replace elements | Yes |
| `concat()` | Combine arrays | No |
| `sort()` | Sort elements | Yes |
| `reverse()` | Reverse elements | Yes |
| `join()` | Convert elements to a string | No |
| `flat()` | Flatten nested arrays | No |