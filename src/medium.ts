// Problem name - Add two numbers
// Problem link - https://leetcode.com/problems/add-two-numbers
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(value: number = 0, next: ListNode | null = null) {
    this.val = value;
    this.next = next;
  }
}
const myList1 = new ListNode(3, new ListNode(4, new ListNode(5)));
const myList2 = new ListNode(5, new ListNode(8, new ListNode(2)));

function getNumber(input: ListNode) {
  const list = [];
  let curr: ListNode | null = input;

  while (curr) {
    list.push(curr.val);
    curr = curr.next;
  }
  return BigInt(list.reverse().join(''));
}

// Add two numbers function
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 && l2) {
    const sum = getNumber(l1) + getNumber(l2);
    const nums = sum.toString().split('').reverse();

    let head: ListNode | null = null;
    let tail: ListNode | null = null;

    for (let i = 0; i < nums.length; i++) {
      const node = new ListNode(+nums[i]);

      if (!head) {
        head = node;
        tail = head;
      } else {
        tail!.next = node;
        tail = node;
      }
    }
    return head;
  }
  return null;
}

console.log(addTwoNumbers(myList1, myList2));
