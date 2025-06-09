class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.minStack = [];
    this.stack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    const popped = this.stack.pop();
    if (popped === this.getMin()) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin());
stack.pop();
console.log(stack.top());
console.log(stack.getMin());

const ops = [
  "MinStack",
  "push",
  "push",
  "push",
  "getMin",
  "pop",
  "top",
  "getMin",
];
const args = [[], [-2], [0], [-3], [], [], [], []];
