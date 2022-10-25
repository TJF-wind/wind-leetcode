/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  // silly v
  //   let tempArr = s.split(" ").filter((item) => item !== "");
  //   return tempArr[tempArr.length - 1].length;

  // silly v2
  let splitArr = [];
  let k = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (
      (s[i] !== " " && s[i - 1] === " ") ||
      (s[i] === " " && s[i - 1] !== " ") ||
      (s[i] !== " " && !s[i - 1])
    ) {
      if (k > 2) break;
      splitArr.push(i);
      k++;
    }
  }

  if (s[s.length - 1] == " ") {
    return splitArr[0] - splitArr[1];
  } else {
    return s.length - splitArr[0];
  }
}
// @lc code=end
