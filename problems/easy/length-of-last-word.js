/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim()

  let i = s.length - 1

  while (i >= 0 && s[i] !== " ") {
    i--
  }

  return s.length - 1 - i
}
