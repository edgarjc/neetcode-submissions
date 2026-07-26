class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for (let num of tokens) {

        if (num === '+' || num === '-' || num === '*' || num === '/'){
                let a = stack.pop();
                let b = stack.pop();
                let value;

                if (num === '+') value = b + a;
                else if (num === '-') value = b - a;
                else if (num === '*') value = b * a;
                else if (num === '/') value = Math.trunc(b / a); // trunc toward 0

                stack.push(value);
            } else {stack.push(parseInt(num))}

        }
        return stack[0]
    }
    
}
