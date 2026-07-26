# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        slow, fast = head, head

        while fast and fast.next: 
            slow = slow.next
            fast = fast.next.next

        fast = slow.next #Telling fast where second part of list starts
        slow.next = None #Breaking the first half of list so doesnt connect to second half

        prev = None
        curr = fast #points current to start of fast
        
        while curr:
            next = curr.next

            curr.next = prev

            prev = curr
            curr = next 

        first, second = head, prev
        while second: #Only fast since its the same or shorter half
            tmp1, tmp2 = first.next, second.next

            first.next = second

            second.next  = tmp1
            first, second = tmp1, tmp2


        


        

        


        
        


        