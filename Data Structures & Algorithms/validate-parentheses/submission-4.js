class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for(let c of s) {
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c)
         }  else if(closeToOpen[c]) {
            if (stack.length == 0) return false;
            if (stack.pop() !== closeToOpen[c]) return false;
         }
        }
        return stack.length === 0;
    }
}
