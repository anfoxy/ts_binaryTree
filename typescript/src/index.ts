import {BinaryTree, Node} from "./binaryTree.js";
import * as readlineSync from "readline-sync"


const b: BinaryTree<number> = new BinaryTree();
b.insert(5);
b.insert(2);
b.insert(3);
b.insert(1);
b.insert(1);
b.insert(7);
b.insert(6);


function add() {
    let val = readlineSync.question('Enter the value you want to add ');
    while (isNaN(Number(val))){
        console.log("Wrong format! Enter a number ");
        val = readlineSync.question('Enter the value you want to add ');
    }
    b.insert(Number(val));
}

while (1){
    console.log("Action on a tree");
    console.log("1 - Adding an element to the tree");
    console.log("2 - element search");
    console.log("3 - deleting an element");
    console.log("4 - tree output (traversal)");
    console.log("0 - exit");
    let res = readlineSync.question('');
  switch (res){
      case '1': {
          add();
          break;
      }
      case '2': {
          let ser = readlineSync.question('Enter a value ');
          if( b.search(Number(ser))===undefined) console.log("this key is not in the tree");
          else console.log("Key found");
          break;
      }
      case '3': {
          let del = readlineSync.question('Enter the key value of the item you want to delete');
          b.delete(Number(del));
          break;
      }
      case '4': {
          b.inorder(b.root);
          break;
      }
      case '0': {
          process.exit(0)
      }
      default: {
          console.log("Incorrect format enter the number 1-4 or 0");
          break;
      }
  }

}

