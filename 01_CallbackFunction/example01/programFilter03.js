
const ARRAY_SIZE = 5;
const numberArr  = new Array(ARRAY_SIZE);

for (let i = 0; i < numberArr.length; i++ ) {
    numberArr[i] = (Math.floor(Math.random() * 100) + 1);
}

console.clear();
console.log('Values in Array')
console.table(numberArr);

///////////////////////////////////////////////////////////////////////////////

function checkLessThan50(givenNumber) {
    // if (givenNumber < 50)
    //     return true;
    // else 
    //     return false;

    return (givenNumber < 50); // this is the same as the above if-else
}

function checkDivisibleBy3(givenNumber) {
    return (givenNumber % 3 == 0);
}

///////////////////////////////////////////////////////////////////////////////


function getNumberInArrayLessThan(givenArray, checkWithThisFunction) { // <-----
    let resultArray = [];

    for (let i = 0; i < givenArray.length; i++) {

        const isWhatIWant = checkWithThisFunction(givenArray[i]);   // <-----

        if (isWhatIWant) {
            resultArray.push(givenArray[i]);
        }
    }
    return resultArray;
}

function getNumberInArrayDivisibleBy(givenArray, checkWithThisFunction) { // <-----
    let resultArray = [];

    for (let i = 0; i < givenArray.length; i++) {

        const isWhatIWant = checkWithThisFunction(givenArray[i]);  // <-----
        
        if (isWhatIWant) {
            resultArray.push(givenArray[i]);
        }
    }
    return resultArray;
}


console.log('\nCalling getNumberInArrayLessThan with array numberArr and checkLessThan50 function as input to the function');
const outputArray1 = getNumberInArrayLessThan(numberArr, checkLessThan50); // <-----
console.log('Result is :');
console.table(outputArray1);

console.log('\nCalling getNumberInArrayDivisibleBy with array numberArr and checkDivisibleBy3 function as input to the function');
const outputArray2 = getNumberInArrayDivisibleBy(numberArr, checkDivisibleBy3); // <-----
console.log('Result is :');
console.table(outputArray2);
