/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let cursor = head

  while (cursor && cursor.next) {
    if (cursor.next.val === cursor.val) {
      cursor.next = cursor.next.next
    } else {
      cursor = cursor.next
    }
  }

  return head
}
