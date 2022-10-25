/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  if (!nums.length) return 0;
  let len = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[len] = nums[i];      
      len++;
    }
  }

  return len;
}
// @lc code=end
