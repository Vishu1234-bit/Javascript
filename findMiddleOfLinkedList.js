class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function findMiddle(head){
    let slow = head;
    let fast = head;
    while(fast.next!==null && fast.next.next!==null){
        slow = slow.next;
        fast= fast.next.next;
    }
    return slow;
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
let middle = findMiddle(head);
console.log(middle.data);
