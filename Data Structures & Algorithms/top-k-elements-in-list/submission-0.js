class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
       
        for (let n of nums) {
            if (!count[n]){
                count[n] = 1
            } 
            count[n] += 1;

        }
        // Sort by frequency and return top k
        return Object.entries(count)              // [[num, freq], ...]
            .sort((a, b) => b[1] - a[1])          // Sort descending by freq
            .slice(0, k)                          // Take top k
            .map(([num]) => Number(num));      }
}
