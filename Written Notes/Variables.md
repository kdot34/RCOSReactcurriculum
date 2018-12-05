# VARIABLES

* New variables in JS are declared using one of 3 keywords:
1. let
2. const
3. var

## Let
* Allows you to declare block-level variables
* The declared variable is available from the block it is enclosed in
```javascript
let a;
let name = 'Simon';
```
* The following is an example of scope with a variable declared with let:
```javascript
// myLetVariable is *not* visible out here
for (let myLetVariable = 0; meLetVariable < 5; myLetVariable++) {
//myLetVariable is only visible in here
}
// myLetVariable is *not* visible out here
```

## Const
* Allows you to declare variables whose values are never intended to change
* The variable is available from the block it is declared in
```javascript
const Pi = 3.14; // variable Pi is set
Pi = 1; // will throw an error because you cannot change a constant variable
```

## Var
* Most common declarative keyword
* Does not have the restrictions that the other two keywords have
* A variable declared with the var keyword is available from the function it is declared in
```javascript
var a;
var name = 'Simon';
```
* An example of scope with a variable declared with var:
```javascript
// myVarVariable *is* visible out here
for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
// myVarVariable is visible to the whole function
}
// myVarVariable *is* visible out here
```
* If you declare a variable without assigning any value to it, its type is undefined
