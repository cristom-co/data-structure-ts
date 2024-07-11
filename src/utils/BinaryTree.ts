import { TconsoleTitle } from "./types";

class TreeNode<T> {
    data: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

class BinaryTree<T> {
    root: TreeNode<T> | null = null;

    add(data: T): void {
        const newNode = new TreeNode(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inorder(node: TreeNode<T> | null = this.root): void {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
}

/**
 * Un árbol es una estructura de datos jerárquica con un nodo raíz y subárboles de nodos hijos.
 */
export const expBinaryTree = (consoleTitle: TconsoleTitle) => {
    consoleTitle("BINARY TREE")
    let tree: BinaryTree<number> = new BinaryTree();
    tree.add(5);
    tree.add(3);
    tree.add(7);
    tree.inorder(); // 3 5 7
}
