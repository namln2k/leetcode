/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let count = 0,
    i,
    start = s.length - 1,
    max = 0,
    map = {}

  while (start >= 0) {
    i = start

    while (!map[s[i]] && s[i] !== undefined) {
      count++
      map[s[i]] = true
      i--
    }

    if (count > max) {
      max = count
    }

    map = {}
    count = 0
    start--
  }

  return max
}
