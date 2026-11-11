# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.best = 0

        def height(node): 
            if not node:
                return 0
            left = height(node.left)
            right = height(node.right)

            self.best = max(self.best, left + right)   # longest path bending here
            return 1 + max(left, right)                # height to hand back up
        height(root)
        return self.best

