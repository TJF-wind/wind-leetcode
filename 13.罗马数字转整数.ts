/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 * 
 *  左边数字大于右边则相加  小于则相减
 */

// @lc code=start
function romanToInt(s: string): number {
  const mapTemp = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res: number = 0;
  let temp: Array<string> = s.split("");
  let arrTemp: any = [];
  for (var i = 0; i < temp.length; i++) {
    arrTemp.push(mapTemp[`${temp[i]}`]);
  }

  let prenum = arrTemp[0];
  for (let i = 1; i < arrTemp.length; i++) {
    if (prenum < arrTemp[i]) {
      res -= prenum;
    } else {
      res += prenum;
    }
    prenum = arrTemp[i];
  }

  res += prenum;
  return res;
}
// @lc code=end
