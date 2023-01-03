/*
 * @lc app=leetcode.cn id=2022 lang=typescript
 *
 * [2022] 将一维数组转变成二维数组
 */

// @lc code=start
function construct2DArray(
  original: number[],
  m: number,
  n: number
): number[][] {
  let res = [];
  if (original.length !== m * n) return [];
  for (let i = 0; i < m; i++) {
    res[i] = original.slice(i * n, (i + 1) * n);
  }
  return res;
}
// @lc code=end
