# JavaScript Data Types

A **data type** defines the kind of value stored or represented in JavaScript.

JavaScript is a **dynamically typed language**, meaning we do not need to explicitly specify the data type when declaring a variable.

```js
let age = 22;
let name = "Ayush";
let isLoggedIn = true;
```

JavaScript automatically determines the type of each value.

---

# Categories of Data Types

JavaScript data types can be broadly divided into:

1. **Primitive Data Types**
2. **Non-Primitive / Reference Types**

## Primitive Data Types

JavaScript has 7 primitive data types:

* String
* Number
* BigInt
* Boolean
* Undefined
* Null
* Symbol

## Non-Primitive / Reference Types

The main reference type is:

* Object

Arrays and functions are technically objects as well.

---

# 1. String

A String represents text.

```js
let name = "Ayush";
let city = 'Delhi';
let message = `Hello World`;
```

Strings can be created using single quotes, double quotes, or backticks.

Template literals allow variables to be embedded inside strings:

```js
let name = "Ayush";
let age = 22;

let message = `My name is ${name} and I am ${age} years old.`;
```

---

# 2. Number

JavaScript uses the `Number` type for both integers and floating-point numbers.

```js
let age = 22;
let price = 99.99;
let temperature = -5;
```

JavaScript does not have separate `int` and `float` types.

Some special Number values are:

```js
Infinity
-Infinity
NaN
```

`NaN` means "Not-a-Number".

Interestingly:

```js
typeof NaN; // "number"
```

---

# 3. BigInt

BigInt is used for integers larger than the safe range of the normal `Number` type.

```js
let bigNumber = 123456789012345678901234567890n;
```

The `n` suffix indicates a BigInt.

```js
typeof bigNumber; // "bigint"
```

---

# 4. Boolean

A Boolean represents either `true` or `false`.

```js
let isLoggedIn = true;
let isAdmin = false;
```

Booleans are commonly used with conditions:

```js
if (isLoggedIn) {
    console.log("Welcome!");
}
```

---

# 5. Undefined

`undefined` generally means that a variable has been declared but has not been assigned a value.

```js
let age;

console.log(age); // undefined
```

```js
typeof age; // "undefined"
```

---

# 6. Null

`null` represents an intentional absence of a value.

```js
let selectedUser = null;
```

A useful distinction is:

```text
undefined → value has not been assigned / is unavailable
null      → intentionally represents no value
```

### Important

```js
typeof null; // "object"
```

This is a historical JavaScript quirk.

`null` is a primitive value even though `typeof null` returns `"object"`.

---

# 7. Symbol

Symbol is used to create unique values.

```js
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false
```

Each Symbol is unique.

---

# 8. Object

Objects store collections of related data as key-value pairs.

```js
let user = {
    name: "Ayush",
    age: 22,
    isLoggedIn: true
};
```

Accessing properties:

```js
console.log(user.name);
console.log(user.age);
```

Objects are heavily used in JavaScript applications, APIs, React, Node.js, and JSON.

---

# 9. Array

An array stores multiple values in an ordered collection.

```js
let fruits = ["Apple", "Banana", "Mango"];
```

Array elements are accessed using their index:

```js
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
```

Arrays are technically objects in JavaScript.

```js
typeof fruits; // "object"
```

To check whether a value is an array:

```js
Array.isArray(fruits); // true
```

---

# 10. Functions

Functions are also technically objects in JavaScript.

```js
function greet() {
    console.log("Hello");
}
```

```js
typeof greet; // "function"
```

Functions are used to group reusable logic.

---

# Primitive vs Reference Types

### Primitive Types

```text
String
Number
BigInt
Boolean
Undefined
Null
Symbol
```

Primitive values are treated as individual values.

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Changing `b` does not change `a`.

### Reference Types

Objects, arrays, and functions are reference types.

```js
let user1 = {
    name: "Ayush"
};

let user2 = user1;

user2.name = "Rahul";

console.log(user1.name); // Rahul
```

Both variables refer to the same object.

---

# `typeof` Operator

The `typeof` operator is used to determine the type of a value.

```js
typeof "Ayush";      // "string"
typeof 22;           // "number"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof 123n;         // "bigint"
typeof Symbol();     // "symbol"
typeof {};           // "object"
```

Important quirks:

```js
typeof null; // "object"
typeof [];   // "object"
```

For arrays, use:

```js
Array.isArray([]);
```

---

# Quick Revision Table

| Type      | Example              |
| --------- | -------------------- |
| String    | `"Ayush"`            |
| Number    | `22`, `3.14`         |
| BigInt    | `123456789n`         |
| Boolean   | `true`, `false`      |
| Undefined | `let x;`             |
| Null      | `let x = null`       |
| Symbol    | `Symbol("id")`       |
| Object    | `{ name: "Ayush" }`  |
| Array     | `[1, 2, 3]`          |
| Function  | `function test() {}` |

## Key Points

* JavaScript is dynamically typed.
* JavaScript has 7 primitive data types.
* `String`, `Number`, `BigInt`, `Boolean`, `Undefined`, `Null`, and `Symbol` are primitive types.
* Objects, arrays, and functions are reference types.
* `typeof` can be used to check the type of a value.
* `typeof null` returns `"object"` due to a historical JavaScript quirk.
* Arrays are technically objects, so `typeof []` returns `"object"`.
* Use `Array.isArray()` to check whether a value is an array.
