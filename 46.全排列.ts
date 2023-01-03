/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  let result = [];
  findSon([], []);
  function findSon(visited, item) {
    for (let j = 0; j < nums.length; j++) {
      if (!visited[j]) {
        visited[j] = true;
        item.push(nums[j]);
        if (item.length == nums.length) {
          let newItem = JSON.stringify(item);
          newItem = JSON.parse(newItem);
          result.push(newItem);
          visited[j] = false;
          item.pop();
        } else {
          findSon(visited, item);
          visited[j] = false;
          item.pop();
        }
      }
    }
  }
  return result;
}
// @lc code=end
