/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let tempSum = 0
  let result = []

  nums.forEach((element) => {
    tempSum += element
    result.push(tempSum)
  })

  return result
}
