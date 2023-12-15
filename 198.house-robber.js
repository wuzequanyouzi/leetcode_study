/*
 * @lc app=leetcode.cn id=198 lang=javascript
 * @lcpr version=30111
 *
 * [198] 打家劫舍
 * 类似爬楼梯，只不过dp数组项是表示最大金额，数组下标表示第n个房子，已偷的金额数
 * // 这里dp数组第2项，需要选择其中财物较多的房屋去偷
 * dp[0] = houseMoney[0] 
 * dp[1] = max(houseMoney[0],houseMoney[1])
 * // 比较偷下当前房子之后的总金额多，还是不偷当前，偷上一个房子的总金额多
 * dp[n] = max(dp[n-2] + houseMoney[n], dp[n-1]);
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let dp = [];
  if (nums.length === 1) {
    return nums[0];
  }
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
  };
  return dp[nums.length-1];
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,7,9,3,1]\n
// @lcpr case=end

 */

