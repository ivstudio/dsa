/*
    Merge Two Sorted Lists

    Merge two sorted linked lists and return it as a sorted list. 
    The list should be made by splicing together the nodes of the first two lists.

    Example 1:
    Input: l1 = [1,2,4], l2 = [1,3,4]
    Output: [1,1,2,3,4,4]

    Example 2:
    Input: l1 = [], l2 = []
    Output: []

    Example 3:
    Input: l1 = [], l2 = [0]
    Output: [0]

*/

// Solution 1
// Time Complexity: O(n + m)
// Space Complexity: O(1)

export class LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T> | null;

    constructor(data: T, next: LinkedListNode<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

export function mergeTwoLists(
    l1: LinkedListNode<number> | null,
    l2: LinkedListNode<number> | null
): LinkedListNode<number> | null {
    const dummy = new LinkedListNode(0);
    let current = dummy;

    while (l1 && l2) {
        if (l1.data < l2.data) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next!;
    }

    current.next = l1 || l2;

    return dummy.next;
}
