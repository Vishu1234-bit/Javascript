/**
 * @param {ListNode | null} listA
 * @param {ListNode | null} listB
 * @return {ListNode | null}
 */
class ListNode{
  constructor(val=0,next=null){
     this.val=val;
     this.next=next;
  }
}
export default function linkedListCombineTwoSorted(listA, listB) {
  const dummy = new ListNode(-1);
  let head = dummy;
  while(listA && listB){
  if(listA.val<=listB.val){
    head.next = listA;
    listA = listA.next;
  }else{
    head.next=listB;
    listB=listB.next;
  }
  head=head.next;
  }
  head.next = listA||listB
  return dummy.next;
}
