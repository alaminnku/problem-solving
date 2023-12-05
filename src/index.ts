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
