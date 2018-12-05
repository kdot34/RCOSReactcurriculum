# OBJECTS

* JS objects can be thought of as name-value pairs (like dicts in python, hash tables in C++)

* 2 basic ways to create an empty object:
(1)
```javascript
var obj = new object();
```
(2)
```javascript
var obj = {};
```

* Example:
```javascript
var obj = {
  name: 'Carrot',
  for: 'Max', // 'for' is a resered word, use _for instead
  details: {
    color: 'orange',
    size: 12
  }
};
```
* Attribute access can be chained together
```javascript
obj.details.color; // orange
obj['details']['size']; // 12
```
* The following example creates an object prototype, Person and an instance of that prototype, you
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// Define an object
var you = new Person('You', 24);
// We are creating a new person names "you" aged 24
```
