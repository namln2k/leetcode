/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = undefined,
    pointer = result,
    remainer = 0

  while (l1 || l2) {
    if (!l1) l1Val = 0
    else l1Val = l1.val
    if (!l2) l2Val = 0
    else l2Val = l2.val
    const tempSum = l1Val + l2Val + remainer
    if (result === undefined) {
      result = new ListNode(tempSum % 10, undefined)
      pointer = result
    } else {
      pointer.next = new ListNode(tempSum % 10, undefined)
      pointer = pointer.next
    }
    if (tempSum > 9) remainer = 1
    else remainer = 0

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  if (remainer === 1) pointer.next = new ListNode(1, undefined)

  return result
}
