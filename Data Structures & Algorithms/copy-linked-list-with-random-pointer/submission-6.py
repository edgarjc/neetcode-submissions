"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        oldCopy = {None: None}

        curr = head 

        while curr: 
            copy = Node(curr.val)

            oldCopy[curr] = copy

            curr = curr.next


            # --- Trace ---
            # Iteration 1: cur was node1 (val=1)
            #   copy = Node{val:1, next:None, random:None}
            #   oldToCopy = {None: None, node1: copy1}
            #
            # Iteration 2: cur was node2 (val=2)
            #   copy = Node{val:2, next:None, random:None}
            #   oldToCopy = {None: None, node1: copy1, node2: copy2}
            #
            # Loop ends: cur.next was None on node2, so cur becomes None.

        curr = head # resets curr back to start of linkedlist 

        while curr: 
            copy = oldCopy[curr]

            #
            # IMPORTANT: this is NOT copy.next = cur.next.
            # The right side is evaluated first: cur.next is used only as
            # a lookup KEY (an original node), and oldToCopy[cur.next]
            # returns that node's COPY. So the real assignment ends up
            # being e.g. `copy.next = copy2`, never `copy.next = node2`.
            # This is what keeps the copy fully detached from the original
            # list instead of secretly reusing its pointers.
            copy.next = oldCopy[curr.next]

            # Set the copy's `random` to the COPY of cur's original random
            # (could point anywhere — forward, backward, or None — doesn't
            # matter, it's already in the map from Pass 1)
            copy.random = oldCopy[curr.random]

            curr = curr.next  # advance in the original list

        return oldCopy[head]

