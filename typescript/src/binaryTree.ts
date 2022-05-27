export class BinaryTree<T> {

    root: Node<T> | undefined;

    constructor() {
        this.root = undefined;
    }

    sort(a: T, b: T) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }

    insert(data:T): Node<T> {
         if (!this.root) {
             this.root = new Node(data);
             return this.root;
         }
         let current = this.root;
         while (true) {
             if (this.sort(data, current.data) === 1) {
                 if (current.rightNode) {
                     current = current.rightNode;
                 } else {
                     current.rightNode = new Node(data);
                     return current.rightNode;
                 }
             } else {
                 if (current.leftNode) {
                     current = current.leftNode;
                 } else {
                     current.leftNode = new Node(data);
                     return current.leftNode;
                 }
             }
         }
     }


    inorder(node: Node<T> | undefined): void {
        if (node) {
            this.inorder(node.leftNode);
            console.log(node.data);
            this.inorder(node.rightNode);
        }
    }

   search(data: T): Node<T> | undefined {
        if (!this.root) return undefined;

        let current = this.root;

        while (this.sort(data, current.data) !== 0) {
            if (this.sort(data, current.data) === 1) {
                if (!current.rightNode) return;
                current = current.rightNode;
            } else {
                if (!current.leftNode) return;
                current = current.leftNode;
            }
        }
        return current;
    }

    delete(value: T) {
        this.removeNode(this.root,value);
    }

    findMinNode(node: Node<T>): Node<T> {
        if(node.leftNode === undefined) return node;
        else return this.findMinNode(node.leftNode);
    }

    removeNode(node: Node<T>|undefined, key: T): Node<T>|undefined {

        if(node === undefined) return undefined;
        else if(key < node.data) {
            node.leftNode = this.removeNode(node.leftNode, key);
            return node;
        } else if(key > node.data) {
            node.rightNode = this.removeNode(node.rightNode, key);
            return node;
        } else {
            if(node.leftNode === undefined && node.rightNode === null) {
                node = undefined;
                return node;
            }
            if(node.leftNode === undefined) {
                node = node.rightNode;
                return node;
            } else if(node.rightNode === undefined) {
                node = node.leftNode;
                return node;
            }

            let aux = this.findMinNode(node.rightNode);
            node.data = aux.data;

            node.rightNode = this.removeNode(node.rightNode, aux.data);
            return node;
        }
    }


}

export class Node<T> {
    data: T;
    leftNode?: Node<T>;
    rightNode?: Node<T>;

    constructor(data: T) {
        this.data = data;
    }
}
