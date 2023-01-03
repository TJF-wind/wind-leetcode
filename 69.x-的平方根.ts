/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  let res = 0;

  for (let i = 0; i * i <= x; i++) {
    res = i;
  }
  return res;
}

// @lc code=end
