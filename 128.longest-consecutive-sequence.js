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
  let maxCount = 0;
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    if (!map[num]) {
      const left = map[num - 1] || 0;
      const right = map[num + 1] || 0;
      const curr = left + 1 + right;
      maxCount = Math.max(curr, maxCount);
      // 当前数字最长连续数
      map[num] = curr;
      // 更新当前数字的连续字符最左端的数字最长连续数
      map[num - left] = curr;
      // 更新当前数字的连续字符最右端的数字最长连续数
      map[num + right] = curr;
      // 为什么要这样做：
      // 因为已被记录的连续数字不会再进入计算最长连续串的逻辑中，
      // 每一次进入计算的数，都只会是某个连续序列的左端或右端未记录的数
      // 所以只需要更新某个连续序列的左端数和右端数
      // 这样可以就可以保证当前处理的数可满足left + 1 + right;
    }
  }
  return maxCount;
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

