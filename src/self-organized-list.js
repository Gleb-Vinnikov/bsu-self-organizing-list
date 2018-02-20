class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(data) {
          var node = new Node(data);
        this.tail = node;
        if (!this.head) {
            this.head = node;
        } else {
            var a = this.tail;
            a.next = node;
            a.next.prev = a;
            this.tail.prev = a;
        }
    }

    size() {
        if (!this.head) return 0;

        else {
            var a = this.head;
            for (var i = 1; a.next; i++) {
                a = a.next;
            }
            return i;
        }
    }

    at(index) {

    }

    findNode(data) {

    }

    toArray() {

    }

    removeAt(index) {

    }

    moveToFront(node) {

    }

    reorganize(data) {

    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
