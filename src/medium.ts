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
// console.log(addTwoNumbers(myList1, myList2));

// Generate a Pascal's Triangle
// And find element with a provided index
function findElement(index: number) {
  let result = [];

  for (let i = 0; i <= index; i++) {
    if (i === 0) {
      result.push([1]);
    } else {
      const prevElement = result[i - 1];
      const newElement = [1];

      for (let j = 1; j < prevElement.length; j++) {
        newElement.push(prevElement[j - 1] + prevElement[j]);
      }

      newElement.push(1);
      result.push(newElement);
    }
  }

  return result[index];
}
// console.log(findElement(3));

// Problem name - Remove Duplicates from Sorted Array II
// Problem link - https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii
function removeDuplicatesII(numbers: number[]): number {
  if (numbers.length <= 2) return numbers.length;

  let k = 2;
  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] !== numbers[k - 1] || numbers[i] !== numbers[k - 2]) {
      numbers[k] = numbers[i];
      k++;
    }
  }
  return k;
}
// removeDuplicatesII([0, 0, 1, 1, 1, 1, 2, 3, 3]);

// Problem name - Rotate Array
// Problem link - https://leetcode.com/problems/rotate-array
function rotate(nums: number[], k: number): void {
  // Get nums length
  const n = nums.length;

  // Modify the value of k
  // when it is greater than n
  k = k > n ? k % n : k;

  // Get the rotated part
  const rotated = nums.slice(n - k);

  // Remove the rotated part
  nums.splice(n - k, k);

  // Add the rotated part at the beginning
  nums.unshift(...rotated);
}
// rotate([1, 2, 3, 4, 5, 6, 7], 3);

// Problem name - Best Time to Buy and Sell Stock II
// Problem link - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currPrice = prices[i];
    const nextPrice = prices[i + 1];
    if (nextPrice > currPrice) {
      maxProfit += nextPrice - currPrice;
    }
  }

  return maxProfit;
}
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// Fibonacci with dynamic programming
function fibonacci() {
  const cache: { [key: string]: number } = {};
  return function fib(n: number) {
    if (n < 2) return n;
    if (n in cache) return cache[n];

    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}
// const fib = fibonacci();
// console.log(fib(10));

// Problem name - Jump Game
// Problem link - https://leetcode.com/problems/jump-game/description
function canJump(nums: number[]): boolean {
  let steps = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (steps === 0) return false;
    steps = Math.max(steps - 1, nums[i]);
  }
  return true;
}
// console.log(canJump([2, 0, 0]));
