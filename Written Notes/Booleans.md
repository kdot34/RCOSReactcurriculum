# BOOLEANS

* JS has a boolean type
* Possible values are true and false
* Any value can be converted to a boolean according to the following rules:
1. false, 0, empty strings (""), NaN, null, undefined all become false
2. All other values become true
 * Can perform this conversion explicitly using the Boolean() function:
 ```javascript
 Boolean(' '); // false
 Boolean(234); // true
 ```
 
