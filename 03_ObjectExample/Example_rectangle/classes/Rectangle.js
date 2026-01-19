// Rectangle class represents a rectangle object with width, height, and color properties
class Rectangle {
  // Constructor initializes a new Rectangle with given width, height, and color
  constructor(width, height, color) {
    this.width  = width;  // Store the width property
    this.height = height; // Store the height property
    this.color  = color;  // Store the color property
  }

  // Method to calculate the area of the rectangle (width × height)
  calculateArea() {
    return this.width * this.height;
  }

  // Method to compare if this rectangle is bigger than another rectangle
  // Returns true if this rectangle's area is greater than the other rectangle's area
  isBigger(otherRectangle) {
    return this.calculateArea() > otherRectangle.calculateArea();
  }
}

// Explanation about the "this" keyword:
// "this" refers to the current instance of the Rectangle object
// It allows each Rectangle object to have its own separate width, height, and color values
// For example: if rect1 and rect2 are two Rectangle objects, rect1.width is different from rect2.width

// Export the Rectangle class so it can be used in other files
module.exports = Rectangle;


