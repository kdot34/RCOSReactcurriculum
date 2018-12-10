# ARRAYS

* Arrays in JS are a special type of object
  > They work much like regular objects, but they have a property called 'length'
  > Always one more than they highest index

* One way of creating:
```javascript
var a = new Array()
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
a.length; // 3
```
* A more convenient way:
```javascript
var a = ['dog', 'cat', 'hen']
a.length; //3
```

* Note that array.length isn't always the # of items in the array
```javascript
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101
```

* Array Methods
  (1) a.toString()
  (2) a.toLocalString()
  (3) a.concat(item1[, item2[, ...[, itemN]]])
  (4) returns a new array with the items added to it
  (5) a.join(sep)
  (6) a.pop()
  (7) a.push(item1,...,itemN)
  (8) a.reverse()
  (9) a.shift()
  (10) a.slice(start[, end])
      returns a sub array
  (11) a.sort([cmpfn])
      takes optional comparison function
  (12) a.splice(start, delcount[, item1[, ..[, itemN]]])
  (13) a.unshift(item1[, item2[, ...[, itemN]]])
