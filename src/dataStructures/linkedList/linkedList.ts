/*
    Linked List
    - A linked list is a linear data structure, in which the elements are not stored 
        at contiguous memory locations.
    - The elements in a linked list are linked using pointers.
    - In simple words, a linked list consists of nodes where each node contains a data 
        field and a reference(link) to the next node in the list.
    - The first node is called the head.
    - The last node is called the tail.
    - The tail points to null.
    - The linked list can be singly or doubly linked.
    - A singly linked list only has a reference to the next node.
    - A doubly linked list has a reference to the next and previous node.

    Linked List Methods:
    - insertFirst: Add a node to the beginning of the list.
    - insertLast: Add a node to the end of the list.
    - size: Return the number of nodes in the list.
    - getFirst: Return the first node.
    - getLast: Return the last node.
    - clear: Clear the List
    - removeFirst: Remove the first node.
    - removeLast: Remove the last node.
  
    - insert: Insert a node at a specific index.
    - remove: Remove a node from the list.
    - printList: Print the list.
    - reverse: Reverse the list.
    - fromArray: Create a linked list from an array.
    - toArray: Create an array from a linked list.
    - deleteDuplicates: Remove duplicates from the list.
    - getAt: Get the node at a specific index.
    - getMiddle: Get the middle node of the list.
    - getNthFromEnd: Get the nth node from the end of the list.
    - hasCycle: Check if the list has a cycle.
*/

class LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T> | null;

    constructor(data: T, next: LinkedListNode<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList<T> {
    head: LinkedListNode<T> | null = null;
    tail: LinkedListNode<T> | null = null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertFirst(data: T) {
        this.head = new LinkedListNode(data, this.head);
        if (!this.tail) {
            this.tail = this.head;
        }
    }

    insertLast(data: T) {
        const newNode = new LinkedListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail!.next = newNode;
        this.tail = newNode;
    }

    size(): number {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    getFirst(): LinkedListNode<T> | null {
        return this.head;
    }

    getLast(): LinkedListNode<T> | null {
        return this.tail;
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next!;
        }
        current.next = null;
        this.tail = current;
    }
}

export { LinkedList, LinkedListNode };
