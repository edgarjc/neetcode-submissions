# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:

        prev = None
        curr = head


        while curr:
            next = curr.next #Bookmark of next ListNode

            curr.next = prev #Saying this values next ListNode is the previous one, first one is null since wil be end of list 

            prev = curr #prev now == current ListNode
            curr = next #curr now moves to the next value
        return prev
        