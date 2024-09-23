import { counter } from './counter';

describe('counter', () => {
    let c: ReturnType<typeof counter>;

    beforeEach(() => {
        c = counter();
    });

    it('should start at 0', () => {
        expect(c.get()).toBe(0);
    });

    it('should increment the counter', () => {
        c.increment();
        expect(c.get()).toBe(1);
    });

    it('should decrement the counter', () => {
        c.increment();
        c.increment();
        c.decrement();
        expect(c.get()).toBe(1);
    });

    it('should handle multiple increments and decrements', () => {
        c.increment();
        c.increment();
        c.decrement();
        c.increment();
        expect(c.get()).toBe(2);
    });

    it('should not go below initial value when decremented', () => {
        c.decrement();
        expect(c.get()).toBe(-1);
    });
});
