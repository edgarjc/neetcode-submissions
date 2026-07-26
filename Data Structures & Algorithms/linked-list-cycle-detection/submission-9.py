# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        short, fast = head, head

        while fast and fast.next:
            short = short.next
            fast = fast.next.next

            if short == fast: 
                return True

        return False