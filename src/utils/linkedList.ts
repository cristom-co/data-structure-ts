class Node<T> {
    data: T;
    next: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

class LinkedList<T> {
    head: Node<T> | null = null;

    add(data: T): void {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    print(): void {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}


/**
 * Una lista enlazada es una colección de nodos donde cada nodo contiene un valor y un enlace al siguiente nodo.
 */
export const expLinkedList = () => {
    let list: LinkedList<number> = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.print(); // 1 2 3
}

