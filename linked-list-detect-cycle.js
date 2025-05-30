/**
 * @param {ListNode} head
 * @return {boolean}
 */
export default function linkedListDetectCycle(head) {
  let fast=head;
  let slow=head;
  while(fast && fast.next){
    fast=fast.next.next;
    slow=slow.next;
    if(fast==slow){
      return true;
    }
  }
  return false;
}
