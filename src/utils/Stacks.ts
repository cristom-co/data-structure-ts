class Stack<T> {
    private items: T[] = [];

    push(element: T): void {
        this.items.push(element);
    }

    pop(): T | undefined {
        if (this.items.length === 0) return undefined;
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}

/**
 * Una pila es una colección de elementos que sigue el principio LIFO (Last In, First Out).
 */
export const expStack = () => {
    let stack: Stack<number> = new Stack();
    stack.push(1);
    stack.push(2);
    console.log(stack.pop()); // 2
    console.log(stack.peek()); // 1
}

