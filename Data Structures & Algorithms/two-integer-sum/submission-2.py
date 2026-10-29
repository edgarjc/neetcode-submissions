class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        #Need to Find the complement of the number then see if i saw that number before then return with the position
        #Enumerate, used to get position and num
        saw= {}

        for i, num in enumerate(nums):
            diff = target - num
            if diff in saw: 
                return [saw[diff],i]
            saw[num] = i
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

