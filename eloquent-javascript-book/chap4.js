// DATA SETS


// ARRAY
var list = [1, 2, 3, 4, 11];
console.log(list[0]);
console.log(list[-2]); // undefined


// PROPERTY

// Almost all JavaScript values have properties. The exceptions are null and
// undefined. If you try to access a property on one of these nonvalues, you
// get an error.

// Both value.x and value[x] access a property on value—but not necessarily
// the same property. The difference is in how x is interpreted. When using a
// dot, the part after the dot MUST be a valid variable name, and it DIRECTLY
// names the property. When using square brackets, the expression between the
// brackets is EVALUATED to get the property name. Whereas value.x fetches the
// property of value named “x”, value[x] tries to evaluate the expression x
// and uses the result as the property name.

// Array indices are just properties. Cant be accessed with "." because they
// are not valid variable names.

var doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH

// Properties that contain functions are generally called METHODS of the value
// they belong to.

var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
// → ["Mack", "the", "Knife"]
console.log(mack.join(" "));
// → Mack the Knife
console.log(mack.pop());
// → Knife


// OBJECTS

// Values of the type object are arbitrary collections of properties, and we
// can add or remove these properties as we please.

var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running",
           "television"],
  "touched tree": "Touched a tree"           
};
console.log(day1.squirrel);
day1.newprop = "this adds a new property";
console.log("squirrel" in day1); // true
delete day1.squirrel;
console.log("squirrel" in day1); // false

day1.events = undefined; // does not delete the property
console.log("events" in day1); // true
delete day1.events;
console.log("events" in day1); // false

// array of objects
var journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break",
            "peanuts", "beer"],
   squirrel: true},
];

// numbers, strings, and Booleans, are all immutable
// object properties are immutable

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};
console.log(object1 == object2); // → true
console.log(object1 == object3); // → false
// no deep comparison of objects directly built-in javascript

// objects as maps

var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map); // → true

console.log(map.pizza); // → -0.069
console.log(map["pizza"]); // → -0.069
console.log(map["touched tree"]); // → -0.081

// iterating over ALL object properties
for (var k in map) {
	console.log(k + " -> " + map[k]);	
}

var arr = []
for (var k in arr) {
	console.log(k);	
}


// Values of type string, number, and Boolean are not objects, and though the
// language doesn’t complain if you try to set new properties on them, it
// doesn’t actually store those properties. The values are immutable and
// cannot be changed.

// Whenever a function is called, a special variable named arguments is added
// to the environment in which the function body runs.

function argumentCounter() {
  console.log("You gave me " + arguments.length + " arguments.");
  for (var i = 0; i < arguments.length; i++) {
  	console.log(arguments[i]);
  }
}
argumentCounter("Straw man", "Tautology", "Ad hominem");
argumentCounter();

// The global scope, the space in which global variables live, can also be
// approached as an object in JavaScript. Each global variable is present as a
// property of this object. In browsers, the global scope object is stored in
// the window variable.
var myVar = 10;
var obj = {ten: 10, twenty: 20};
//console.log("myVar" in window); // → true
//console.log(window.myVar); // → 10 
console.log(typeof myVar); // -> number
console.log(typeof obj); // -> object

console.log(typeof null); // -> object
console.log(typeof undefined); // -> undefined
