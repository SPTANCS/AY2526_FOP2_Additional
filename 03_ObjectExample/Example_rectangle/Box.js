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
}

module.exports = Box;
