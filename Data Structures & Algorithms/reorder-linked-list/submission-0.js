class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head              // slow pointer, starts at head — will end up at the middle
        let fast = head              // fast pointer, starts at head — moves 2x speed

        while (fast && fast.next) {  // keep going until fast falls off the end
            slow = slow.next         // slow moves 1 step
            fast = fast.next.next    // fast moves 2 steps
        }
        // when loop ends, slow is sitting on the middle node

        let second = slow.next       // second = start of the second half (everything after middle)
        slow.next = null             // CRITICAL: cut the first half off from the second half completely
        let prev = null              // prev will build up the reversed second half, starts empty

        // reversing the second half
        while (second) {                  // walk until second falls off the end
            let next = second.next        // bookmark: save what comes after second, before we overwrite it
            second.next = prev             // flip: point second backward at prev instead of forward
            prev = second                  // shift prev forward to where second currently is
            second = next                  // shift second forward to the bookmarked node
        }
        // when loop ends, prev is the head of the reversed second half (e.g. 6->5->4->null)

        // merge (interleave) first half and reversed second half
        let first = head              // first pointer starts at the head of the (now-shortened) first half
        second = prev                 // second pointer starts at the head of the reversed second half

        while (second) {                       // keep going as long as there's a node left in second half
            let tmp1 = first.next               // bookmark: save first's original next node
            let tmp2 = second.next              // bookmark: save second's original next node

            first.next = second                  // splice: point first at second (the interleave step)
            second.next = tmp1                    // reconnect: point second back at first's old next

            first = tmp1                            // advance first to where it originally would've gone
            second = tmp2                            // advance second to where it originally would've gone
        }
        // loop ends when second half is fully woven in; first half naturally terminates the list
    }
}