/*
 * @lc app=leetcode.cn id=15 lang=javascript
 * @lcpr version=30119
 *
 * [15] 三数之和
 *
 * https://leetcode.cn/problems/3sum/description/
 *
 * algorithms
 * Medium (37.79%)
 * Likes:    6793
 * Dislikes: 0
 * Total Accepted:    1.7M
 * Total Submissions: 4.6M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j !=
 * k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 * 
 * 你返回所有和为 0 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 解题思路：
 * 1. 先排序
 * 2. 然后分解问题：三数，固定其中一个数，其余两数用双指针，(三数和小于0，左指针往右，三数和大于0，右指针往左)
 * 3. 因为有排序，指针的移动，需要跳过相同数值的下标
 * 
 * 示例 1：
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 * 注意，输出的顺序和三元组的顺序并不重要。
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums = [0,1,1]
 * 输出：[]
 * 解释：唯一可能的三元组和不为 0 。
 * 
 * 
 * 示例 3：
 * 
 * 输入：nums = [0,0,0]
 * 输出：[[0,0,0]]
 * 解释：唯一可能的三元组和为 0 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 * 
 * 
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const resultArr = [];
  const __nums__ = nums.sort((a,b) => a-b);
  let left = 1;
  let right = nums.length - 1;
  const map = {};
  __nums__.forEach((item, index) => map[item] = index);
  for (let index = 0; index < __nums__.length; index++) {
    const target = __nums__[index];
    if (target > 0) break; 
    if (index > 0 && target === __nums__[index - 1]) continue;
    left = index + 1;
    right = __nums__.length - 1;
    while(left < right) {
      const leftNum = __nums__[left];
      const rightNum = __nums__[right];
      if (target + leftNum + rightNum > 0) {
        right--;
      } else if (target + leftNum + rightNum < 0) {
        left++;
      } else {
        resultArr.push([target, leftNum, rightNum]);
        left = map[leftNum] + 1;
        right = map[rightNum] - 1;
      }
    }
  }
  return resultArr
};
// @lc code=end



/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */

