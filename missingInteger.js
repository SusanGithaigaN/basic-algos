// find the missing number in an array of integers, take an array as args
function missingInteger(arr){
    // calculate the total count of numbers in the array
    const n = arr.length + 1;
    // calculate the expected sum of al numbers in array
    const total = (n * (n + 1)) / 2;
    // calculate actual sum of numbers currently in the array
    const actualTotal = arr.reduce((sum, num) => sum + num, 0);
    // find value of missing number
    const missingNumber = actualTotal - total;
    return missingNumber;
}

// test case
const nums = [10, 12, 13, /* ... */, 84, 123];
const missingNumber = missingInteger(nums);
// return missing num
console.log(`${missingNumber} is the missing number in the array: [${nums}]`)