const ARRAY_SIZE = 15;
const numberArr  = new Array(ARRAY_SIZE);

for (let i = 0; i < numberArr.length; i++ ) {
    numberArr[i] = (Math.floor(Math.random() * 100) + 1);
}

console.clear();
console.table(numberArr);

const resultArr = numberArr.filter((num) => num % 2 == 0).filter((num) => num > 50);

console.table(resultArr);