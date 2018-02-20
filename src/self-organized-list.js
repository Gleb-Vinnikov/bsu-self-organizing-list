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
            var a = this.head;
            while (a.next) {
                a = a.next;
            }
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
        if (this.size() <= index) return null;
        else {
            var a = this.head;
            for (var i = 0; i != index; i++) {
                a = a.next;
            }
            return a.data;
        }
    }

    findNode(data) {
        var a = this.head;
        while (a) {
            if (a.data == data) return a;
            a = a.next;
        }
        return null;
    }

    toArray() {
        var arr = [];
        if (!this.head) return arr;
        var a = this.head;
        while (a) {
            arr.push(a.data);
            a = a.next;
        }
        return res;
    }

    removeAt(index) {
         if (index === 0) {
            if (this.size() === 1) {
                this.head = null;
                this.tail = null;
            }else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        } else {
            var a = this.head;
            for (var i = 0; i < index - 1; i++) {
                a = a.next;
            }
            if (a.next.next) {
                a.next = a.next.next;
                a.next.prev = a;
            } else {
                a.next = null;
                this.tail = a;
            }
        }
    }

   moveToFront(node) {
        if (this.size() > 1 && node != this.head) {
            if (node == this.tail) {
                this.tail = this.tail.prev;
            } else {
                node.next.prev = node.prev;
            }

            var a = this.head;
            node.prev.next = node.next;
            node.next = a;
            a.prev = node;
            node.prev = null;
            this.head = node;
        }
    }

    reorganize(data) {
        var node = this.findNode(data);
        if (node !== null) {
            this.moveToFront(node);
            return true;
        }
        return false;
    }
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
