/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  if (Array.isArray(nums)) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
      if (map[target - nums[i]] !== undefined) {
        return [map[target - nums[i]], i];
      }else{
        map[nums[i]] = i;
      }
    }
  }
  return [];
}
// @lc code=end
