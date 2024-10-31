/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0

  while (i < nums.length) {
    if (nums[i] === val) {
      let j = i,
        count = 1
      while (nums[j] === val) {
        j++
      }
      nums.splice(i, j - i)
    }
    i++
  }

  return nums.length
}
