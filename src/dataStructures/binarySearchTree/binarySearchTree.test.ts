import { BinarySearchTree } from './binarySearchTree';

describe('BinarySearchTree', () => {
    let bst: BinarySearchTree;

    beforeEach(() => {
        bst = new BinarySearchTree();
    });

    it('should insert values correctly', () => {
        bst.insert(5);
        bst.insert(3);
        bst.insert(7);
        expect(bst.root?.data).toBe(5);
        expect(bst.root?.left?.data).toBe(3);
        expect(bst.root?.right?.data).toBe(7);
    });

    it('should return undefined for duplicate values', () => {
        bst.insert(5);
        const result = bst.insert(5);
        expect(result).toBeUndefined();
    });

    it('should handle edge case with empty tree', () => {
        expect(bst.root).toBeNull();
    });

    it('should insert values in the correct order', () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(13);
        bst.insert(17);

        expect(bst.root?.data).toBe(10);
        expect(bst.root?.left?.data).toBe(5);
        expect(bst.root?.right?.data).toBe(15);
        expect(bst.root?.left?.left?.data).toBe(3);
        expect(bst.root?.left?.right?.data).toBe(7);
        expect(bst.root?.right?.left?.data).toBe(13);
        expect(bst.root?.right?.right?.data).toBe(17);
    });
});
