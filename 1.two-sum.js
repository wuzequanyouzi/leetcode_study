/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * @lcpr version=30119
 *
 * [1] 两数之和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (map[target - current] !== undefined) {
      return [map[target - current], i];
    }
    map[current] = i;
  }
};
// @lc code=end



/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */

