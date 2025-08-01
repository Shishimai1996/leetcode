//   Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  const values = [];

  let current = head;
  while (current) {
    values.push(current.val);
    current = current.next;
  }

  let left = 0;
  let right = values.length - 1;

  while (left < right) {
    if (values[left] !== values[right]) return false;
    left++;
    right--;
  }
  return true;
}

// const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
const head = new ListNode(1, new ListNode(2));

console.log(isPalindrome(head));
