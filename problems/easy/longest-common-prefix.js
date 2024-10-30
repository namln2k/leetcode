/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const pivot = strs[0]
  let valid = true
  let index = 0
  let result = ""
  while (valid && result.length < pivot.length) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].startsWith(pivot.slice(0, index))) {
        continue
      } else {
        valid = false
        break
      }
    }

    if (valid) {
      result = pivot.slice(0, index)
    } else {
      return result
    }

    index++
  }

  return result
}
