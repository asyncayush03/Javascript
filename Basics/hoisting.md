# JavaScript Hoisting

## What is Hoisting?

Hoisting is JavaScript's behavior where declarations are processed before the code is executed.

Hoisting does **not** literally move code to the top. Instead, the JavaScript engine processes certain declarations before executing the code.

---

## Hoisting with `var`

```js
console.log(name);

var name = "Ayush";
```

Output:

```text
undefined
```

Conceptually, this behaves like:

```js
var name;

console.log(name); // undefined

name = "Ayush";
```

Only the declaration is processed before execution. The assignment happens when the execution reaches that line.

---

## Hoisting with `let`

```js
console.log(age);

let age = 22;
```

Output:

```text
ReferenceError
```

`let` is hoisted, but it is not initialized before its declaration is reached.

The variable remains in the **Temporal Dead Zone (TDZ)**.

---

## Hoisting with `const`

```js
console.log(name);

const name = "Ayush";
```

Output:

```text
ReferenceError
```

`const` behaves similarly to `let`.

It is hoisted but remains uninitialized in the Temporal Dead Zone until the declaration is reached.

---

## `var` vs `let` vs `const`

| Declaration | Hoisted? | Initialized during hoisting? | Access before declaration |
| ----------- | -------- | ---------------------------- | ------------------------- |
| `var`       | Yes      | `undefined`                  | `undefined`               |
| `let`       | Yes      | No                           | `ReferenceError`          |
| `const`     | Yes      | No                           | `ReferenceError`          |

---

# Temporal Dead Zone (TDZ)

The Temporal Dead Zone is the period between entering a scope and reaching the declaration of a `let` or `const` variable.

Example:

```js
console.log(age); // ReferenceError

let age = 22;
```

Conceptually:

```text
Scope starts
    ↓
age exists but is not initialized
    ↓
Temporal Dead Zone
    ↓
let age = 22
    ↓
age becomes initialized
```

---

# Function Hoisting

Function declarations are also hoisted.

```js
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Output:

```text
Hello
```

The function can be called before its declaration because function declarations are hoisted.

---

## Function Expression

Function expressions behave differently.

```js
sayHello();

const sayHello = function () {
    console.log("Hello");
};
```

This produces a `ReferenceError` because `sayHello` is a `const` variable and is in the Temporal Dead Zone before its declaration.

---

# Declaration vs Initialization

Consider:

```js
var age = 22;
```

There are two conceptual operations:

```text
Declaration:
var age

Assignment:
age = 22
```

Hoisting makes the declaration available before execution, but the assignment does not happen until that line is executed.

Therefore:

```js
console.log(age);

var age = 22;
```

produces:

```text
undefined
```

---

## Key Points

* Hoisting means declarations are processed before code execution.
* JavaScript does not literally move declarations to the top.
* `var` is hoisted and initialized with `undefined`.
* `let` is hoisted but remains uninitialized until its declaration is reached.
* `const` is hoisted but remains uninitialized until its declaration is reached.
* Accessing `let` or `const` before their declaration results in a `ReferenceError`.
* The period before a `let` or `const` declaration is reached is called the Temporal Dead Zone (TDZ).
* Function declarations are hoisted and can be called before their declaration.
* Hoisting applies to declarations, not the assignment of values.
