class Queue<T> {
    private items: T[] = [];

    enqueue(element: T): void {
        this.items.push(element);
    }

    dequeue(): T | undefined {
        if (this.items.length === 0) return undefined;
        return this.items.shift();
    }

    front(): T | undefined {
        if (this.items.length === 0) return undefined;
        return this.items[0];
    }
}

/**
 * Una cola es una colección de elementos que sigue el principio FIFO (First In, First Out).
 */
export const expQueues = () => {
    let queue: Queue<number> = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    console.log(queue.dequeue()); // 1
    console.log(queue.front()); // 2
}

