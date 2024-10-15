//quick LL implementation for this exercise

export class Node {
  constructor(key, value) {
    this.data = [key, value];
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new key/value pair to the linked list (for collision resolution)
  add(key, value) {
    const newNode = new Node(key, value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // // Find a node by its key
  find(key) {
    let current = this.head;

    while (current) {
      if (current.data[0] === key) {
        return current.data[1]; // Return the value associated with the key
      }
      current = current.next;
    }
    return null;
  }

  // // Update a node's value by key, or add a new one if not found
  updateOrAdd(key, value) {
    let current = this.head;

    while (current) {
      if (current.data[0] === key) {
        current.data[1] = value; // Update the value
        return;
      }
      current = current.next;
    }

    // If the key doesn't exist, add a new node
    this.add(key, value);
  }

  // Remove a node by its key
  remove(key) {
    // If the list is empty, return false
    if (!this.head) return false;

    // If the head is the node to remove
    if (this.head.data[0] === key) {
      this.head = this.head.next;
      return true; // Return true to indicate removal
    }

    // Traverse the list to find the node to remove
    let current = this.head;
    while (current.next) {
      if (current.next.data[0] === key) {
        current.next = current.next.next; // Skip over the node to remove it
        return true; // Return true to indicate successful removal
      }
      current = current.next;
    }

    return false; // Return false if the key was not found
  }

  toString() {
    //string representation of LL
    let string = "";
    let tmp = this.head;
    while (tmp) {
      string += "( " + tmp.data.toString() + " ) -> ";
      tmp = tmp.next;
    }
    string += "null";
    return string;
  }

  length() {
    let count = 0;
    let tmp = this.head;
    while (tmp) {
      count++;
      tmp = tmp.next;
    }
    return count;
  }
}

// console.log("initialize ll");

// let LLtest = new LinkedList();

// console.log(LLtest);

// LLtest.add("apple", "red");
// LLtest.add("banana", "yellow");
// console.log(LLtest.toString());

// LLtest.updateOrAdd("apple", "not red");
// console.log(LLtest.toString());

// LLtest.updateOrAdd("blueberry", "blue");
// console.log(LLtest.toString());
// LLtest.remove("blueberry");
// console.log(LLtest.toString());
