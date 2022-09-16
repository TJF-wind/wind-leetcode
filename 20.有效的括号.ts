/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  // wrong
  // const reverseMap = {
  //   "{": "}",
  //   "(": ")",
  //   "[": "]",
  //   "}": "{",
  //   ")": "(",
  //   "]": "[",
  // };
  // let strArr = s.split("");
  // let res = true;
  // let temp = ~~(strArr.length / 2);
  // if (!temp) return false;
  // for (let i = 0; i < temp; i++) {
  //   //  对称相反  相隔相反
  //   res =
  //     reverseMap[strArr[i]] === strArr[strArr.length - 1 - i] ||
  //     reverseMap[strArr[i]] === strArr[i - 1] ||
  //     reverseMap[strArr[i]] === strArr[i + 1] ||
  //     strArr[strArr.length - 2 - i] ===
  //       reverseMap[strArr[strArr.length - 1 - i]] ||
  //     strArr[strArr.length - 2 - i] ===
  //       reverseMap[strArr[strArr.length - 1 - i]]
  //       ? res && true
  //       : res && false;
  // }

  // 法一  使用栈处理问题
  const reverseMap = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  let stack: Array<string> = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == reverseMap[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length ? false : true;
}
// @lc code=end
