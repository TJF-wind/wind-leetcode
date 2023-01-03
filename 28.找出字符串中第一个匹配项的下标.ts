/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  // silly one
  //   return haystack.indexOf(needle);

  // silly two
  let len = needle.length;
  let res: number;
  for (let i = 0; i <= haystack.length - len; i++) {
    if (haystack.slice(i, i + len) === needle) {
      res = i;
      break;
    }
  }
  return res ?? -1;

  // silly kmp算法
}
// @lc code=end
