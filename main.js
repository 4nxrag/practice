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

// Q.5 Write a function that takes a number and returns "even" or "odd"

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(checkEvenOdd(7)); // odd

// Q.6 Take a string and return how many vowels it has.

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Anurag")); // 3

// Q.7 Take an array and return a new array with only even numbers.

function filterEven(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(filterEven([1, 2, 3, 4, 5, 6])); // [2,4,6]

// Q.8 Remove duplicates from an array and return a new array with unique values.

function removeDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// Output: [1, 2, 3, 4, 5]
