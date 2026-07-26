class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        // Put all numbers in a Set for O(1) existence lookup
        const numSet = new Set(nums)

        // This will track the longest consecutive chain found so far
        let consecutive = 0 

        // Loop through every unique number in the set
        for (let num of numSet) {

            // If the number BEFORE this one doesn't exist,
            // it means THIS number is the start of a chain.
            if (!numSet.has(num - 1)) {

                // Start counting this chain with length 1 (the number itself)
                let length = 1

                // Keep checking num+1, num+2, num+3... while they exist
                // Each time we find the next number, increase the chain length
                while (numSet.has(num + length)) {
                    length++
                }

                // Update the longest chain if this chain is bigger
                consecutive = Math.max(consecutive, length)
            }
        }

        // After checking all possible starts, return the biggest chain length
        return consecutive
    }
}