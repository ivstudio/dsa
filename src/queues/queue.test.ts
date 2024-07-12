import { Queue } from './queue';

describe('Queue', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    it('checks if queue is empty', () => {
        expect(queue.isEmpty).toBeTruthy();
        expect(queue.size).toBe(0);
    });

    it('adds an item to the queue', () => {
        queue.enqueue(1);
        expect(queue.size).toBe(1);
        expect(queue.peek).toBe(1);
    });

    it('removes the last item from the queue', () => {
        queue.enqueue(40);
        queue.enqueue(50);
        queue.dequeue();
        expect(queue.size).toBe(1);
        expect(queue.peek).toBe(50);
    });

    it('returns the last item without removing it', () => {
        queue.enqueue(30);
        queue.enqueue(40);
        const item = queue.peek;
        expect(item).toBe(30);
        expect(queue.size).toBe(2);
    });

    it('should return the last item added to the queue', () => {
        queue.enqueue(100);
        queue.enqueue(200);
        queue.enqueue(300);
        expect(queue.last).toBe(300);
    });

    it('should return undefined for an empty queue', () => {
        expect(queue.last).toBeUndefined();
    });

    it('returns the correct number of items in the queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.size).toBe(3);
    });

    it('returns true for an empty queue and false for a non-empty queue', () => {
        expect(queue.isEmpty).toBeTruthy();
        queue.enqueue(1);
        expect(queue.isEmpty).toBeFalsy();
    });

    it('should return an empty string for an empty queue', () => {
        expect(queue.printQueue()).toBe('The queue is empty.');
    });

    it('should return a string representation of the queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.printQueue()).toBe('1,2');
    });

    it('works correctly with string data', () => {
        const stringQueue = new Queue<string>();
        expect(stringQueue.isEmpty).toBeTruthy();
        stringQueue.enqueue('john');
        stringQueue.enqueue('jane');
        stringQueue.enqueue('doe');
        expect(stringQueue.size).toBe(3);
        expect(stringQueue.peek).toBe('john');
        expect(stringQueue.dequeue()).toBe('john');
        expect(stringQueue.size).toBe(2);
        expect(stringQueue.peek).toBe('jane');
        stringQueue.dequeue();
        expect(stringQueue.isEmpty).toBeFalsy();
        stringQueue.dequeue();
        expect(stringQueue.isEmpty).toBeTruthy();
    });
});
