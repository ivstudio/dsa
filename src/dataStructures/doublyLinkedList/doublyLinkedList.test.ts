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

    it('should remove the last node from a list with one node', () => {
        list.push(1);
        const node = list.pop();
        expect(node?.data).toBe(1);
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    });

    it('should remove the last node from a list with multiple nodes', () => {
        list.push(1);
        list.push(2);
        const node = list.pop();
        expect(node?.data).toBe(2);
        expect(list.head?.data).toBe(1);
        expect(list.tail?.data).toBe(1);
        expect(list.head?.next).toBeNull();
        expect(list.tail?.prev).toBeNull();
        expect(list.length).toBe(1);
    });

    it('should return null when popping from an empty list', () => {
        const node = list.pop();
        expect(node).toBeNull();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    });

    it('should correctly update head and tail when popping the last node', () => {
        list.push(1);
        list.push(2);
        list.pop();
        list.pop();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    });

    it('should correctly update head and tail when popping multiple nodes', () => {
        list.push(1);
        list.push(2);
        list.push(3);
        list.pop();
        expect(list.tail?.data).toBe(2);
        list.pop();
        expect(list.tail?.data).toBe(1);
        list.pop();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    });

    it('should handle popping from a list with duplicate values', () => {
        list.push(1);
        list.push(2);
        list.push(2);
        list.push(3);
        list.pop();
        expect(list.tail?.data).toBe(2);
        list.pop();
        expect(list.tail?.data).toBe(2);
        list.pop();
        expect(list.tail?.data).toBe(1);
        list.pop();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    });
});
