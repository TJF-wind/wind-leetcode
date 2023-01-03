/*
 * @lc app=leetcode.cn id=154 lang=typescript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
function findMin(nums: number[]): number {

  //   silly one
  //   nums.sort((a, b) => {
  //     return a - b;
  //   });
  //   return nums[0];
   
  //   silly two
  //   return Math.min(...nums);

  //  二分法
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
      const pivot = low + Math.floor((high - low) / 2);
      if (nums[pivot] < nums[high]) {
          high = pivot;
      } else if (nums[pivot] > nums[high]) {
          low = pivot + 1;
      } else {
          high -= 1;
      }
  }

  return nums[low];
}
// @lc code=end
