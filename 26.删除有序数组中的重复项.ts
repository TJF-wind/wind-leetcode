/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let i: number = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i += 1;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}
// @lc code=end
