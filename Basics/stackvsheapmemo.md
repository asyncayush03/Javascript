# Stack vs Heap Memory in JavaScript

When JavaScript executes a program, it needs memory to store variables, function calls, objects, and other runtime data.

Two common concepts used to explain memory are:

* Stack
* Heap

> **Important:** "Primitives are stored in the stack and objects are stored in the heap" is a useful beginner mental model, but it is not a strict JavaScript specification rule. JavaScript engines can optimize memory differently.

---

# 1. Stack Memory

The stack is used for managing function execution and other execution-related data.

The call stack follows:

**LIFO — Last In, First Out**

Example:

```js
function greet() {
    console.log("Hello");
}

greet();
```

When `greet()` is called, it is added to the call stack.

```text
┌───────────────┐
│ greet()       │
├───────────────┤
│ global/main   │
└───────────────┘
```

When `greet()` finishes, it is removed from the stack.

---

# 2. Heap Memory

The heap is used for dynamically allocated data, especially objects and other data structures whose size or lifetime can vary.

Example:

```js
let user = {
    name: "Ayush",
    age: 22
};
```

A simplified model is:

```text
Stack                    Heap

user ─────────────────→ { name: "Ayush", age: 22 }
```

The variable holds a reference to the object.

---

# 3. Primitive Values

Primitive values are commonly explained as being stored directly in stack-like execution storage.

Example:

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

The value is copied:

```text
a → 10
b → 20
```

Changing `b` does not change `a`.

---

# 4. Objects and References

Objects behave differently.

```js
let user1 = {
    name: "Ayush"
};

let user2 = user1;

user2.name = "Rahul";

console.log(user1.name); // Rahul
```

A simplified model:

```text
Stack                     Heap

user1 ──────┐
            ├──────────→ { name: "Rahul" }
user2 ──────┘
```

Both variables refer to the same object.

Therefore, modifying the object through `user2` is visible through `user1`.

---

# 5. Call Stack

The stack is also used to manage function calls.

```js
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Hello");
}

first();
```

At one point, the call stack looks conceptually like:

```text
┌─────────────┐
│ third()     │
├─────────────┤
│ second()    │
├─────────────┤
│ first()     │
├─────────────┤
│ global      │
└─────────────┘
```

`third()` finishes first, followed by `second()`, then `first()`.

This is LIFO.

---

# 6. Stack Overflow

If too many function calls are added to the call stack, a stack overflow can occur.

Example:

```js
function test() {
    test();
}

test();
```

The function continuously calls itself without returning.

Eventually JavaScript throws an error similar to:

```text
RangeError: Maximum call stack size exceeded
```

---

# 7. Garbage Collection

JavaScript automatically manages memory using garbage collection.

Example:

```js
let user = {
    name: "Ayush"
};

user = null;
```

Initially:

```text
user ─────→ { name: "Ayush" }
```

After assigning `null`:

```text
user → null

{ name: "Ayush" }
       ↑
   no reference
```

The object becomes unreachable.

The garbage collector can eventually reclaim its memory.

---

# Stack vs Heap

| Stack                           | Heap                                           |
| ------------------------------- | ---------------------------------------------- |
| Manages execution/call stack    | Stores dynamically allocated data              |
| Function calls are managed here | Objects are commonly allocated here            |
| Follows LIFO for call stack     | No LIFO requirement                            |
| More structured                 | More flexible                                  |
| Limited size                    | Generally larger                               |
| Stack overflow can occur        | Heap memory can also be exhausted              |
| Automatically managed           | Garbage collection handles unreachable objects |

---

# Important Mental Model

```text
JavaScript Memory
│
├── Stack
│   ├── Function calls
│   └── Execution-related data
│
└── Heap
    ├── Objects
    ├── Arrays
    └── Dynamically allocated data
```

For beginner-level understanding:

```text
Primitive
→ value-like behavior

Object / Array / Function
→ reference-like behavior

Stack
→ execution / call stack

Heap
→ dynamically allocated data
```

> Do not treat "all primitives are physically stored in the stack and all objects are physically stored in the heap" as a strict JavaScript rule. The exact memory implementation is engine-dependent.

## Key Points

* The stack is primarily associated with execution and the call stack.
* The call stack follows LIFO.
* The heap is used for dynamically allocated data.
* Objects and arrays are commonly represented as heap-allocated data.
* Objects have reference-like behavior.
* Assigning a primitive generally copies its value.
* Assigning an object copies the reference to the same object.
* JavaScript automatically manages memory.
* Garbage collection can reclaim unreachable objects.
* Excessive recursive calls can cause a stack overflow.
* Stack vs heap is a useful mental model, not a strict JavaScript specification.
