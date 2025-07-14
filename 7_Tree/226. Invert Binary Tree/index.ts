// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const node = queue.shift()!;

    const temp = node?.left;
    node.left = node?.right;
    node.right = temp;

    if (node?.left) queue.push(node.left);
    if (node?.right) queue.push(node?.right);
  }
  return root;
}

// const root = [4, 2, 7, 1, 3, 6, 9];
const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

// const root = [2,1,3]

console.log(invertTree(root));
