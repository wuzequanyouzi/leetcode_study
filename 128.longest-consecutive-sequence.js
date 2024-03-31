/*
 * @lc app=leetcode.cn id=128 lang=javascript
 * @lcpr version=30119
 *
 * [128] 最长连续序列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const map = {};
  nums.forEach(item => {
    map[item] = true;
  });
  const result = Object.keys(map).map((item) => parseInt(item)).sort((a,b) => a-b);
  let max = 0;
  let target = null;
  let count = 1;
  result.forEach(item => {
    if (target !== null && item - target === 1) {
      count += 1;
    } else if (target !== null && item - target > 1) {
      count = 1;
    }
    max = Math.max(max, count);
    target = item;
  });
  return max;
};

// @lc code=end



/*
// @lcpr case=start
// [100,4,200,1,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,3,7,2,5,8,4,6,0,1]\n
// @lcpr case=end

 */

