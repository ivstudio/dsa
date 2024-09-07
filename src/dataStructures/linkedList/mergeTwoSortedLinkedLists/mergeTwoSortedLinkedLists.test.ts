import { LinkedListNode, mergeTwoLists } from './mergeTwoSortedLinkedLists';

// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): LinkedListNode<number> | null {
    if (arr.length === 0) return null;
    const dummy = new LinkedListNode(0);
    let current = dummy;
    for (const num of arr) {
        current.next = new LinkedListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head: LinkedListNode<number> | null): number[] {
    const result: number[] = [];
    while (head) {
        result.push(head.data);
        head = head.next;
    }
    return result;
}

describe('mergeTwoLists', () => {
    test('both lists are empty', () => {
        const l1 = createLinkedList([]);
        const l2 = createLinkedList([]);
        const merged = mergeTwoLists(l1, l2);
        expect(linkedListToArray(merged)).toEqual([]);
    });

    test('one list is empty, the other is not', () => {
        const l1 = createLinkedList([1, 3, 5]);
        const l2 = createLinkedList([]);
        const merged = mergeTwoLists(l1, l2);
        expect(linkedListToArray(merged)).toEqual([1, 3, 5]);
    });

    test('both lists have elements', () => {
        const l1 = createLinkedList([1, 3, 5]);
        const l2 = createLinkedList([2, 4, 6]);
        const merged = mergeTwoLists(l1, l2);
        expect(linkedListToArray(merged)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('lists with overlapping elements', () => {
        const l1 = createLinkedList([1, 2, 4]);
        const l2 = createLinkedList([1, 3, 4]);
        const merged = mergeTwoLists(l1, l2);
        expect(linkedListToArray(merged)).toEqual([1, 1, 2, 3, 4, 4]);
    });
});
