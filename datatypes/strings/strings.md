# JavaScript Strings

A **string** is a sequence of characters used to represent text.

```js
let name = "Ayush";
let city = 'Delhi';
let message = `Hello World`;
```

JavaScript supports three types of string literals:

```js
"Hello"
'Hello'
`Hello`
```

---

# String Length

The `length` property returns the number of characters in a string.

```js
let name = "Ayush";

console.log(name.length); // 5
```

Spaces are also counted.

```js
let name = "Ayush Sharma";

console.log(name.length); // 12
```

---

# Accessing Characters

Characters can be accessed using indexes.

```js
let name = "Ayush";

console.log(name[0]); // A
console.log(name[1]); // y
console.log(name[4]); // h
```

Indexes start from `0`.

```text
A  y  u  s  h
0  1  2  3  4
```

---

# `charAt()`

Returns the character at a specified index.

```js
let name = "Ayush";

console.log(name.charAt(2)); // u
```

If the index does not exist, it returns an empty string.

```js
name.charAt(10); // ""
```

---

# `charCodeAt()`

Returns the UTF-16 code of the character at a specified index.

```js
let name = "Ayush";

console.log(name.charCodeAt(0)); // 65
```

---

# `at()`

Returns the character at a specified index.

```js
let name = "Ayush";

console.log(name.at(0));  // A
console.log(name.at(2));  // u
```

Unlike bracket notation, `at()` supports negative indexes.

```js
console.log(name.at(-1)); // h
```

---

# `toUpperCase()`

Converts a string to uppercase.

```js
let name = "Ayush";

console.log(name.toUpperCase()); // AYUSH
```

---

# `toLowerCase()`

Converts a string to lowercase.

```js
let name = "AYUSH";

console.log(name.toLowerCase()); // ayush
```

---

# `trim()`

Removes whitespace from both the beginning and end of a string.

```js
let name = "   Ayush   ";

console.log(name.trim()); // "Ayush"
```

It does not remove spaces between words.

```js
let name = "   Ayush Sharma   ";

console.log(name.trim()); // "Ayush Sharma"
```

`trim()` is commonly used when handling user input.

---

# `trimStart()`

Removes whitespace from the beginning.

```js
let name = "   Ayush   ";

console.log(name.trimStart());
// "Ayush   "
```

---

# `trimEnd()`

Removes whitespace from the end.

```js
let name = "   Ayush   ";

console.log(name.trimEnd());
// "   Ayush"
```

---

# `includes()`

Checks whether a string contains a specified value.

Returns `true` or `false`.

```js
let text = "JavaScript is awesome";

console.log(text.includes("JavaScript")); // true
console.log(text.includes("Python"));     // false
```

---

# `startsWith()`

Checks whether a string starts with a specified value.

```js
let url = "https://example.com";

console.log(url.startsWith("https")); // true
```

---

# `endsWith()`

Checks whether a string ends with a specified value.

```js
let file = "profile.jpg";

console.log(file.endsWith(".jpg")); // true
```

---

# `indexOf()`

Returns the index of the first occurrence of a value.

```js
let text = "Hello JavaScript";

console.log(text.indexOf("JavaScript")); // 6
```

If the value is not found:

```js
text.indexOf("Python"); // -1
```

---

# `lastIndexOf()`

Returns the index of the last occurrence.

```js
let text = "apple apple";

console.log(text.lastIndexOf("apple")); // 6
```

---

# `slice()`

Extracts a portion of a string and returns a new string.

```js
let text = "JavaScript";

console.log(text.slice(0, 4)); // Java
```

The ending index is not included.

`slice()` also supports negative indexes.

```js
let text = "JavaScript";

console.log(text.slice(-6)); // Script
```

---

# `substring()`

Extracts a portion of a string.

```js
let text = "JavaScript";

console.log(text.substring(0, 4)); // Java
```

Unlike `slice()`, `substring()` does not support negative indexes in the same way.

```js
text.slice(-6);      // "Script"
text.substring(-6);  // "JavaScript"
```

For most modern code, `slice()` is generally preferred.

---

# `substr()`

`substr()` is deprecated and should not be used in new code.

Prefer:

```js
text.slice(0, 4);
```

---

# `replace()`

Replaces the first matching occurrence.

```js
let text = "JavaScript is great. JavaScript is powerful.";

let result = text.replace("JavaScript", "JS");

console.log(result);
// JS is great. JavaScript is powerful.
```

---

# `replaceAll()`

Replaces all matching occurrences.

```js
let text = "JavaScript is great. JavaScript is powerful.";

let result = text.replaceAll("JavaScript", "JS");

console.log(result);
// JS is great. JS is powerful.
```

---

# `split()`

`split()` converts a string into an array based on a separator.

```js
let fruits = "Apple,Banana,Mango";

let result = fruits.split(",");

console.log(result);
// ["Apple", "Banana", "Mango"]
```

Therefore:

```text
String
   ↓
split()
   ↓
Array
```

### Splitting by spaces

```js
let sentence = "I love JavaScript";

let words = sentence.split(" ");

console.log(words);
// ["I", "love", "JavaScript"]
```

### Splitting every character

```js
let word = "Hello";

console.log(word.split(""));
// ["H", "e", "l", "l", "o"]
```

### Using a limit

```js
let text = "A-B-C-D";

console.log(text.split("-", 2));
// ["A", "B"]
```

---

# `concat()`

Combines strings.

```js
let firstName = "Ayush";
let lastName = "Sharma";

let fullName = firstName.concat(" ", lastName);

console.log(fullName);
// Ayush Sharma
```

Template literals are generally more convenient:

```js
let fullName = `${firstName} ${lastName}`;
```

---

# `repeat()`

Repeats a string a specified number of times.

```js
let text = "Hello ";

console.log(text.repeat(3));
// Hello Hello Hello
```

---

# `padStart()`

Adds characters to the beginning of a string until it reaches the specified length.

```js
let number = "5";

console.log(number.padStart(3, "0"));
// "005"
```

---

# `padEnd()`

Adds characters to the end of a string.

```js
let number = "5";

console.log(number.padEnd(3, "0"));
// "500"
```

---

# `String()` vs `new String()`

A string literal creates a primitive string:

```js
let name = "Ayush";

console.log(typeof name);
// "string"
```

`new String()` creates a String object:

```js
let name = new String("Ayush");

console.log(typeof name);
// "object"
```

Therefore, prefer:

```js
let name = "Ayush";
```

instead of:

```js
let name = new String("Ayush");
```

`new String()` is mainly useful for understanding JavaScript's object wrappers and older code.

---

# Strings Are Immutable

Strings cannot be changed directly.

```js
let name = "Ayush";

name[0] = "R";

console.log(name);
// "Ayush"
```

String methods return a new string rather than modifying the original.

```js
let name = "  Ayush  ";

let trimmed = name.trim();

console.log(name);    // "  Ayush  "
console.log(trimmed); // "Ayush"
```

---

# Most Important String Methods

For practical JavaScript, focus on these first:

```text
length

charAt()
at()

toUpperCase()
toLowerCase()

trim()
trimStart()
trimEnd()

includes()
startsWith()
endsWith()

indexOf()
lastIndexOf()

slice()
substring()

replace()
replaceAll()

split()

concat()
repeat()

padStart()
padEnd()
```

## Quick Revision

```text
"Hello".length
→ 5

"Hello".toUpperCase()
→ "HELLO"

"HELLO".toLowerCase()
→ "hello"

"  Hello  ".trim()
→ "Hello"

"Hello World".includes("World")
→ true

"Hello World".startsWith("Hello")
→ true

"Hello World".endsWith("World")
→ true

"Hello World".indexOf("World")
→ 6

"JavaScript".slice(0, 4)
→ "Java"

"JavaScript".replace("Java", "Type")
→ "TypeScript"

"A,B,C".split(",")
→ ["A", "B", "C"]
```

## Key Points

* Strings are sequences of characters.
* String indexes start from `0`.
* Strings are immutable.
* Most string methods return a new string instead of modifying the original.
* `trim()` removes whitespace from both ends.
* `split()` converts a string into an array.
* `slice()` extracts part of a string and supports negative indexes.
* `replace()` replaces the first match.
* `replaceAll()` replaces all matches.
* Prefer primitive strings such as `"Hello"` over `new String("Hello")`.
