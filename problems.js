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

  for (i = 0; i < arr.length; i++) {
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

  for (i = arr.length - 1; i >= 0; i--) {
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

// Q.9 Write a function that takes an array of numbers and returns the first element of the array.

function getFirst(arr) {
  return arr[0];
}

console.log(getFirst([10, 20, 30]));

// Q.10 Group Anagrams (LeetCode 49)

function groupAnagrams(strs) {
  // using a map to store data
  let map = new Map();

  for (let word of strs) {

    let sortedKey = word.split('').sort().join('');

    if (!map.has(sortedKey)) {
      map.set(sortedKey, []);
    }
    map.get(sortedKey).push(word);
  }
  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Q.11 Container With Most Water

const maxArea = function(height) {
    let maxWater = 0;
    let left = 0;                  // Pointer at the start
    let right = height.length - 1; // Pointer at the end

    while (left < right) {
        // 1. Calculate current area
        // Height is limited by the shorter wall (Math.min)
        // Width is distance between pointers (right - left)
        const currentHeight = Math.min(height[left], height[right]);
        const currentWidth = right - left;
        
        const area = currentHeight * currentWidth;

        // 2. Update maxWater if we found a new best
        maxWater = Math.max(maxWater, area);

        // 3. The Strategy: Move the shorter wall pointer inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};

// Q.12 3Sum

const threeSum = function(nums) {
    const results = [];
    
    // Step 1: Sort! (Critical for Two Pointers to work)
    // We need logic, not chaos.
    nums.sort((a, b) => a - b); 

    // Step 2: Iterate through the array (This is our "Fixed" number 'a')
    for (let i = 0; i < nums.length; i++) {
        
        // Optimization: If the fixed number is > 0, we can never sum to 0
        // because the rest are also positive (since we sorted).
        if (nums[i] > 0) break;

        // Duplicate Check: If this number is same as previous, skip it.
        // We don't want duplicate triplets.
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Step 3: The "Two Pointer" Problem
        // We need to find two numbers that sum to (0 - nums[i])
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // Found one!
                results.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for the pointers too
                // (e.g., if we have [-1, -1, 2], we don't want to process the second -1)
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Move both pointers inward
                left++;
                right--;
            } else if (sum < 0) {
                // Sum is too small -> We need bigger numbers -> Move Left pointer up
                left++;
            } else {
                // Sum is too big -> We need smaller numbers -> Move Right pointer down
                right--;
            }
        }
    }

    return results;
};

// Q.13 two sum 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;

        if (map.has(diff)) {
            return [map.get(diff), i]; 
        }

        map.set(num, i);
    }
};