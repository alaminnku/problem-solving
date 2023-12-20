// Problem name - Two sum
// Problem link - https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const secondIndex = map.get(target - nums[i]);

    if (secondIndex && secondIndex !== i) {
      return [i, secondIndex];
    }
  }
  return [];
}

// Find the first recurring array element
function findFirstRecurringElement(param: number[]) {
  const elements: { [key: string]: boolean } = {};

  for (let i = 0; i < param.length; i++) {
    if (elements[param[i]]) {
      return param[i];
    } else {
      elements[param[i]] = true;
    }
  }
}

// Merge two sorted arrays
function mergeSortedArrays(param1: number[], param2: number[]) {
  const mergedArray: number[] = [];

  let param1Index = 0;
  let param1Item = param1[param1Index];

  let param2Index = 0;
  let param2Item = param2[param2Index];

  // Check input
  if (param1.length === 0) return param2;
  if (param2.length === 0) return param1;

  while (param1Item || param2Item) {
    if (!param2Item || param1Item < param2Item) {
      mergedArray.push(param1Item);
      param1Item = param1[param1Index + 1];
      param1Index++;
    } else {
      mergedArray.push(param2Item);
      param2Item = param2[param2Index + 1];
      param2Index++;
    }
  }

  return mergedArray;
}

// Problem name - Palindrome Number
// Problem link - https://leetcode.com/problems/palindrome-number
function isPalindrome(x: number): boolean {
  const str = x.toString();
  const length = str.length;

  for (let i = 0; i < length / 2; i++) {
    const firstChar = str[i];
    const lastChar = str[length - 1 - i];

    if (firstChar !== lastChar) {
      return false;
    }
  }

  return true;
}
console.log(isPalindrome(121));

// Calculate points
function calPoint(ops: string[]) {
  let records = [];

  for (let el of ops) {
    if (!isNaN(+el)) {
      records.push(+el);
    }

    if (el === 'C') {
      records.pop();
    }

    if (el === 'D') {
      const score: number = records[records.length - 1] * 2;
      records.push(score);
    }

    if (el === '+') {
      const last: number = records[records.length - 1];
      const secondLast: number = records[records.length - 2];
      const score = last + secondLast;
      records.push(score);
    }
  }
  return records.reduce((acc, curr) => acc + curr, 0);
}
console.log(calPoint(['5', '2', 'C', 'D', '+']));

// Problem name - Find matching array element
function findMatchingElementBetter(param1: string[], param2: string[]) {
  let map: { [key: string]: boolean } = {};
  for (let el of param1) {
    map = map[el] ? map : { ...map, [el]: true };
  }

  for (let el of param2) {
    if (map[el]) {
      return true;
    }
  }

  return false;
}
console.log(findMatchingElementBetter(['a', 'b', 'c'], ['c', 'd', 'e']));

// Problem name - Merge Sorted Array
// Problem link - https://leetcode.com/problems/merge-sorted-array/
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let totalIndex = m + n - 1;
  let nums1LastIndex = m - 1;
  let nums2LastIndex = n - 1;

  while (nums2LastIndex >= 0) {
    let nums1LastEl = nums1[nums1LastIndex];
    let nums2LastEl = nums2[nums2LastIndex];

    if (nums1LastIndex >= 0 && nums1LastEl > nums2LastEl) {
      nums1[totalIndex] = nums1LastEl;
      nums1LastIndex--;
    } else {
      nums1[totalIndex] = nums2LastEl;
      nums2LastIndex--;
    }
    totalIndex--;
  }
}
merge([0], 0, [1], 1);

// Problem name - Remove element
// Problem link - https://leetcode.com/problems/remove-element
function removeElement(nums: number[], val: number): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }

  return count;
}
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

// Problem name - Remove Duplicates from Sorted Array
// Problem link - https://leetcode.com/problems/remove-duplicates-from-sorted-array
function removeDuplicates(nums: number[]): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
