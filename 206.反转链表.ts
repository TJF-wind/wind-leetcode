/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
    let temp = new ListNode();
    let next = null;
    while (head) {
      next = head.next;//下一个节点
      head.next = temp.next;
      temp.next = head;//head接在temp的后面
      head = next;//head向后移动一位
    }
    return temp.next;
}


// @lc code=end
