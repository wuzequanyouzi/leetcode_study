/*
 * @lc app=leetcode.cn id=70 lang=javascript
 * @lcpr version=30111
 *
 * [70] 爬楼梯
 * 解题思路：
 * dp[n] = dp[n-1] + dp[n-2]
 * dp[1] = 1;
 * dp[2] = 2;
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// @lc code=end



/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

 */

