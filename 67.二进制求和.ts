/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
// function addBinary(a: string, b: string): string {
//   let upSymbol = 0;
//   let resStr: string = "";
//   for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
//     let num1 = a[i] ?? 0;
//     let num2 = b[j] ?? 0;
//     let temp = Number(num1) + Number(num2) + upSymbol;

//     if (Number(temp) % 2) {
//       upSymbol = 0;
//       resStr = "1" + resStr;
//     } else {
//       resStr = "0" + resStr;
//       if (Number(temp)) {
//         upSymbol = 1;
//       } else {
//         upSymbol = 0;
//       }
//     }
//   }

//   return upSymbol === 0 ? resStr : "1" + resStr;
// }
function addBinary(a: string, b: string): string {
    const a1 = a.split('').reverse();
    const b1 = b.split('').reverse();
    let curry = 0;
    const time = Math.max(a1.length, b1.length);
    let result = [];

    if (a && b) {
        for(let i = 0; i < time; i++) {
            const num1 = a1[i] ? Number(a1[i]) : 0;
            const num2 = b1[i] ? Number(b1[i]) : 0;
            const sum = num1 + num2 + curry;
            result[i] = sum % 2;
            curry = sum > 1 ? 1 : 0;
        }
        if (curry) {
            result[time + 1] = 1;
        }
    } else {
        if (a) {
            return a;
        } else {
            return b;
        }
    }

    return result.reverse().join('');
};
// @lc code=end
