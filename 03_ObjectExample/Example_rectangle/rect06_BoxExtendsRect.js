const Box = require("./classes/Box");
const Rectangle = require("./classes/Rectangle");

console.clear();
console.log("Box Usage Example");
console.log("-----------------");

// Create a Box object
const box1 = new Box(4, 5, 3, "Brown");

// Use inherited method from Rectangle
console.log(`Box base area: ${box1.calculateArea()}`);

// Use Box-specific method
console.log(`Box volume: ${box1.calculateVolume()}`);

// Access properties
console.log(`Box color: ${box1.color}`);
console.log(`Box depth: ${box1.depth}`);

console.log('A box1 is considered a Rectangle as it is a Sub-Class of the Rectangle Class : ' + (box1 instanceof Rectangle));
console.log('box1 is a box : ' + (box1 instanceof Box));