import { DoublyLinkedList } from './doublyLinkedList';

describe('DoublyLinkedList', () => {
    let list: DoublyLinkedList<number>;

    beforeEach(() => {
        list = new DoublyLinkedList<number>();
    });

    it('should add a node to an empty list', () => {
        list.push(1);
        expect(list.head?.data).toBe(1);
        expect(list.tail?.data).toBe(1);
        expect(list.length).toBe(1);
    });

    it('should add a node to a non-empty list', () => {
        list.push(1);
        list.push(2);
        expect(list.head?.data).toBe(1);
        expect(list.tail?.data).toBe(2);
        expect(list.head?.next?.data).toBe(2);
        expect(list.tail?.prev?.data).toBe(1);
        expect(list.length).toBe(2);
    });

    it('should maintain correct order of nodes', () => {
        list.push(1);
        list.push(2);
        list.push(3);
        expect(list.head?.data).toBe(1);
        expect(list.head?.next?.data).toBe(2);
        expect(list.head?.next?.next?.data).toBe(3);
        expect(list.tail?.data).toBe(3);
        expect(list.tail?.prev?.data).toBe(2);
        expect(list.tail?.prev?.prev?.data).toBe(1);
        expect(list.length).toBe(3);
    });
});
