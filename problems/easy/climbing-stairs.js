/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = {}
  memo[0] = 1
  memo[1] = 1

  if (n <= 1) {
    return memo[n]
  }

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }

  return memo[n]
}
