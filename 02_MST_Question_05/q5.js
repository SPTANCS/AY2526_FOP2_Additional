// Seed Data -------------------------------------------------
const studentClasses = [
  {
    className: "DIT 1C013",
    students: [
      { id: "S101", name: "Amy Tan", attendance: 95 },
      { id: "S102", name: "John Lee", attendance: 80 },
      { id: "S103", name: "Nur Izzah", attendance: 88 },
      { id: "S104", name: "Kelvin Ong", attendance: 92 },
      { id: "S105", name: "Rachel Lim", attendance: 77 },
      { id: "S106", name: "Chloe Koh", attendance: 83 },
      { id: "S107", name: "Syafiq Hamid", attendance: 97 },
    ],
  },
  {
    className: "DIT 1D014",
    students: [
      { id: "S201", name: "Marcus Chia", attendance: 91 },
      { id: "S202", name: "Priya Nair", attendance: 84 },
      { id: "S203", name: "Daniel Wong", attendance: 76 },
      { id: "S204", name: "Zara Lim", attendance: 89 },
      { id: "S205", name: "Benjamin Tan", attendance: 94 },
      { id: "S206", name: "Wong Hui Ling", attendance: 72 },
    ],
  },
  {
    className: "DIT 1F015",
    students: [
      { id: "S301", name: "Adrian Goh", attendance: 90 },
      { id: "S302", name: "Mei Xiang", attendance: 85 },
      { id: "S303", name: "Justin Ng", attendance: 78 },
      { id: "S304", name: "Elaine Lee", attendance: 88 },
      { id: "S305", name: "Tan Jia Hao", attendance: 82 },
      { id: "S306", name: "Nurul Aisyah", attendance: 96 },
      { id: "S307", name: "Chen Rui", attendance: 93 },
      { id: "S308", name: "Kumar Raj", attendance: 65 },
    ],
  },
];

// Complete the Function 1: getAttendanceBelow --------------------------
function getAttendanceBelow(givenClass, givenPercent) {
  /* TODO: Add code here */
  const result = new Map();

//  for (const tempClass of givenClass) {
  for (let i = 0; i < givenClass.length; i++) { // iterate through each class
    const tempClass = givenClass[i];            // get the current class
    const students  = tempClass.students;       // get the students of the current class
    
    // filter students with attendance below givenPercent
    const lowAttendance = students.filter((student) => student.attendance < givenPercent);

    // add to result map with className as key and lowAttendance array as value
    result.set(tempClass.className, lowAttendance);
  }
  return result;
}

// Complete the Function 2: lowestClassAverage --------------------------
function lowestClassAverage(givenClass) {
  /* TODO: Add code here */
  let lowest = null;

  //for (const tempClass of givenClass) {
  for (let i = 0; i < givenClass.length; i++) { // iterate through each class
    const tempClass = givenClass[i];          // get the current class  
    const students  = tempClass.students;     // get the students of the current class
    
    // calculate the total attendance of the class
    // Use reduce to accumulate attendance: 'sum' starts at 0 and we add each student's attendance
    // The final 'total' is the sum of attendance for all students in the class
    const total = students.reduce((sum, student) => sum + student.attendance, 0);

    // calculate the average attendance of the class
    const avg = total / students.length;

    // check if this class has the lowest average attendance
    if (lowest == null || avg < lowest.averageAttendance) {
      lowest = {  // update lowest with current class details
        className: tempClass.className, 
        averageAttendance: avg.toFixed(2), // format to 2 decimal places
      };
    }
  }
  return lowest;
}

// Complete the Function 3: displayMapClasses ---------------------------
function displayMapClasses(mapClasses) {

  // Map documentation
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

  /* TODO: Add code here */
  for (const [studentClasses, students] of mapClasses) { // iterate through each entry in the map
    console.log(`Student Class ${studentClasses}`);

    for (let i = 0; i < students.length; i++) {     // iterate through each student in the class  
      const student = students[i];                  // get the current student
      console.log(`Attendance:${student.attendance}\t Student: ${student.id} ${student.name}\t`);
    }

    // Alt Soln 1:
    // for (let i = 0; i < students.length; i++) {
    //   const {id, name, attendance} = students[i];
    //   console.log(`Attendance:${attendance}\t Student: ${id} ${name}\t`);
    // }
    
    // Alt Soln 2:
    // for (const { id, name, attendance } of students) {
    //   console.log(`Attendance:${attendance}\t Student: ${id} ${name}\t`);
    // }

    console.log();
  }
}

// Testing Case Section --------------------------------------------
console.clear();
// Test displayMapClasses()
// Convert studentClasses to Map
const classMap = new Map(
  studentClasses.map((cls) => [cls.className, cls.students])
);

console.log("=== All Class List ===");
displayMapClasses(classMap);

// Test getAttendanceBelow()
console.log("=== Students with Attendance Below 85% ===");
const below85 = getAttendanceBelow(studentClasses, 85);

console.log(below85);

// Test lowestClassAverage()
console.log("\n=== Class with Lowest Average Attendance ===");
const lowestAvg = lowestClassAverage(studentClasses);
console.log(`The class with the lowest attendance is ${lowestAvg.className} at ${lowestAvg.averageAttendance}%`);
