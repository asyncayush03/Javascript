# JavaScript Type Conversion

**Type conversion** is the process of converting a value from one data type to another.

Example:

```js
let age = "22";

let numberAge = Number(age);

console.log(numberAge);        // 22
console.log(typeof numberAge); // number
```

JavaScript supports two major forms of conversion:

1. Explicit Type Conversion
2. Implicit Type Conversion / Type Coercion

---

# 1. Explicit Type Conversion

Explicit conversion happens when we intentionally convert a value using JavaScript's built-in conversion functions.

Common functions:

```text
String()
Number()
Boolean()
BigInt()
```

---

## String → Number

```js
let age = "22";

age = Number(age);

console.log(age);        // 22
console.log(typeof age); // number
```

Other examples:

```js
Number("10");      // 10
Number("10.5");    // 10.5
Number("");        // 0
Number(" ");       // 0
Number("hello");   // NaN
```

If a string cannot be converted to a valid number, `Number()` returns `NaN`.

---

# Number → String

```js
let age = 22;

let result = String(age);

console.log(result);        // "22"
console.log(typeof result); // string
```

Another method:

```js
let age = 22;

let result = age.toString();
```

---

# String → Boolean

```js
Boolean("hello"); // true
Boolean("");      // false
```

An empty string is falsy, while a non-empty string is truthy.

---

# Number → Boolean

```js
Boolean(1);   // true
Boolean(100); // true
Boolean(-10); // true

Boolean(0);   // false
```

Zero is falsy and non-zero numbers are truthy.

---

# Boolean → Number

```js
Number(true);  // 1
Number(false); // 0
```

Therefore:

```text
true  → 1
false → 0
```

---

# `parseInt()`

`parseInt()` converts a value into an integer by parsing the beginning of a string.

```js
parseInt("25px"); // 25
parseInt("25.50"); // 25
```

---

# `parseFloat()`

`parseFloat()` parses a string and returns a floating-point number.

```js
parseFloat("25.50px"); // 25.5
```

Difference:

```text
parseInt("25.50")    → 25
parseFloat("25.50")  → 25.5
```

---

# 2. Implicit Type Conversion / Type Coercion

**Type coercion** occurs when JavaScript automatically converts a value from one type to another during an operation.

Example:

```js
let result = "10" + 5;

console.log(result); // "105"
```

JavaScript converts `5` to `"5"` and performs string concatenation.

Conceptually:

```text
"10" + 5
   ↓
"10" + "5"
   ↓
"105"
```

---

# `+` with Strings

The `+` operator can perform either numeric addition or string concatenation.

```js
10 + 20;       // 30
"10" + 20;     // "1020"
```

If one side is a string, JavaScript may convert the other value to a string.

Example:

```js
console.log(10 + 20 + "30");
```

Output:

```text
"3030"
```

Evaluation happens from left to right:

```text
10 + 20
→ 30

30 + "30"
→ "3030"
```

---

# Other Arithmetic Operators

Arithmetic operators such as `-`, `*`, and `/` generally convert numeric strings into numbers.

```js
"10" - 5; // 5
"10" * 2; // 20
"10" / 2; // 5
```

This is type coercion.

---

# Truthy and Falsy Values

When JavaScript expects a Boolean, values can be converted to `true` or `false`.

### Common Falsy Values

```text
false
0
-0
0n
""
null
undefined
NaN
```

Most other values are truthy.

Examples:

```js
Boolean("hello"); // true
Boolean("0");     // true
Boolean([]);      // true
Boolean({});      // true
```

Important:

```js
Boolean("0"); // true
```

because `"0"` is a non-empty string.

---

# Type Coercion in Conditions

JavaScript automatically converts values to Boolean when evaluating conditions.

```js
let username = "";

if (username) {
    console.log("User exists");
}
```

The condition is effectively evaluated as:

```js
Boolean(username);
```

Since:

```js
Boolean("") // false
```

the block does not execute.

---

# `==` vs `===`

Type coercion is also important when comparing values.

## Loose Equality: `==`

`==` can perform type coercion before comparing.

```js
5 == "5"; // true
```

JavaScript converts the values so they can be compared.

## Strict Equality: `===`

`===` compares both value and data type.

```js
5 === "5"; // false
```

Because:

```text
5   → number
"5" → string
```

### Recommendation

Prefer `===` over `==` in modern JavaScript unless there is a specific reason to use loose equality.

---

# Practical Example

Values received from HTML forms or external sources are often strings.

```js
let price = "500";
let quantity = "2";
```

Incorrect:

```js
let total = price + quantity;

console.log(total); // "5002"
```

Correct:

```js
let total = Number(price) * Number(quantity);

console.log(total); // 1000
```

---

# Quick Revision

```text
Explicit Conversion
        ↓
You convert the value yourself

Number("10")       → 10
String(10)         → "10"
Boolean(1)         → true


Implicit Conversion / Type Coercion
        ↓
JavaScript converts the value automatically

"10" + 5           → "105"
"10" - 5           → 5
5 == "5"            → true
5 === "5"           → false
```

## Key Points

* Type conversion changes a value from one data type to another.
* Explicit conversion is performed intentionally by the developer.
* Implicit conversion is performed automatically by JavaScript.
* `Number()` converts values to numbers.
* `String()` converts values to strings.
* `Boolean()` converts values to Boolean.
* `parseInt()` extracts an integer.
* `parseFloat()` extracts a floating-point number.
* Type coercion occurs when JavaScript automatically converts values.
* `+` behaves differently when strings are involved.
* `==` allows type coercion.
* `===` checks both value and type and is generally preferred.
* Understanding truthy and falsy values is important for conditions.
