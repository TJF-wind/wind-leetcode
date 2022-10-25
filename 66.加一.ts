/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let upSymbol = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let temp = digits[i] + upSymbol;
    if (temp < 10) {
      digits[i] = temp;
      upSymbol = 0;
    } else {
      digits[i] = 0;
      upSymbol = 1;
      if (i === 0) digits.unshift(1);
    }
  }

  return digits;
}
// @lc code=end
