/*
 * @lc app=leetcode.cn id=2 lang=typescript
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // 初始化哑结点 dmy
  let dmy = new ListNode(0);
  let curr = dmy;
  // 进位
  let addOne = 0;

  while (addOne || l1 || l2) {
    let val1 = l1 === null ? 0 : l1.val;
    let val2 = l2 === null ? 0 : l2.val;

    let sum = val1 + val2 + addOne;
    sum >= 10 ? (addOne = 1) : (addOne = 0);

    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  return dmy.next;
}
// @lc code=end
