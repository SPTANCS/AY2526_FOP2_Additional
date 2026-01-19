const Rectangle = require("./Rectangle");

// Box is a Rectangle with an additional depth
class Box extends Rectangle {
  constructor(width, height, depth, color) {
    // Call the parent (Rectangle) constructor
    super(width, height, color);

    this.depth = depth; // New property unique to Box
  }

  // New behavior specific to Box
  calculateVolume() {
    return this.width * this.height * this.depth;
  }

  // Compare volume with another Box
  // override isBigger method to compare volumes instead of areas
  isBigger(otherBox) {
    return this.calculateVolume() > otherBox.calculateVolume();
  }  
}

module.exports = Box;
