// Prolem name - Two sum
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
