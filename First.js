
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/



/**
 * Finds two numbers in the given array that sum up to the target value.
 * @param {number[]} nums - The array of numbers.
 * @param {number} target - The target value.
 * @return {number[]} - An array containing the indices of the two numbers.
 */
function twoSum(nums, target) {
    // Iterate through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // Iterate through each number after the current number
        for (let j = i + 1; j < nums.length; j++) {
            // Check if the sum of the current number and the next number is equal to the target
            if (nums[i] + nums[j] === target) {
                // Return the indices of the two numbers
                return [i, j];
            }
        }
    }
}


/* This is Another Solution - a better one  */ 

var twoSum = function (nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(nums[i], i);
    }
};