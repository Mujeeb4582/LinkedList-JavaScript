class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  // setup head and tail
  constructor() {
    this.header = null;
    this.tail = null;
    this.size = 0;
  }

  // Add node at the front of the list
  prepend(data) {
    const node = new Node(data);
    if(this.size === 0) {
      this.header = node
      this.tail = node;
    } else {
      node.next = this.header;
      this.header = node;
    }
    this.size++;
  }

  // Add node at the end of the list
  // name it add or append
  append(data) {
    const node = new Node(data);
    if(this.size === 0) {
      this.header = node;
      this.tail = node;
    } else {
      let current = this.tail; // store previous tail data in current variable
      this.tail = node; // assign new node to tail
      current.next = this.tail; // link the new node(this.tail) to previous(current) node
    }
    this.size++;
  }

  // print the data of list
  printList() {
    let current = this.header;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // print data using string storage 
  printListString() {
    let data = "";
    let current = this.header;
    while(current) {
      data = data +  current.data+ " ";
      current = current.next;
    }
    return data;
  }

  // Remove first Node
  removeFirst() {
    if(this.size === 0) {
      return null;
    }
    let data = this.header.data;
    if(this.size === 1) {
      this.header = null;
      this.tail = null;
    } else {
      this.header = this.header.next;
    }
    this.size--;
    return data;
  }

  // Remove Last node
  removeLast() {
    if(this.size===0) return null;
    let data = this.tail.data;
    if (this.size === 1) {
      this.header = null;
      this.tail = null;
    } else {
      let current = this.header;
      while(current.next.next != null) {
        current = current.next
      }
      current.next = null;
      this.tail = current;
    } 
    this.size--;
    return data;
  }

  // inserting a node at a certain position
  insertAt(pos, data) {    // or addAt
    if(pos < 0 || pos > this.size) return;
    if(pos === 0) this.prepend(data);
    else if(pos === this.size) this.append(data);
    else {
      const node = new Node(data);
      let previous = null;
      let current = this.header;
      let counter = 0;
      while(counter < pos) {
        previous = current;
        current = current.next;
        counter++;
      }
      node.next = current;
      previous.next = node;
      this.size++;
    }
  }

  // Removing a Node at a certain position
  removeAt(pos) {
    if(pos<0 || pos >= this.size) return null;
    if(pos === 0) return this.removeFirst();
    else if (pos === this.size-1) return this.removeLast();
    else {
      let previous = null;
      let current = this.header;
      let counter = 0;
      while(counter < pos) {
        previous = current;
        current = current.next;
        counter++;
      }
      previous.next = current.next;
      this.size--;
      return current.data;
    }
  }

  // Get data at given position or index
  get(index) {
    let current = this.header;
    let counter = 0;
    while (current) {
      if (counter == index) {
        return current.data;
      }
      counter++;
      current = current.next;
    }
  }

}

let list = new LinkedList();

list.prepend(1);
list.prepend(2);
list.append(3);
list.prepend(4);
list.append(5);
list.prepend(6);
list.append(7);

console.log("List after adding elements")
list.printList();
console.log("List after adding elements: " + list.printListString());

console.log("Removed first item from the list is: " + list.removeFirst());
console.log ("List after calling removeFirst function: " + list.printListString());

console.log("Removed Last item from the list is: " + list.removeLast());
console.log ("List after calling removeLast function: " + list.printListString());

console.log("Removed the item at the given index from the list is: " + list.removeAt(3));
console.log ("List after calling removeAt function: " + list.printListString());

list.insertAt(2, 77);
console.log ("List after calling insertAt function: " + list.printListString());

console.log("Getting item from the given list using getAt function: " + list.get(2));
