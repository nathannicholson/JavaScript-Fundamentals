class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {throw new Error('Invalid next node');
    }
  }
  getNextNode() {
    return this.next;
  }
}

myNode = new Node('cheese');

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    } else {
      var newHead = new Node(data);
      var oldHead = this.head;
      this.head = newHead;
      newHead.setNextNode(oldHead);
      return;
    }
  }

  addToTail(data) {
    let currentNode = this.head;
    if (!currentNode) {
      this.head = new Node(data);
      return;
    } else {
      while (currentNode.getNextNode()) {
        currentNode = currentNode.getNextNode();
      }
      currentNode.setNextNode(new Node(data));
      return;
      }
    }
  
  deleteHead() {
    if (!this.head) {
      return;
    } else {
      this.head = this.head.getNextNode();
      return;
    }
  }
  printList() {
    var output = "<head> ";
    if (!this.head) {
      return output + " <tail>";
    } else {
      let currentNode = this.head;
      while (currentNode) {
        output += currentNode.data + " ";
        currentNode = currentNode.getNextNode();
      }
      return output + "<tail>";
    }
  }

  getLength() {
    let length = 0;
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.getNextNode();
      length++;
    }
    return length;
  }

  toArray() {
    let output = [];
    let currentNode = this.head;
    while (currentNode) {
      output.push(currentNode.data);
      currentNode = currentNode.getNextNode();
    }
    return output;
  }

  findByData(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      } else {
        currentNode = currentNode.getNextNode();
      }
    }
    return null
  }

  removeByData(data) {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      if (currentNode.data === data) {
        if (currentNode !== this.head) {
          previousNode.setNextNode(currentNode.getNextNode());
        } else {this.head = currentNode.getNextNode();
        }
      }
      previousNode = currentNode;
      currentNode = currentNode.getNextNode();
    }
    return;
  }

  findnFromEnd(n) {
    if (n <= 0) {
      throw new Error('Invalid value of n');
      } else {
        let counter = -n -1;
        let leadingNode = this.head;
        let trailingNode = this.head;
        while (leadingNode) {
          leadingNode = leadingNode.getNextNode();
          counter++;
          console.log(counter);
          if (counter >= 0) {
            trailingNode = trailingNode.getNextNode()
          }
        }
        return trailingNode.data;
      }
  }
  }

myList = new LinkedList();
a = 'abcdefghijklmnopqrstuvwxyz';
for (let i = 0; i < 26; i++) {
  myList.addToTail(a[i]);
}
console.log(myList.printList());
console.log(myList.getLength());
for (let i = 0; i < 20; i++) {
  myList.removeByData(a[i]);
  console.log(myList.printList());
}

myList.removeByData('fur');
console.log(myList.printList());


