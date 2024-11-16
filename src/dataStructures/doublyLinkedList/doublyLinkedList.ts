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

    get(index: number) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }
        return current;
    }

    set(index: number, data: T): boolean {
        const node = this.get(index);
        if (node) {
            node.data = data;
            return true;
        }
        return false;
    }

    insert(index: number, data: T): boolean {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            this.unshift(data);
            return true;
        }
        if (index === this.length) {
            this.push(data);
            return true;
        }
        const newNode = new LinkedListNode(data);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode!.next;
        beforeNode!.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode!.prev = newNode;
        this.length++;
        return true;
    }

    remove(index: number): LinkedListNode<T> | null {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        const node = this.get(index);
        const beforeNode = node!.prev;
        const afterNode = node!.next;
        beforeNode!.next = afterNode;
        afterNode!.prev = beforeNode;
        this.length--;
        return node;
    }
}
