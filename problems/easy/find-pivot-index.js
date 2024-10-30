/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let tempSum = 0
  let runningSum = []
  let sum = 0

  nums.forEach((element) => {
    sum += element
    tempSum += element
    runningSum.push(tempSum)
  })

  let found = -1

  runningSum.every((subsum, index) => {
    const leftSum = subsum - nums[index]
    const rightSum = sum - subsum
    if (leftSum === rightSum) {
      found = index
      return false
    }
    return true
  })

  return found
}
