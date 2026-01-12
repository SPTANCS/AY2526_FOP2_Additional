
const ARRAY_SIZE = 5;
const numberArr  = new Array(ARRAY_SIZE);

for (let i = 0; i < numberArr.length; i++ ) {
    numberArr[i] = (Math.floor(Math.random() * 100) + 1);
}

console.clear();
console.log('Values in Array')
console.table(numberArr);

function myFilter(givenArray, checkWithThisFunction) { 
    let resultArray = [];

    for (let i = 0; i < givenArray.length; i++) {

        const isWhatIWant = checkWithThisFunction(givenArray[i]);

        if (isWhatIWant) {
            resultArray.push(givenArray[i]);
        }
    }
    return resultArray;
}

console.log('\nCalling getNumberInArrayLessThan with array numberArr and a callback function on the fly as input to the function');
const outputArray1 = myFilter(numberArr, givenNumber => givenNumber < 50 );   // <-----
console.log('Result is :');
console.table(outputArray1);

console.log('\nCalling getNumberInArrayDivisibleBy with array numberArr and a callback function on the fly as input to the function');
const outputArray2 = myFilter(numberArr, givenNumber => givenNumber % 3 == 0); // <-----
console.log('Result is :');
console.table(outputArray2);
