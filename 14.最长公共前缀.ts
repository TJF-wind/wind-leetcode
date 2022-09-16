/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let temp: any = [];
  strs.sort();

  // 方法一：耗时 耗空间
  //   for (let i = 0; i < strs.length; i++) {
  //     for (let j = 1; j < strs[i].length + 1; j++) {
  //       let tempstr = strs[i].slice(0, j);
  //       let temArr = strs.filter(
  //         (item) => item.slice(0, j).indexOf(tempstr) !== -1
  //       );
  //       if (temArr.length === strs.length) {
  //         temp.push(tempstr);
  //       }
  //     }
  //   }
  //   return temp[temp.length - 1] ? temp[temp.length - 1] : "";

  //  方法2 改进
  const shortestWord = strs[0];
  const longestWord = strs[strs.length - 1];
  for (let j = 1; j < shortestWord.length + 1; j++) {
    let tempstr = shortestWord.slice(0, j);
    if (longestWord.slice(0, j).indexOf(tempstr) !== -1) {
      temp.push(tempstr);
    }
  }
  return temp[temp.length - 1] ?? "";
}

// @lc code=end
