
# JavaScript Objects and JSON

## 1. JavaScript Objects

An **object** stores related data as key-value pairs. Keys are usually strings or symbols, and values can be any JavaScript data type.

```js
const user = {
  name: "Alex",
  age: 25,
  isActive: true
};
```

- `name`, `age`, and `isActive` are **properties**.
- `"Alex"`, `25`, and `true` are their values.
- Objects are useful for representing entities such as users, products, and orders.

## 2. Creating Objects

### Object literal

```js
const user = {
  name: "Alex",
  age: 25
};
```

### Empty object

```js
const user = {};
```

### Using `new Object()`

```js
const user = new Object();

user.name = "Alex";
user.age = 25;
```

Object literals (`{}`) are preferred in most cases.

## 3. Accessing Properties

### Dot notation

```js
const user = {
  name: "Alex",
  age: 25
};

console.log(user.name); // "Alex"
```

### Bracket notation

```js
console.log(user["name"]); // "Alex"
```

Bracket notation is useful when the key is stored in a variable or contains spaces.

```js
const property = "age";

console.log(user[property]); // 25

const data = {
  "first name": "Alex"
};

console.log(data["first name"]); // "Alex"
```

## 4. Adding, Updating, and Deleting Properties

```js
const user = {
  name: "Alex"
};

// Add a property
user.age = 25;

// Update a property
user.name = "Sam";

// Delete a property
delete user.age;

console.log(user); // { name: "Sam" }
```

## 5. Nested Objects

An object can contain another object as a property.

```js
const user = {
  name: "Alex",
  address: {
    city: "Delhi",
    country: "India"
  }
};

console.log(user.address.city); // "Delhi"
```

Use optional chaining (`?.`) to safely access a property that may not exist:

```js
console.log(user.contact?.email); // undefined
```

## 6. Methods in Objects

A function stored in an object is commonly called a **method**.

```js
const user = {
  name: "Alex",

  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

user.greet(); // "Hello, Alex"
```

In a regular object method, `this` refers to the object used to call the method.

## 7. Object Destructuring

Destructuring extracts properties into variables.

```js
const user = {
  name: "Alex",
  age: 25
};

const { name, age } = user;

console.log(name); // "Alex"
console.log(age); // 25
```

Rename a property while destructuring:

```js
const { name: userName } = user;

console.log(userName); // "Alex"
```

Provide a default value:

```js
const { city = "Unknown" } = user;

console.log(city); // "Unknown"
```

## 8. Useful Object Methods

### `Object.keys()`

Returns an array of an object's own enumerable property names.

```js
const user = {
  name: "Alex",
  age: 25
};

Object.keys(user); // ["name", "age"]
```

### `Object.values()`

Returns an array of property values.

```js
Object.values(user); // ["Alex", 25]
```

### `Object.entries()`

Returns an array of `[key, value]` pairs.

```js
Object.entries(user);
// [["name", "Alex"], ["age", 25]]
```

### `Object.assign()`

Copies enumerable properties from source objects into a target object.

```js
const user = { name: "Alex" };
const extra = { age: 25 };

const result = Object.assign({}, user, extra);

console.log(result); // { name: "Alex", age: 25 }
```

### Spread syntax

A common way to create a shallow copy or combine objects:

```js
const user = { name: "Alex", age: 25 };

const copy = { ...user };
const updatedUser = { ...user, age: 26 };
```

### `Object.hasOwn()`

Checks whether an object has a property directly on itself.

```js
const user = { name: "Alex" };

Object.hasOwn(user, "name"); // true
Object.hasOwn(user, "age"); // false
```

## 9. Looping Through Objects

```js
const user = {
  name: "Alex",
  age: 25
};

for (const key in user) {
  console.log(key, user[key]);
}
```

For only an object's own properties, use `Object.keys()`, `Object.values()`, or `Object.entries()`.

```js
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}
```

## 10. Object References and Shallow Copies

Objects are reference types. Assigning an object to another variable copies the reference, not the object itself.

```js
const first = { name: "Alex" };
const second = first;

second.name = "Sam";

console.log(first.name); // "Sam"
```

Spread syntax creates a **shallow copy**:

```js
const original = {
  name: "Alex",
  address: { city: "Delhi" }
};

const copy = { ...original };

copy.name = "Sam";
copy.address.city = "Mumbai";

console.log(original.name); // "Alex"
console.log(original.address.city); // "Mumbai"
```

The nested `address` object is still shared.

## 11. JSON

**JSON** stands for **JavaScript Object Notation**. It is a text format commonly used to store and exchange data, especially between a frontend and an API.

Example JSON:

```json
{
  "name": "Alex",
  "age": 25,
  "isActive": true,
  "skills": ["JavaScript", "React"]
}
```

JSON supports these value types:

- Strings
- Numbers
- Booleans
- `null`
- Arrays
- Objects

JSON does **not** support `undefined`, functions, symbols, or comments.

## 12. JavaScript Object vs JSON

JavaScript object:

```js
const user = {
  name: "Alex",
  greet() {
    console.log("Hello");
  }
};
```

JSON text:

```json
{
  "name": "Alex"
}
```

Key differences:

- JavaScript objects can contain methods and values such as `undefined`.
- JSON is text and requires double quotes around property names and strings.
- JSON does not allow functions, comments, or trailing commas.

## 13. Converting Between Objects and JSON

### `JSON.stringify()`

Converts a JavaScript value into a JSON string.

```js
const user = {
  name: "Alex",
  age: 25
};

const jsonString = JSON.stringify(user);

console.log(jsonString);
// '{"name":"Alex","age":25}'
```

Pretty-print JSON with indentation:

```js
JSON.stringify(user, null, 2);
```

### `JSON.parse()`

Converts valid JSON text into a JavaScript value.

```js
const jsonString = '{"name":"Alex","age":25}';

const user = JSON.parse(jsonString);

console.log(user.name); // "Alex"
```

Invalid JSON causes `JSON.parse()` to throw an error.

```js
try {
  const data = JSON.parse(jsonString);
  console.log(data);
} catch (error) {
  console.error("Invalid JSON:", error.message);
}
```

## 14. Common JSON Conversion Behavior

```js
JSON.stringify({ name: "Alex", age: undefined });
// '{"name":"Alex"}'

JSON.stringify([10, undefined, 30]);
// '[10,null,30]'
```

- Object properties with `undefined`, functions, or symbols are omitted.
- Those values inside arrays become `null`.
- `JSON.stringify()` can return `undefined` when given certain unsupported top-level values, such as a function or `undefined`.

## Quick Revision

| Concept | Purpose |
|---|---|
| `object.key` | Access a property |
| `object[key]` | Access a property dynamically |
| `Object.keys(obj)` | Get property names |
| `Object.values(obj)` | Get property values |
| `Object.entries(obj)` | Get key-value pairs |
| `{ ...obj }` | Create a shallow copy |
| `JSON.stringify(value)` | Convert a value to JSON text |
| `JSON.parse(text)` | Convert JSON text to a JavaScript value |

**Remember:** A JavaScript object is a value in your program. JSON is a text format used to represent data for storage or exchange.
