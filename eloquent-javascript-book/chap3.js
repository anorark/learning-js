// FUNCTIONS

var square = function(x) {
	return x*x;
}

debug(square(2));

var makeNoise = function() {
  debug("Pling!");
};

makeNoise();

var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

debug(power(2, 4));


// scoping of var with functions

var x = "outside";

var f1 = function() {
  var x = "inside f1";
};
f1();
debug(x);
// → outside

var f2 = function() {
  x = "inside f2";
};
f2();
debug(x);
// → inside f2


// nested functions

var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

debug(landscape());


// Only functions create local scopes. Just { } will not.
var something = 1;
{
  var something = 2;
}
// something inside the block refers to the same variable as the one outside
// the block


var square = function(x) {return x*x;}
var disableSquaring = true;
if (disableSquaring) square = function(x) { /*no op*/}


// Function Declaration notation

squaredirect(10);
function squaredirect(x) {
  return x * x;
}
//This code works, even though the function is defined below the code that
//uses it.  
//
//function declarations are not part of the regular top-to-bottom
//flow of  control. They are conceptually moved to the top of their scope and
//can be  used by all the code in that scope.

function example() {
  function a() {} // Okay
  if (something) {
    function b() {} // Danger!
  }
}
// If you want your programs to behave consistently, only use this form of
// function-defining statements in the outermost block of a function or
// program.


// Optional arguments

// JavaScript is extremely broad-minded about the number of arguments you pass
// to a function. If you pass too many, the extra ones are ignored. If you
// pass too few, the missing parameters simply get assigned the value
// undefined.
function power(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

debug(power(4));
// → 16
debug(power(4, 3));
// → 64


// Closure

function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
debug(wrap1());
// → 1
debug(wrap2());
// → 2

// Being able to reference a specific instance of local variables in an
// enclosing function—is called closure. A function that “closes over” some
// local variables is called a closure.

// A good mental model is to think of the function keyword as “freezing” the
// code in its body and wrapping it into a package (the function value).

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
debug(twice(5));
// → 10


