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

// Q.2 Find the largest number in an array.
// [12, 5, 7, 99, 24] → 99

function maxValue(arr) {
    let max = arr[0] // Assuming first element is the largest

    for(i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i] // Updating max if we find a bigger value
        }
    }
    return max;
}

console.log(maxValue([12, 5, 7, 99, 24])); // 99

// Q.3 Reverse an array without using built-in methods.
// [1, 2, 3, 4] → [4, 3, 2, 1]

function reversedArr(arr) {
    let reversed = []; // initialize empty array

    for (i=arr.length-1; i>=0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reversedArr([1, 2, 3, 4]));

// Q.4 Count how many times a given number appears in an array.
// Array → [1, 2, 3, 2, 4, 2]

function countOccurrences(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  return count;
}

console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); 