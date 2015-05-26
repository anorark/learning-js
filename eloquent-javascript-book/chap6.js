// METHODS

// Methods are simply properties that hold function values.

var rabbit = {};
rabbit.speak = function(line) {
    console.log("The rabbit says '" + line + "'");
};
rabbit.speak("I'm alive.");

function speak(line) {
    console.log("The " + this.type + " rabbit says '" +
        line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.");

speak.apply(fatRabbit, ["Burp!"]);
speak.call({type: "old"}, "Oh my.");


// PROTOTYPES

// In addition to their set of properties, almost all objects also have a prototype. A prototype
// is another object that is used as a fallback source of properties. When an object gets a request
// for a property that it does not have, its prototype will be searched for the property, then the
// prototype’s prototype, and so on.

// Object.prototype -> Entity behind almost all objects

console.log(Object.getPrototypeOf({}) == Object.prototype); // → true
console.log(Object.getPrototypeOf(Object.prototype)); // → null

// Many objects don’t directly have Object.prototype as their prototype, but instead have another
// object, which provides its own default properties.
// Functions derive from Function.prototype.
// Arrays derive from Array.prototype.
console.log(Object.getPrototypeOf(function() {}) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);


var protoRabbit = {
    speak: function(line) {
        console.log("The " + this.type + " rabbit says '" +
            line + "'");
    }
};
var killerRabbit = Object.create(protoRabbit); // creating prototypes
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");


// CONSTRUCTORS

// The constructor will have its this variable bound to a fresh object, and unless it explicitly
// returns another object value, this new object will be returned from the call.
function Rabbit(type) { // Constructor name first-letter is capitalized
    this.type = type;
}

var redRabbit = new Rabbit("red");
var whiteRabbit = new Rabbit("white");
console.log(whiteRabbit.type);

// Constructors (in fact, all functions) automatically get a property named prototype, which by
// default holds a plain, empty object that derives from Object.prototype.
// Every instance created with this constructor will have this object as its prototype.

Rabbit.prototype.speak = function(line) {
    console.log("The " + this.type + " rabbit says '" +
        line + "'");
};
whiteRabbit.speak("Doom...");
redRabbit.speak("waaaa");

// It is important to note the distinction between the way a prototype is associated with a
// constructor (through its prototype property) and the way objects have a prototype (which can be
// retrieved with Object.getPrototypeOf). The actual prototype of a constructor is
// Function.prototype since constructors are functions. Its prototype property will be the prototype
// of instances created through it but is not its own prototype.


// OVERRIDING DERIVED PROPERTIES

// When you add a property to an object, whether it is present in the prototype or not, the
// property is added to the object itself, which will henceforth have it as its own property. If
// there is a property by the same name in the prototype, this property will no longer affect the
// object. The prototype itself is not changed.

Rabbit.prototype.teeth = "small";

console.log(whiteRabbit.teeth);
whiteRabbit.teeth = "long, sharp, and bloody";
console.log(whiteRabbit.teeth);
console.log(redRabbit.teeth);
console.log(Rabbit.prototype.teeth);

console.log(Object.prototype.toString == Array.prototype.toString);
console.log(Object.prototype.toString.call([1,2,3]));
console.log(Array.prototype.toString.call([1,2,3]));


function Animal() {
    this.breed = "general-breed";
    this.size = "10";
};

var cow = new Animal();
console.log(cow.breed);


// ENUMERABLE and NON-ENUMERABLE properties

// All properties that we create by simply assigning to them are enumerable. The standard
// properties in Object.prototype are all nonenumerable.

var map = {a: "aaa", b: "bbb"};

map.nonsense = "this-is-visible";
Object.defineProperty(Object.prototype, "hiddenNonsense",
    {enumerable: false, value: "hns"});

for (var name in map) console.log(name); // a, b, nonsense

console.log(map.hiddenNonsense);

console.log("hiddenNonsense" in map); // true
// hasOwnProperty method tells us whether the object itself has the property, without looking at its
// prototypes.
console.log(map.hasOwnProperty("hiddenNonsense")); // false

// Creating objects without any base prototypes
var mapWithObjAsPrototype = Object.create(Object);
console.log("toString" in mapWithObjAsPrototype); // true
var mapWithoutObjAsPrototype = Object.create(null);
console.log("toString" in mapWithoutObjAsPrototype); // false


// GETTERS AND SETTERS

var pile = {
    elements: ["eggshell", "orange peel", "worm"],
    get height() {
        return this.elements.length;
    },
    set height(value) {
        console.log("Ignoring attempt to set height to", value);
    },
    get width() {
        return "constant width";
    }
};

console.log(pile.height); // → 3
pile.height = 100; // → Ignoring attempt to set height to 100

console.log(pile.width);
pile.width = "this is a noop assignment";
console.log(pile.width);


// INHERITANCE

function Scrolling(dir) {
    this.direction = dir;
};
Scrolling.prototype.whatDirection = function () {
    return this.direction;
}

function HorizontalScrolling(dir) {
  Scrolling.call(this, dir);
};
HorizontalScrolling.prototype = Object.create(Scrolling.prototype);

function VerticalScrolling(dir) {
    Scrolling.call(this, dir);
};
VerticalScrolling.prototype = Object.create(Scrolling.prototype);

var scr = new Scrolling("RANDOM");
console.log(scr.whatDirection());

var h_scr = new HorizontalScrolling("HORIZONTAL");
console.log(h_scr.whatDirection());

var v_scr = new VerticalScrolling("VERTICAL");
console.log(v_scr.whatDirection());


// instanceof operator

console.log(scr instanceof Scrolling);
console.log(scr instanceof HorizontalScrolling);
console.log(scr instanceof VerticalScrolling);
console.log(h_scr instanceof HorizontalScrolling);
console.log(v_scr instanceof VerticalScrolling);
