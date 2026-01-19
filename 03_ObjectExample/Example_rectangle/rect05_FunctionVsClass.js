// given rect03_withFunction.js and rect04_withClass.js
// rect03_withFunction.js seem to work well, why then should be consider Classes?

const Rectangle = require("./classes/Rectangle");

function createRectangle(width, height, color) {
  return {
    width,
    height,
    color,
    calculateArea: function () {
      return this.width * this.height;
    },
    isBigger: function (otherRectangle) {
      return this.calculateArea() > otherRectangle.calculateArea();
    }
  }
}

const rect1 = createRectangle(10, 5, "Red");
const rect2 = new Rectangle(10, 5, "Red");

console.clear();
console.log('rect1 is Rectangle ? ' + (rect1 instanceof Rectangle)); // false
console.log('rect2 is Rectangle ? ' + (rect2 instanceof Rectangle)); // true

// defensive check is possible with classes.
// this way we are sure that calculateArea() will be available for sure
function printArea(shape) {
  if (!(shape instanceof Rectangle)) {
    console.log("Error: Not a Rectangle!");
    return;
  }
  console.log('Area is ' + shape.calculateArea());
}

printArea("Just a String");
printArea({radius: 5});
printArea(rect2);
