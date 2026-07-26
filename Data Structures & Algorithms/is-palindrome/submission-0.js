class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(char) {
        return(
            (char >='a' && char <= 'z') ||
            (char >='A' && char <= 'Z') ||
            (char >='0' && char <= '9') 
        )
    }

    isPalindrome(s) {
        let clean = ''
        for (let l of s) {
           if(this.isAlphaNumeric(l)){
            clean += l.toLowerCase()
           }
        }
        return clean == clean.split("").reverse().join("")

    }

    
}
