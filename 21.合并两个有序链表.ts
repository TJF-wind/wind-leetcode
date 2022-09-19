/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

interface ListNode {
  val: number;
  next: ListNode | null;
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let tempListNode: ListNode = { next: null, val: 0 };
  let tempnode = tempListNode;

  while (list2 && list1) {
    if (list1?.val >= list2?.val) {
      tempnode.next = list2;
      list2 = list2.next;
    } else {
      tempnode.next = list1;
      list1 = list1.next;
    }
    tempnode = tempnode.next;
  }
  console.log("tempnode---", tempnode);
  if (list1) tempnode.next = list1;
  if (list2) tempnode.next = list2;

  return tempListNode.next;
}

// @lc code=end
``;
