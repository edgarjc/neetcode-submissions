class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
     productExceptSelf(nums) {
    const output = new Array(nums.length).fill(1); // Create output array filled with 1s

    // First loop: calculate prefix products (everything to the LEFT of current index)
    for (let i = 1; i < nums.length; i++) {        // Start from 1 because index 0 has no left side
      output[i] = output[i - 1] * nums[i - 1];     // Multiply previous prefix by the previous element
    }

    // Second loop: multiply by postfix products (everything to the RIGHT of current index)
    let postfix = 1;                               // Postfix starts as 1 (no elements to right at end)
    for (let i = nums.length - 1; i >= 0; i--) {   // Loop backwards
      output[i] *= postfix;                        // Multiply current prefix value by postfix
      postfix *= nums[i];                          // Update postfix by multiplying current element
    }

    return output;                                 // Return the final result array
  }
}
