//   Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head; //new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

  while (current) {
    const next = current.next; //save next. next = 2
    current.next = prev; //exchange current next. prev = 2
    prev = current; //go on prev. prev
    current = next; //go on current
  }
  return prev;
}

const headList = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

const reversed = reverseList(headList);

let curr = reversed;
const result = [];
while (curr) {
  result.push(curr.val);
  curr = curr.next;
}

console.log(result);
