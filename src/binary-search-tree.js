const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.myRoot = null;
  }

  root() {
    return this.myRoot;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.myRoot === null) this.myRoot = newNode;
    else this.addNode(this.myRoot, newNode);
  }

  addNode(node, newNode) {
    if (newNode.data > node.data) {
      if (node.right === null) node.right = newNode;
      else this.addNode(node.right, newNode);
    }
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.addNode(node.left, newNode);
    }
  }

  has(data) {
    if (this.myRoot === null) return false;
    else return this.hasNode(this.myRoot, data);
  }

  hasNode(node, data) {
    if (node.data === data) return true;
    else {
      if (data > node.data) {
        if (node.right === null) return false;
        else return this.hasNode(node.right, data);
      }
      if (data < node.data) {
        if (node.left === null) return false;
        else return this.hasNode(node.left, data);
      }
    }
  }


  find(data) {
    if (this.myRoot === null) return null;
    else return this.findNode(this.myRoot, data);
  }

  findNode(node, data) {
    if (node.data === data) return node;
    else {
      if (data > node.data) {
        if (node.right === null) return null;
        else return this.findNode(node.right, data);
      }
      if (data < node.data) {
        if (node.left === null) return null;
        else return this.findNode(node.left, data);
      }
    }
  }

  remove(data) {
    this.myRoot = removeNode(this.myRoot, data);
    function removeNode(node, data) {
      if (node === null) return null;
      else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data); 
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null; 
          return node;
        } if (node.left === null) {
          node = node.right; 
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        } 
        let newNode = minNode(node.right);
        function minNode(node) {
          if (node.left === null) return node; 
          else return minNode(node.left);
        }
        node.data = newNode.data; 
        node.right = removeNode(node.right, newNode.data);
        return node;
      }
    }
  }

  min() {
    if (this.myRoot === null) return null;
    let buff = this.myRoot;
      while(buff !== null) {
        if(buff.left !== null) buff = buff.left;
        else return buff.data;
      }
  }


  max() {
    if (this.myRoot === null) return null;
    let buff = this.myRoot;
      while(buff !== null) {
        if(buff.right !== null) buff = buff.right;
        else return buff.data;
      }
  }
}

module.exports = {
  BinarySearchTree
};