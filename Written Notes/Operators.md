# OPERATORS

* JavaScript's numeric operators are +, -, asterisk, /, and % which is the remainder operator
* += and -= exist
* ++ and -- increment and decrement
* + can do string concatenation
* If you add a string to a number everything is converted to string
 * Adding an empty string to something is a useful way of convertinf it to a string itself
* <, >, <=, >= for comparison
* The double-equals operator performs type coercion if you give it diff types
```javascript
123 == '123'; // true
1 == true; // true
```
 * To avoid this, use the triple-equals operator
 ```javascript
 123 === '123'; // false
 1 === true; // false
 ```
* There are also != and !== operators
* JS aslo has bitwise operations
