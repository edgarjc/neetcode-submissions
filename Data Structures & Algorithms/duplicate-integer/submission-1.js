class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashset = new Set();
       
        for (const n of nums) {
            if(hashset.has(n)){
                return true;
            }
            hashset.add(n);
        }
        return false;
        
    }
}
