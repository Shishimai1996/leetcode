export {};

// ① LeetCodeではコメントだけだが、ローカルで動かすには実際にクラス定義が必要
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// ② 配列 → 連結リスト変換ヘルパー
function arrayToList(arr: number[]): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  for (const val of arr) {
    const node = new ListNode(val);
    if (head === null) {
      head = node;
      tail = node;
    } else {
      tail!.next = node;
      tail = node;
    }
  }
  return head;
}

// ③ 連結リスト → 配列変換ヘルパー（確認用、console.logで見やすくするため）
function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// ④ 本体のロジック（変更なし）
function deleteDuplicates(head3: ListNode | null): ListNode | null {
  let current = head3;
  while (current != null && current.next != null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head3;
}

// ⑤ 実行
const head3 = arrayToList([1, 1, 2, 3, 3]);
const result = deleteDuplicates(head3);
console.log(listToArray(result)); // [1, 2, 3]
