class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        hash={}

        #Add number youre looking at to hash
        #If You have seen it, the its a duplicate and return True
        #Never seen in loop then return false outside of loop
        for i, num in enumerate(nums):
            if num in hash:
                return True
            hash[num] = num

        return False
        