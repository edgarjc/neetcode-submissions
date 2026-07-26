class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let length = 0

        for (let num of set) {
         if(!set.has(num) - 1 ) {
            let current = 0
            while(set.has(num + current)){
                current++
            }
            length = Math.max(length, current)
         }
        }

        return length
    }
}
