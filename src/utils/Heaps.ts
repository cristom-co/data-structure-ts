class MinHeap {
  private heap: number[] = [];

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[this.getParentIndex(index)] > this.heap[index]
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  extractMin(): number | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();
    return min;
  }

  private heapifyDown(): void {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      }

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

/**
 * Un heap es una estructura de datos especial basada en árboles que satisface la propiedad de heap. En un max-heap, cada nodo es mayor o igual a sus hijos; en un min-heap, cada nodo es menor o igual a sus hijos.
 */
export const expHeap = () => {
  let minHeap = new MinHeap();
  minHeap.insert(3);
  minHeap.insert(1);
  minHeap.insert(2);
  console.log(minHeap.extractMin()); // 1
  console.log(minHeap.extractMin()); // 2
  console.log(minHeap.extractMin()); // 3
};
