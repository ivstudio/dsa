class LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T> | null;
    prev: LinkedListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList<T> {
    head: LinkedListNode<T> | null = null;
    tail: LinkedListNode<T> | null = null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data: T) {
        const newNode = new LinkedListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    pop() {
        if (!this.head) return null;
        if (this.head === this.tail) {
            const node = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return node;
        }
        const node = this.tail;
        this.tail = this.tail!.prev;
        this.tail!.next = null;
        this.length--;
        return node;
    }
    shift() {
        if (!this.head) return null;
        if (this.head === this.tail) {
            const node = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return node;
        }
        const node = this.head;
        this.head = this.head.next;
        this.head!.prev = null;
        this.length--;
        return node;
    }
    unshift(data: T) {
        const newNode = new LinkedListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }
}
