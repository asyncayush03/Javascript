# JavaScript Numbers and Math

JavaScript uses the `Number` data type for both integers and decimal numbers.

```js
let age = 22;
let price = 99.99;
let temperature = -10;
```

All of these have the type:

```js
typeof age; // "number"
```

JavaScript does not have separate `int` and `float` types for ordinary numbers.

---

# Number Values

```js
let a = 100;
let b = 10.5;
let c = -20;
let d = 1_000_000;
```

Underscores can be used to make large numeric literals easier to read:

```js
let population = 1_400_000_000;
```

The underscores do not affect the value.

---

# `NaN`

`NaN` means **Not-a-Number**.

It occurs when an operation cannot produce a valid numeric result.

```js
console.log("hello" * 5);
// NaN
```

```js
console.log(Number("hello"));
// NaN
```

Interestingly:

```js
typeof NaN; // "number"
```

To check specifically for `NaN`, use:

```js
Number.isNaN(value);
```

---

# `Infinity`

JavaScript supports positive and negative infinity.

```js
10 / 0;   // Infinity
-10 / 0;  // -Infinity
```

Check whether a value is finite:

```js
Number.isFinite(100);      // true
Number.isFinite(Infinity); // false
Number.isFinite(NaN);      // false
```

---

# Number Methods

## `Number()`

Converts a value to a number.

```js
let value = "100";

let result = Number(value);

console.log(result);        // 100
console.log(typeof result); // "number"
```

---

## `Number.isNaN()`

Checks whether a value is the actual `NaN` value.

```js
Number.isNaN(NaN);        // true
Number.isNaN(100);        // false
Number.isNaN("hello");    // false
```

---

## `Number.isFinite()`

Checks whether a value is a finite number.

```js
Number.isFinite(100);      // true
Number.isFinite(Infinity); // false
Number.isFinite(NaN);      // false
```

---

## `Number.isInteger()`

Checks whether a value is an integer.

```js
Number.isInteger(10);   // true
Number.isInteger(10.5); // false
```

---

## `Number.parseInt()`

Parses an integer from a string.

```js
Number.parseInt("25px"); // 25
```

It is equivalent to:

```js
parseInt("25px"); // 25
```

---

## `Number.parseFloat()`

Parses a floating-point number.

```js
Number.parseFloat("25.50px"); // 25.5
```

It is equivalent to:

```js
parseFloat("25.50px"); // 25.5
```

---

# `toFixed()`

Formats a number to a specified number of decimal places.

```js
let price = 99.5678;

let result = price.toFixed(2);

console.log(result); // "99.57"
```

Important:

> `toFixed()` returns a string.

```js
typeof result; // "string"
```

If a number is needed:

```js
let result = Number(price.toFixed(2));
```

---

# `toString()`

Converts a number into a string.

```js
let number = 100;

let result = number.toString();

console.log(result);        // "100"
console.log(typeof result); // "string"
```

---

# Number Limits

## `Number.MAX_SAFE_INTEGER`

The largest integer that JavaScript can safely represent using `Number`.

```js
Number.MAX_SAFE_INTEGER;
// 9007199254740991
```

There is also:

```js
Number.MIN_SAFE_INTEGER;
```

For integers beyond the safe range, use `BigInt`.

```js
let bigNumber = 9007199254740992n;
```

---

# Math Object

The `Math` object provides mathematical constants and functions.

Example:

```js
Math.round(4.6); // 5
```

`Math` is not instantiated with `new`.

```js
new Math(); // Error
```

Use it directly:

```js
Math.method();
```

---

# `Math.round()`

Rounds to the nearest integer.

```js
Math.round(4.4); // 4
Math.round(4.5); // 5
Math.round(4.8); // 5
```

---

# `Math.floor()`

Rounds down toward negative infinity.

```js
Math.floor(4.9);  // 4
Math.floor(4.1);  // 4
Math.floor(-4.1); // -5
```

---

# `Math.ceil()`

Rounds up toward positive infinity.

```js
Math.ceil(4.1);  // 5
Math.ceil(4.9);  // 5
Math.ceil(-4.9); // -4
```

---

# `Math.trunc()`

Removes the decimal portion without rounding.

```js
Math.trunc(4.9);  // 4
Math.trunc(4.1);  // 4
Math.trunc(-4.9); // -4
```

### Comparison

```text
Math.floor() → toward -∞
Math.ceil()  → toward +∞
Math.trunc() → removes decimal part
Math.round() → nearest integer
```

---

# `Math.abs()`

Returns the absolute value.

```js
Math.abs(10);   // 10
Math.abs(-10);  // 10
Math.abs(-25.5); // 25.5
```

---

# `Math.max()`

Returns the largest value.

```js
Math.max(10, 20, 5, 30);
// 30
```

---

# `Math.min()`

Returns the smallest value.

```js
Math.min(10, 20, 5, 30);
// 5
```

---

# `Math.pow()`

Calculates a number raised to a power.

```js
Math.pow(2, 3);
// 8
```

Modern JavaScript also supports the exponentiation operator:

```js
2 ** 3;
// 8
```

---

# `Math.sqrt()`

Returns the square root.

```js
Math.sqrt(25);
// 5
```

---

# `Math.cbrt()`

Returns the cube root.

```js
Math.cbrt(27);
// 3
```

---

# `Math.random()`

Returns a random number from `0` inclusive to `1` exclusive.

```js
Math.random();
```

Possible output:

```text
0.483728...
```

It can return `0`, but it will not return `1`.

---

# Generating a Random Integer

Random integer from `1` to `10`:

```js
let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);
```

The logic is:

```text
Math.random()
→ 0 ≤ value < 1

× 10
→ 0 ≤ value < 10

Math.floor()
→ 0 to 9

+ 1
→ 1 to 10
```

---

# Random Integer Between Two Values

Formula:

```js
Math.floor(Math.random() * (max - min + 1)) + min;
```

Example:

```js
let min = 5;
let max = 15;

let randomNumber =
    Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);
```

Possible values:

```text
5, 6, 7, ..., 15
```

---

# Math Constants

## `Math.PI`

```js
Math.PI;
// 3.141592653589793
```

## `Math.E`

Euler's number:

```js
Math.E;
// 2.718281828459045
```

---

# Floating-Point Precision

JavaScript uses IEEE 754 double-precision floating-point numbers for the normal `Number` type.

Because many decimal fractions cannot be represented exactly in binary:

```js
console.log(0.1 + 0.2);
```

may produce:

```text
0.30000000000000004
```

For simple rounding:

```js
let result = 0.1 + 0.2;

console.log(Number(result.toFixed(2)));
// 0.3
```

This is important when working with financial or highly precise decimal calculations.

---

# Quick Revision

```text
Number
│
├── Number()
├── Number.isNaN()
├── Number.isFinite()
├── Number.isInteger()
├── Number.parseInt()
├── Number.parseFloat()
├── Number.MAX_VALUE
├── Number.MAX_SAFE_INTEGER
└── Number.MIN_SAFE_INTEGER

Math
│
├── Math.round()
├── Math.floor()
├── Math.ceil()
├── Math.trunc()
├── Math.abs()
├── Math.max()
├── Math.min()
├── Math.pow()
├── Math.sqrt()
├── Math.cbrt()
├── Math.random()
├── Math.PI
└── Math.E
```

## Key Points

- JavaScript uses `Number` for normal integers and decimal numbers.
- `NaN` represents an invalid numeric result.
- `Infinity` represents an infinite numeric value.
- `Number.isNaN()` checks specifically for `NaN`.
- `Number.isFinite()` checks for finite numbers.
- `Number.isInteger()` checks whether a value is an integer.
- `toFixed()` formats decimal places but returns a string.
- `Number.MAX_SAFE_INTEGER` is `9007199254740991`.
- `BigInt` should be used for integers beyond the safe integer range.
- `Math` provides mathematical methods and constants.
- `Math.floor()` rounds toward negative infinity.
- `Math.ceil()` rounds toward positive infinity.
- `Math.trunc()` removes the decimal portion.
- `Math.round()` rounds to the nearest integer.
- `Math.random()` returns a value between `0` inclusive and `1` exclusive.
- JavaScript floating-point arithmetic can have precision issues such as `0.1 + 0.2`.