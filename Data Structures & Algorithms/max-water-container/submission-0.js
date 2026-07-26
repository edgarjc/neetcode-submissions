class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0
        let left = 0
        let right = heights.length - 1

            while(left < right){
                let small = Math.min(heights[left], heights[right])

                area = Math.max(area, (right - left) * small)
                if(small == heights[left]){
                    left++
                } else if (small == heights[right]) {
                    right--
                }
            }  
        
        return area;
    }
}
