import { ListNode, addTwoNumbers } from './addTwoNumbers';

function createLinkedList(arr: number[]): ListNode | null {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function linkedListToArray(node: ListNode | null): number[] {
    let arr: number[] = [];
    while (node !== null) {
        arr.push(node.val);
        node = node.next;
    }
    return arr;
}

describe('addTwoNumbers', () => {
    it('should return [7, 0, 8] for input [2, 4, 3] and [5, 6, 4]', () => {
        let l1 = createLinkedList([2, 4, 3]);
        let l2 = createLinkedList([5, 6, 4]);
        let result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([7, 0, 8]);
    });

    it('should return [0] for input [0] and [0]', () => {
        let l1 = createLinkedList([0]);
        let l2 = createLinkedList([0]);
        let result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([0]);
    });

    it('should return [8, 9, 9, 1] for input [9, 9, 9] and [9, 9, 9]', () => {
        let l1 = createLinkedList([9, 9, 9]);
        let l2 = createLinkedList([9, 9, 9]);
        let result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([8, 9, 9, 1]);
    });

    it('should return [1, 0, 0, 0, 0, 0, 1] for input [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] and [5, 6, 4]', () => {
        let l1 = createLinkedList([
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1,
        ]);
        let l2 = createLinkedList([5, 6, 4]);
        let result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([
            6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1,
        ]);
    });
});
