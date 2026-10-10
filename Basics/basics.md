# JavaScript Variables

## What is JavaScript?

JavaScript is a programming language primarily used to make web applications interactive and dynamic.

A simple way to understand the role of the three main web technologies is:

* **HTML** → Structure of the webpage
* **CSS** → Appearance and styling
* **JavaScript** → Behavior and logic

JavaScript can be used for:

* Handling user interactions
* Form validation
* Manipulating webpage content
* Making API requests
* Creating dynamic web applications
* Frontend development using frameworks such as React
* Backend development using environments such as Node.js

---

## What is a Variable?

A variable is a named container/reference used to store a value so that the value can be used later in a program.

```js
let age = 22;

console.log(age); // 22
```

Here:

* `let` → keyword used to declare the variable
* `age` → variable name
* `22` → value assigned to the variable

Variables allow us to:

1. Store data
2. Reuse data
3. Change data when required
4. Give meaningful names to values
5. Build dynamic programs

Example:

```js
let score = 0;

score = score + 10;

console.log(score); // 10
```

---

# Variable Declaration Keywords

JavaScript provides three keywords for declaring variables:

```js
var
let
const
```

---

# `let`

`let` is used when a variable may need to be reassigned later.

```js
let age = 22;

age = 23;

console.log(age); // 23
```

The value of a `let` variable can be changed after declaration.

### Example

```js
let count = 0;

count++;
count++;
count++;

console.log(count); // 3
```

Use `let` when the value needs to change.

---

# `const`

`const` is used when a variable should not be reassigned after initialization.

```js
const country = "India";
```

The following is not allowed:

```js
const country = "India";

country = "USA"; // Error
```

A `const` variable must be initialized when it is declared.

```js
const name = "Ayush";
```

This is invalid:

```js
const name; // Error
```

### Important

`const` prevents reassignment of the variable. It does not necessarily make objects or arrays immutable.

```js
const person = {
    name: "Ayush",
    age: 22
};

person.age = 23; // Allowed
```

But reassigning the variable is not allowed:

```js
person = {}; // Error
```

---

# `var`

`var` is the older way of declaring variables in JavaScript.

```js
var age = 22;

age = 23;

console.log(age); // 23
```

`var` allows reassignment and also allows redeclaration in the same scope.

```js
var age = 22;
var age = 23;

console.log(age); // 23
```

Because of its scoping and hoisting behavior, `var` is generally avoided in modern JavaScript.

---

# Scope Difference

## `let` and `const`

`let` and `const` are **block-scoped**.

A block is generally represented by `{ }`.

```js
{
    let age = 22;
}

console.log(age); // Error
```

The variable only exists inside the block.

The same applies to `const`.

```js
{
    const name = "Ayush";
}

console.log(name); // Error
```

---

## `var`

`var` is **function-scoped**, not block-scoped.

```js
{
    var age = 22;
}

console.log(age); // 22
```

The variable can still be accessed outside the block.

This behavior can sometimes lead to unexpected bugs, which is one reason modern JavaScript prefers `let` and `const`.

---

# `var` vs `let` vs `const`

| Feature                     | `var`           | `let`                            | `const`         |
| --------------------------- | --------------- | -------------------------------- | --------------- |
| Reassignment                | Yes             | Yes                              | No              |
| Redeclaration in same scope | Yes             | No                               | No              |
| Scope                       | Function        | Block                            | Block           |
| Must initialize immediately | No              | No                               | Yes             |
| Recommended for modern JS   | Generally avoid | Yes, when reassignment is needed | Yes, by default |

---

# Which One Should I Use?

A useful rule is:

```text
Does the variable need to be reassigned?

Yes → use let
No  → use const
```

Example:

```js
const name = "Ayush";
const country = "India";

let age = 22;

age = 23;
```

In modern JavaScript, prefer `const` by default and use `let` when reassignment is required.

Avoid using `var` unless you specifically need to understand or work with legacy JavaScript code.

---

## Key Points to Remember

* A variable stores/references a value using a name.
* JavaScript has three variable declaration keywords: `var`, `let`, and `const`.
* `let` allows reassignment.
* `const` does not allow reassignment.
* `let` and `const` are block-scoped.
* `var` is function-scoped.
* `var` can be redeclared in the same scope.
* `let` and `const` cannot be redeclared in the same scope.
* Prefer `const` by default.
* Use `let` when reassignment is required.
* Avoid `var` in modern JavaScript unless there is a specific reason to use it.
