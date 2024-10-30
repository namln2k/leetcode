/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  s = s.split("")
  t = t.split("")
  let dictionary = {}

  if (s.length != t.length) return false

  let isValid = true

  s.every((element, index) => {
    if (dictionary[element]) {
      if (dictionary[element] === t[index]) {
        isValid = true
        return true
      } else {
        isValid = false
        return false
      }
    } else {
      dictionary[element] = t[index]
      return true
    }
  })

  if (!isValid) return false

  dictionary = {}

  t.every((element, index) => {
    if (dictionary[element]) {
      if (dictionary[element] === s[index]) {
        isValid = true
        return true
      } else {
        isValid = false
        return false
      }
    } else {
      dictionary[element] = s[index]
      return true
    }
  })

  return isValid
}
