import { LinkedList } from './linkedList'; // Adjust the import path as necessary

describe('LinkedList', () => {
    it('insertFirst should insert a node at the beginning of the list', () => {
        const list = new LinkedList<number>();
        list.insertFirst(10);

        // Check if the head is correctly set
        expect(list.head).not.toBeNull();
        expect(list.head?.data).toBe(10);

        // Check if the tail is correctly set
        expect(list.tail).not.toBeNull();
        expect(list.tail?.data).toBe(10);

        // Insert another node at the beginning
        list.insertFirst(20);

        // Check if the head is updated correctly
        expect(list.head).not.toBeNull();
        expect(list.head?.data).toBe(20);

        // Check if the next node of the head is the previous head
        expect(list.head?.next).not.toBeNull();
        expect(list.head?.next?.data).toBe(10);

        // Check if the tail remains the same
        expect(list.tail).not.toBeNull();
        expect(list.tail?.data).toBe(10);
    });

    it('insertLast should insert a node at the end of the list', () => {
        const list = new LinkedList<number>();

        // Check the list when empty
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();

        // Insert a node at the end
        list.insertLast(10);
        expect(list.head).not.toBeNull();
        expect(list.tail).not.toBeNull();
        expect(list.head?.data).toBe(10);
        expect(list.tail?.data).toBe(10);

        // Insert another node at the end
        list.insertLast(20);
        expect(list.head).not.toBeNull();
        expect(list.tail).not.toBeNull();
        expect(list.head?.data).toBe(10);
        expect(list.tail?.data).toBe(20);
        expect(list.head?.next?.data).toBe(20);

        // Insert another node at the end
        list.insertLast(30);
        expect(list.head).not.toBeNull();
        expect(list.tail).not.toBeNull();
        expect(list.head?.data).toBe(10);
        expect(list.tail?.data).toBe(30);
        expect(list.head?.next?.data).toBe(20);
        expect(list.head?.next?.next?.data).toBe(30);
    });

    it('size should return the correct number of nodes in the list', () => {
        const list = new LinkedList<number>();

        // Check the size of an empty list
        expect(list.size()).toBe(0);

        // Insert a node at the beginning
        list.insertFirst(10);
        expect(list.size()).toBe(1);

        // Insert another node at the beginning
        list.insertFirst(20);
        expect(list.size()).toBe(2);

        // Insert another node at the end
        list.insertLast(30);
        expect(list.size()).toBe(3);

        // Insert another node at the end
        list.insertLast(40);
        expect(list.size()).toBe(4);
    });

    it('getFirst should return the first node in the list', () => {
        const list = new LinkedList<number>();

        // Check the first node of an empty list
        expect(list.getFirst()).toBeNull();

        // Insert a node at the beginning
        list.insertFirst(10);
        expect(list.getFirst()).not.toBeNull();
        expect(list.getFirst()?.data).toBe(10);

        // Insert another node at the beginning
        list.insertFirst(20);
        expect(list.getFirst()).not.toBeNull();
        expect(list.getFirst()?.data).toBe(20);

        // Insert another node at the end
        list.insertLast(30);
        expect(list.getFirst()).not.toBeNull();
        expect(list.getFirst()?.data).toBe(20);
    });

    it('getLast should return the last node in the list', () => {
        const list = new LinkedList<number>();

        // Check the last node of an empty list
        expect(list.getLast()).toBeNull();

        // Insert a node at the beginning
        list.insertFirst(10);
        expect(list.getLast()).not.toBeNull();
        expect(list.getLast()?.data).toBe(10);

        // Insert another node at the end
        list.insertLast(20);
        expect(list.getLast()).not.toBeNull();
        expect(list.getLast()?.data).toBe(20);

        // Insert another node at the end
        list.insertLast(30);
        expect(list.getLast()).not.toBeNull();
        expect(list.getLast()?.data).toBe(30);
    });

    it('clear should remove all nodes from the list', () => {
        const list = new LinkedList<number>();

        // Insert nodes into the list
        list.insertFirst(10);
        list.insertLast(20);
        list.insertLast(30);

        // Verify the list is not empty
        expect(list.head).not.toBeNull();
        expect(list.tail).not.toBeNull();
        expect(list.head?.data).toBe(10);
        expect(list.tail?.data).toBe(30);

        // Clear the list
        list.clear();

        // Verify the list is empty
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
    });

    it('removeFirst should handle an empty list', () => {
        const list = new LinkedList<number>();

        // Verify the list is empty
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();

        // Remove the first node from an empty list
        list.removeFirst();

        // Verify the list is still empty
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
    });

    it('removeFirst should remove the first node from a list with one node', () => {
        const list = new LinkedList<number>();

        // Insert a node into the list
        list.insertFirst(10);

        // Verify the list is not empty
        expect(list.head).not.toBeNull();
        expect(list.tail).not.toBeNull();
        expect(list.head?.data).toBe(10);
        expect(list.tail?.data).toBe(10);

        // Remove the first node
        list.removeFirst();

        // Verify the list is empty
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
    });

    it('removeFirst should remove the first node from a list with multiple nodes', () => {
        const list = new LinkedList<number>();

        // Insert nodes into the list
        list.insertFirst(10);
        list.insertLast(20);
        list.insertLast(30);

        // Verify the list is not empty
        expect(list.head).not.toBeNull();
        expect(list.tail).not.toBeNull();
        expect(list.head?.data).toBe(10);
        expect(list.tail?.data).toBe(30);

        // Remove the first node
        list.removeFirst();

        // Verify the first node is removed
        expect(list.head).not.toBeNull();
        expect(list.head?.data).toBe(20);
        expect(list.tail?.data).toBe(30);

        // Remove the first node again
        list.removeFirst();

        // Verify the first node is removed
        expect(list.head).not.toBeNull();
        expect(list.head?.data).toBe(30);
        expect(list.tail?.data).toBe(30);
    });

    it('removeLast should handle an empty list', () => {
        const list = new LinkedList<number>();

        // Verify the list is empty
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();

        // Remove the last node from an empty list
        list.removeLast();

        // Verify the list is still empty
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
    });

    it('removeLast should remove the last node from a list with one node', () => {
        const list = new LinkedList<number>();

        // Insert a node into the list
        list.insertFirst(10);

        // Verify the list is not empty
        expect(list.head).not.toBeNull();
        expect(list.tail).not.toBeNull();
        expect(list.head?.data).toBe(10);
        expect(list.tail?.data).toBe(10);

        // Remove the last node
        list.removeLast();

        // Verify the list is empty
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
    });

    it('removeLast should remove the last node from a list with multiple nodes', () => {
        const list = new LinkedList<number>();

        // Insert nodes into the list
        list.insertFirst(10);
        list.insertLast(20);
        list.insertLast(30);

        // Verify the list is not empty
        expect(list.head).not.toBeNull();
        expect(list.tail).not.toBeNull();
        expect(list.head?.data).toBe(10);
        expect(list.tail?.data).toBe(30);

        // Remove the last node
        list.removeLast();

        // Verify the last node is removed
        expect(list.head).not.toBeNull();
        expect(list.head?.data).toBe(10);
        expect(list.tail?.data).toBe(20);

        // Remove the last node again
        list.removeLast();

        // Verify the last node is removed
        expect(list.head).not.toBeNull();
        expect(list.head?.data).toBe(10);
        expect(list.tail?.data).toBe(10);
    });
});
