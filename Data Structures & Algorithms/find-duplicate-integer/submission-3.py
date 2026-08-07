class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        slow, fast = 0, 0

        #Used to find number thats the same
        while True: 
            slow = nums[slow] #starts at 0 right
            fast = nums[nums[fast]] #so hits the position after slow

            if slow == fast:  
                break;

        slow2 = 0
        while slow != slow2: 
            slow = nums[slow]
            slow2 = nums[slow2]
        return slow


