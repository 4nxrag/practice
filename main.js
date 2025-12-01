// Q.1 Given an array of numbers, return the sum of all elements.
// [1, 2, 3, 4] → 10

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10
