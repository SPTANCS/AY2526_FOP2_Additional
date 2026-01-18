console.clear();
console.log("Rectangle Demo (USING Object Literals)");
console.log("--------------------------------------");

// Rectangle objects using object literals
const rect1 = {
    width : 10,
    height: 5,
    color : "Red",
    calculateArea: function () {
        return this.width * this.height;
    }
};

const rect2 = {
    width : 8,
    height: 8,
    color : "Blue",
    calculateArea: function() {
        return this.width * this.height;
    }
};

// Compare rectangles
console.log(`Rectangle 1 (${rect1.color}) area: ${rect1.calculateArea()}`);
console.log(`Rectangle 2 (${rect2.color}) area: ${rect2.calculateArea()}`);

if (rect1.calculateArea() > rect2.calculateArea()) {
    console.log("Rectangle 1 is bigger than Rectangle 2");
} else {
    console.log("Rectangle 2 is bigger than Rectangle 1");
}

console.log("--------------------------------------");

// Multiple rectangles stored as objects in an array
const rectangles = [
    { width: 4, height: 6, color: "Green" , calculateArea: function() { return this.width * this.height; }},
    { width: 7, height: 3, color: "Yellow", calculateArea: function() { return this.width * this.height; } },
    { width: 5, height: 5, color: "Purple", calculateArea: function() { return this.width * this.height; } }
];

// rectangles dietails
for (let i = 0; i < rectangles.length; i++) {
    const currecntRect =rectangles[i];

    console.log(`The ${currecntRect.color} Rectangle at position ${i} has area ${currecntRect.calculateArea()}`);
    console.log("----------------------------------");
}
