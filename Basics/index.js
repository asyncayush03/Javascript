/* 
let a = 22;
console.log(a);
// let a = 23 ;
// console.log(a); -------> will give redeclartion error because we are trying to declare the same variable 'a' again using 'let'. In JavaScript, 'let' does not allow redeclaration of the same variable within the same scope.


const val = 26;
console.log(val);
// val = 23; -------> will give assignment error because we are trying to reassign a value to a constant variable 'val'. In JavaScript, 'const' does not allow reassignment of the variable once it has been assigned a value.

// const val = 25; -------> will give redeclaration error because we are trying to declare the same variable 'val' again using 'const'. In JavaScript, 'const' does not allow redeclaration of the same variable within the same scope.

var b = 24;
console.log(b);
var b = 25;
console.log(b); // This will work because 'var' allows redeclaration of the same variable within the same scope. However, it is generally recommended to use 'let' or 'const' instead of 'var' to avoid potential issues with variable hoisting and scope.

ex();
function ex(){
    console.log("This is an example of an arrow function.");
}
*/
// stack memory is mainly used by primitive data types in java. Here variables are stored in stack memory. Stack memory is a region of memory that stores temporary data, such as function call frames and local variables. When a function is called, a new frame is created on the stack to hold the function's local variables and parameters. When the function returns, the frame is removed from the stack, and the memory is freed up for reuse. Primitive data types in Java, such as int, float, boolean, and char, are typically stored in stack memory because they have a fixed size and can be allocated and deallocated quickly.

/*
let a = 21;
let b = a;
console.log(a); // 21
console.log(b); // 21
b = 23;
console.log(a); // 21
console.log(b); // 23 -> because now it is a new variable and it is not linked to the previous variable 'a'. When we assign the value of 'a' to 'b', a copy of the value is made, and 'b' becomes a separate variable. Therefore, when we change the value of 'b', it does not affect the value of 'a'. 

//heap memory is mainnly used by non primitive data types. here actual data is being shared between variables, not just a copy. 


*/
let obj1 = {
    "name": "John",
    "age": 30
};
let obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2.age = 31;
console.log(obj1);
console.log(obj2); // both obj1 and obj2 will have the same value because they are pointing to the same object in memory. When we assign obj1 to obj2, we are not creating a new object, but rather creating a reference to the same object in memory. Therefore, when we change the value of obj2.age, it also changes the value of obj1.age because they are both referencing the same object.

//NOTE: In javascript garbage collection is automatic. 