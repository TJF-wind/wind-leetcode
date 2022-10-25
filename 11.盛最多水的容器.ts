/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  //  silly v1
  let arr = [];
  height.map((item, index1) => {
    height.forEach((item2, index2) => {
      let width = Math.abs(index1 - index2);
      let h = Math.min(item2, item);
      let surface = width * h;
      arr.push(surface);
    });
  });
  return arr.reduce((pre, cur) => (pre > cur ? pre : cur));
}
// @lc code=end