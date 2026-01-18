console.clear();
console.log("Rectangle Demo (WITHOUT Objects)");
console.log("----------------------------------");

// Rectangle data stored separately
const rect1Width  = 10;
const rect1Height = 5;
const rect1Color  = "Red";

const rect2Width  = 8;
const rect2Height = 8;
const rect2Color  = "Blue";

// Functions operate on raw data
function calculateArea(width, height) {
    return width * height;
}

function isBigger(rect1Area, rect2Area) {
    return rect1Area > rect2Area;
}

// Calculate areas
const rect1Area = calculateArea(rect1Width, rect1Height);
const rect2Area = calculateArea(rect2Width, rect2Height);

// Display results
console.log(`Rectangle 1 (${rect1Color}) area: ${rect1Area}`);
console.log(`Rectangle 2 (${rect2Color}) area: ${rect2Area}`);

if (isBigger(rect1Area, rect2Area)) {
    console.log("Rectangle 1 is bigger than Rectangle 2");
} else {
    console.log("Rectangle 2 is bigger than Rectangle 1");
}

console.log("----------------------------------");

// Multiple rectangles using parallel arrays
const widths = [4, 7, 5];
const heights = [6, 3, 5];
const colors = ["Green", "Yellow", "Purple"];

// rectangles dietails
for (let i = 0; i < widths.length; i++) {
    const area = calculateArea(widths[i], heights[i]);

    console.log(`The ${colors[i]} Rectangle at position ${i} has area ${area}`);
    console.log("----------------------------------");
}
