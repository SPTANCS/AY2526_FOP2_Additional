
const ARRAY_SIZE = 5;
const numberArr  = new Array(ARRAY_SIZE);

for (let i = 0; i < numberArr.length; i++ ) {
    numberArr[i] = (Math.floor(Math.random() * 100) + 1);
}

console.clear();
console.log('Values in Array')
console.table(numberArr);

console.log('\nCalling inBuilt Filter function with a callback function on the fly as input');
const outputArray1 = numberArr.filter(givenNumber => givenNumber < 50 );   // <-----
console.log('number less than 50 - Result is :');
console.table(outputArray1);

console.log('\nCalling inBuilt Filter function with a callback function on the fly as input');
const outputArray2 = numberArr.filter(givenNumber => givenNumber % 3 == 0); // <-----
console.log('Number divisible by 3 - Result is :');
console.table(outputArray2);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
