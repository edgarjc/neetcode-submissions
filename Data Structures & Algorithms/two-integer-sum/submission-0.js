class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            const remainder = target - nums[i];

            if (nums.includes(remainder) && nums.indexOf(remainder) != i) {
                return [i, nums.indexOf(remainder)]
            }
        }
            
    }
}
