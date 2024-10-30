/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {}

  nums.forEach((e, index) => (map[target - e] = { index, value: e }))

  let result

  nums.every((e, index) => {
    if (map[e] && map[e].index != index) {
      result = [index, map[e].index]

      return false
    }

    return true
  })

  return result
}
