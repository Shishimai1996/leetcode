export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  const dummy = new ListNode();
  let result = dummy;

  while (list1 !== null && list2 !== null) {
    //if the first val of list1 is lower than the list2's, it push the number to the result.
    if (list1.val <= list2.val) {
      result.next = list1;
      list1 = list1.next; //move forward of list1
    } else {
      result.next = list2;
      list2 = list2.next; //move forward of list2
    }

    result = result.next; //move forward of result.
  }
  //after finished while function, if there is left val from list1 or list2, pushes to the result.
  result.next = list1 !== null ? list1 : list2;
  return dummy.next;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergedList = mergeTwoLists(list1, list2);

const outPut = (list: ListNode | null): void => {
  const value: number[] = [];
  while (list !== null) {
    value.push(list.val);
    list = list.next;
  }
  console.log(value);
};
outPut(mergedList);
