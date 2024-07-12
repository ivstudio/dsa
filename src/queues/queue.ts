export class Queue<T> {
    private items: T[];
    constructor() {
        this.items = [];
    }

    /**
     * Adds an item to the end of the queue.
     */
    enqueue(item: T) {
        this.items.push(item);
    }

    /**
     * Removes and returns the item at the front of the queue.
     * Returns undefined if the queue is empty.
     */
    dequeue(): T | undefined {
        if (this.isEmpty) return undefined;
        return this.items.shift();
    }

    /**
     * Returns the item at the front of the queue without removing it.
     * Returns undefined if the queue is empty.
     */
    get peek(): T | undefined {
        return this.items[0];
    }

    /**
     * Checks if the queue is empty.
     */
    get isEmpty(): boolean {
        return this.items.length === 0;
    }

    /**
     * Returns the number of items in the queue.
     */
    get size(): number {
        return this.items.length;
    }

    /**
     * Returns the item at the end of the queue.
     * Returns undefined if the queue is empty.
     */
    get last(): T | undefined {
        return this.items[this.items.length - 1];
    }

    /**
     * Returns the items in the queue as a string.
     */
    printQueue() {
        if (this.isEmpty) return 'The queue is empty.';
        return this.items.toString();
    }
}
