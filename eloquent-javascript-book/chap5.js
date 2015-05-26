// HIGHER ORDER FUNCTIONS.

// function is also an object -- function can have its own methods & properties

// Every function in JavaScript has a number of attached methods, including
// toString(), call(), and apply()


var x = 10;
var o = { x: 15 };
function f(message)
{
    console.log(message);
    console.log(this.x);
}

f("invoking f", "UNUSEDCALL");
console.log("\n")

f.call(o /*this*/, "invoking f through apply", "UNUSED");
f.apply(o /*this*/, ["invoking f through apply", "UNUSED"]);

f.apply(null, ["invoking f through apply", "UNUSED"]);
f.call(null, "invoking f through apply", "UNUSED");

f.apply(undefined, ["invoking f through apply", "UNUSED"]);
f.call(undefined, "invoking f through apply", "UNUSED");


// call vs. apply - The apply() method is identical to call(), except apply()
// requires an array as the second parameter. The array represents the arguments
// for the target method."

// The bind method, which all functions have, creates a new function that will
// call the original function but with some of the arguments already fixed.
console.log("-----------------------");
var map = {
    hello: "hellofirst",
    world: "worldsecond",
    wow : "wowthird"
};
function times(n) {
    var ret = "";
    for (var i = 0; i < n; i++) ret = ret + this.hello + " ";
    return ret;
}
console.log(times(20));
console.log(times.bind(map)(10));
console.log(times.bind(null)(10));
console.log(times.bind(map, 10)(1));
console.log(times.bind(map, 10)(2));
console.log(times.bind(map)(2));

