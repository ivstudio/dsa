/*
    Binary Search Tree
    - A binary search tree is a binary tree in which every node fits a specific ordering property.
*/

class TreeNode {
    data: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (newNode.data === current.data) return undefined;
            if (newNode.data < current.data) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    contains(data: number) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (data === current.data) return true;
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
}
