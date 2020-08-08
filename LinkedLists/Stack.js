const Node = require('./Node');


class Stack {
  constructor(maxSize = Infinity) {
    this.maxSize = maxSize;
    this.size = 0;
    this.top = null;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return (this.size <= 0);
  }

  push(data) {
    if (this.hasRoom()) {
      if (data instanceof Node) {
        var newTop = data;
      } else {
        var newTop = new Node(data);
      }
      this.size++;
      newTop.setNext(this.top);
      this.top = newTop;
    } else {
      throw new Error(`Stack overflow, failed to add ${data}`)
    }
  }

  pop() {
    if (!this.isEmpty()) {
      var oldTop = this.top;
      this.top = oldTop.getNextNode();
      this.size--;
      return oldTop.data;
    } else {
      throw new Error('Stack underflow');
    }
  }

  peek() {
    if (!this.isEmpty()) {
    return this.top.data;
    } else {
      return null;
    }
  }

  print() {
    let currentNode = this.top;
    var output = '';
    while (currentNode) {
      output += (currentNode.data);
      currentNode = currentNode.getNextNode()
    }
    console.log(output);
  }
}



module.exports = Stack;
