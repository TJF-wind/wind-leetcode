/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s == "") return 0;
  let set = new Set();
  let left = 0;
  let maxl = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    let max= i - left + 1;
    maxl = Math.max(max,maxl)
    set.add(s[i])
  }
  return maxl
}
// @lc code=end
