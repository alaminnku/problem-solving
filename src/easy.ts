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
