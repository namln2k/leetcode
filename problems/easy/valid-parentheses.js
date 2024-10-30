const OPEN = ["(", "[", "{"]

const match = function (str1, str2) {
  if (str1 === "(") return str2 === ")"
  if (str1 === "[") return str2 === "]"
  if (str1 === "{") return str2 === "}"
  return false
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  let isValid = true

  s.split("").every((element) => {
    if (OPEN.includes(element)) {
      stack.push(element)
    } else {
      if (stack.length === 0) {
        isValid = false
        return false
      }

      if (match(stack[stack.length - 1], element)) {
        stack.pop()
      } else {
        isValid = false
        return false
      }
    }
    return true
  })

  return isValid && stack.length === 0
}
