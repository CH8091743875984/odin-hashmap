import { Node, LinkedList } from "./linkedList.js";

class HashMap {
  constructor(startingSize = 16) {
    this.size = startingSize;
    // this.buckets = new Array(this.size).fill(new LinkedList()).map(() => []);
    this.buckets = new Array(this.size).fill(null).map(() => new LinkedList());
    this.loadFactor = 0.75;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
    }

    return hashCode;
  }

  set(key, value) {
    //takes two arguments, the first is a key and the second is a value that is assigned to this key.
    //If a key already exists, then the old value is overwritten

    //using hash, get index of bucket to use
    const index = this.hash(key);
    // console.log(index);
    //get node of hashmap by index, which should be a linked list
    let node = this.buckets[index];
    // console.log(node);

    node.updateOrAdd(key, value);
    this.resize();

    //if bucket already is occupied
    //and if key already exists, update value

    // if (listBucket.find(hash(key)) === key) {
    //   console.log("adding node");

    // } else {
    //   console.log("found conflict");
    //   //otherwise we have a conflict, add at end of linked list
    //if bucket not occupied, insert head of a linked list
    // listBucket.add([key, value]);
  }

  get(key) {
    //takes one argument as a key and returns the value that is assigned to this key.
    //If a key is not found, return null.
    let bucket = this.buckets[this.hash(key)];

    if (bucket) {
      if (bucket[0] === key) {
        return bucket[1];
      }
      return null;
    }
  }

  resize() {
    const bucketCount = this.buckets.length;
    const entryCount = this.length();
    const entryLimit = bucketCount * this.loadFactor;
    const bucketsToAdd = Math.ceil(entryCount - entryLimit);

    if (bucketsToAdd > 0) {
      this.buckets.push(new LinkedList());
    }

    this.size = this.buckets.length;
  }

  has(key) {
    //takes a key as an argument
    //and returns true or false based on whether or not the key is in the hash map.
  }

  remove(key) {
    //takes a key as an argument.
    //If the given key is in the hash map, it should remove the entry with that key and return true.
    //If the key isn’t in the hash map, it should return false.
  }

  length() {
    //returns the number of stored keys in the hash map.
    let count = 0;
    // console.log(this.buckets);
    this.buckets.forEach((bucket) => {
      const bucketLength = bucket.length();
      count += bucketLength;
    });
    return count;
  }

  clear() {
    //removes all entries in the hash map.
  }

  keys() {
    //returns an array containing all the keys inside the hash map.
    keyList = [];
    for (let i = 0; i < this.size; i++) {
      keyList.push(this.buckets[i][0]);
    }
    return keyList;
  }

  values() {
    //returns an array containing all the values.
    valueList = [];
    for (let i = 0; i < this.size; i++) {
      valueList.push(this.buckets[i][0]);
    }
    return valueList;
  }

  entries() {
    //returns an array that contains each key, value pair.
    //Example: [[firstKey, firstValue], [secondKey, secondValue]]
  }
}
console.log("Test: create object");

const test = new HashMap();
console.log(test);

console.log("Test: set");

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
// test.set("moon", "silver");
console.log(test);

console.log("Test: set with overwrite value");

// test.set("carrot", "not orange");
console.log(test);

console.log("Test: length");

console.log(test.length());
