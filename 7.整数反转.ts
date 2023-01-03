/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  // silly way-one
  //   const flag = x > 0 ? 1 : -1;
  //   const isZero = x % 10 ? false : true;
  //   let tempStr = String(x * flag);
  //   isZero ? tempStr.slice(tempStr.length - 2, tempStr.length - 1) : null;

  //   let res = Number(tempStr.split("").reverse().join("")) * flag;

  //   if (
  //     x < Math.pow(-2, 31) ||
  //     x > Math.pow(2, 31) - 1 ||
  //     res < Math.pow(-2, 31) ||
  //     res > Math.pow(2, 31) - 1
  //   ) {
  //     return 0;
  //   } else {
  //     return res;
  //   }

  // second way

  let result = 0;
  while (x !== 0) {
    result = result * 10 + (x % 10);
    x = (x / 10) | 0;
  }
  return (result | 0) === result ? result : 0;
}
// @lc code=end
