# CONTROL STRUCTURES

* JS has similar control structures to other languages in C family
* Conditional statements are supported by if and else
```javascript
var name = 'kittens';
if (name == 'puppies') {
  name+='woof';
} else if (name == 'kittens') {
  name+='meow';
} else {
  name+='!';
}
name == 'kittens meow';
```
* JS has while and do-while loops
 * while = basic looping
 * do-while = you wish to ensure that the body of the loop is executed at least once
 ```javascript
 while (true) {
   // an infinite loop!
 }
 var input;
 do {
   input = get_input();
 } while (inputIsNotValid(input));
 ```
* JavaScript's for loop is the same as in C
```javascript
for (var i = 0; i<5; i++) {
  /// Will execute 5 times
}
```

* for...of
```javascript
for (let value of array) {
  // do something with value
}
```

* for...in
```javascript
for (let property in object) {
  // do something with object property
}
```

* Switch statement can be used for multiple branchs based on a number or string
```javascript
switch (action) {
  case 'draw':
     drawIt();
     break;
  case 'eat':
     eatIt();
     break;
  default:
     doNothing();
}
```
