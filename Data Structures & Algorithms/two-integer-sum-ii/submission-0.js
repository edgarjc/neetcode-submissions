class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let first = 0
        let last = numbers.length - 1 
        
        while (first < last) {
            let sum = numbers[first] + numbers[last]
            
            if (sum > target) {
                last--
            } else if (sum <target ){
                first++
            } else if (sum == target){
                return [first +1 , last + 1];
            } 
        }

    }
}
