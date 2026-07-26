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

        # --- STEP 3: ZIP (merge the two halves together) ---
        first, second = head, prev   # first = head of first half, second = head of reversed second half

        while second:   # only need to check second — it's the same length or shorter
            tmp1, tmp2 = first.next, second.next   # save both "next" pointers before rewiring

            first.next = second     # weave: first half node points to second half node
            second.next = tmp1      # weave: second half node points back to next first half node

            first, second = tmp1, tmp2   # advance both pointers to their saved next nodes
        


        
        


        