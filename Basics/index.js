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