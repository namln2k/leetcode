/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 1,
    j = 1
  while (i < nums.length) {
    if (nums[i] !== nums[j - 1]) {
      nums[j] = nums[i]
      j++
    }
    i++
  }

  return j
}
