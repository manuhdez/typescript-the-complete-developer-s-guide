class Node {
  public value: number;
  public next: Node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class LinkedList {
  public head: Node | null = null;

  /**
   * Adds a new node to the tail of the list
   */
  add = (data: number): void => {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  };

  /**
   * Calculates the length of the linked list
   */
  get length(): number {
    if (!this.head) return 0;

    let length = 1;
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
      length += 1;
    }

    return length;
  }

  /**
   * Returns the node at a given position
   */
  at = (index: number): Node => {
    if (!this.head) throw new Error(`Node not fount at index ${index}`);

    let currentIndex = 0;
    let currentNode: Node | null = this.head;
    while (currentNode) {
      if (currentIndex === index) return currentNode;

      currentIndex += 1;
      currentNode = currentNode.next;
    }

    throw new Error(`Node not fount`);
  };

  /**
   * Compares if the value of the left node is greater than the value of the right node
   */
  compare = (leftIndex: number, rightIndex: number): boolean => {
    if (!this.head) throw new Error('List is still empty, add values first.');

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    return leftNode.value > rightNode.value;
  };

  /**
   * Swaps the position of two nodes
   */
  swap = (leftIndex: number, rightIndex: number): void => {
    if (!this.head) throw new Error('List is still empty, add values first.');

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = leftHand;
  };

  /**
   * Prints the values on the list
   */
  print = (): void => {
    if (!this.head) {
      console.log('The list is empty');
      return;
    }

    const valuesList: number[] = [];
    let node: Node | null = this.head;
    while (node) {
      valuesList.push(node.value);
      node = node.next;
    }

    console.log(valuesList);
  };
}

export default LinkedList;
