class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = []
        let result = new Array(temperatures.length).fill(0)

        for(let [i, temp] of temperatures.entries()){

            while(stack.length > 0 && 
            temp > temperatures[stack[stack.length - 1]]) {
                let lastIndex = stack.pop()
                result[lastIndex] = i - lastIndex;
            }
            
            stack.push(i)
        }
        return result;
    }
}
