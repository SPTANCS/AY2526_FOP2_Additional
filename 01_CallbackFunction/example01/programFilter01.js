
const ARRAY_SIZE = 5;
const numberArr  = new Array(ARRAY_SIZE);

for (let i = 0; i < numberArr.length; i++ ) {
    numberArr[i] = (Math.floor(Math.random() * 100) + 1);
}

console.clear();
console.log('Values in Array')
console.table(numberArr);


function getNumberInArrayLessThan(givenArray, maxNumber) {
    let resultArray = [];

    for (let i = 0; i < givenArray.length; i++) {
        if (givenArray[i] < maxNumber) {
            resultArray.push(givenArray[i]);
        }
    }
    return resultArray;
}

function getNumberInArrayDivisibleBy(givenArray, num) {
    let resultArray = [];

    for (let i = 0; i < givenArray.length; i++) {
        if (givenArray[i] % num == 0) {
            resultArray.push(givenArray[i]);
        }
    }
    return resultArray;
}


console.log('\nCalling getNumberInArrayLessThan with array numberArr and 50 as input to the function');
const outputArray1 = getNumberInArrayLessThan(numberArr, 50);
console.log('Result is :');
console.table(outputArray1);

console.log('\nCalling getNumberInArrayDivisibleBy with array numberArr and 3 as input to the function');
const outputArray2 = getNumberInArrayDivisibleBy(numberArr, 3);
console.log('Result is :');
console.table(outputArray2);
