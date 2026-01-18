console.clear();
console.log("Rectangle Demo (Using Class Instead of Object Literals)");
console.log("-------------------------------------------------------");


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

// Create rectangle objects using the function createRectangle
const rect1 = createRectangle(10, 5, "Red");
const rect2 = createRectangle(8, 8, "Blue");

// Use object methods
console.log(`Rectangle 1 (${rect1.color}) area: ${rect1.calculateArea()}`);
console.log(`Rectangle 2 (${rect2.color}) area: ${rect2.calculateArea()}`);

// Object-to-object interaction
if (rect1.isBigger(rect2)) {
  console.log("Rectangle 1 is bigger than Rectangle 2");
} else {
  console.log("Rectangle 2 is bigger than Rectangle 1");
}

console.log("-------------------------------------------------------");

// Multiple rectangles stored in an array
const rectangles = [
  createRectangle(4, 6, "Green"),
  createRectangle(7, 3, "Yellow"),
  createRectangle(5, 5, "Purple")
];

// Loop through rectangle objects
rectangles.forEach((rect, index) => {
  console.log(`The ${rect.color} Rectangle at position ${index} has area ${rect.calculateArea()}`);
  console.log("-------------------------------------------------------");
});
