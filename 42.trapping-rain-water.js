/*
 * @lc app=leetcode.cn id=42 lang=javascript
 * @lcpr version=30119
 *
 * [42] 接雨水
 *
 * https://leetcode.cn/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (63.31%)
 * Likes:    5095
 * Dislikes: 0
 * Total Accepted:    917K
 * Total Submissions: 1.4M
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 解题思路：
 * 双指针
 * 左右指针从左右端开始，
 * 当右指针指向的高度高于左指针指向的高度，则说明左指针右边若有比它低的高度，则一定存在凹槽（可以存水）
 * 同理，当左指针指向的高度高于右指针的高度，则右指针左边若有比它低的高度，则一定存在凹槽，
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
 * 
 * 
 * 示例 2：
 * 
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 * 
 * 
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // const hasHeight = [];
  // height.forEach((item, index) => {
  //   if (item) {
  //     hasHeight.push([item, index]);
  //   }
  // });
  let left = 0;
  let right = height.length - 1;
  let result = 0;
  let leftMax = 0;
  let rightMax = 0;

  while(left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if (height[left] >= height[right]) {
      result += rightMax - height[right];
      right--;
    } else {
      result += leftMax - height[left];
      left++;
    }
  }

  return result;
};
// @lc code=end



/*
// @lcpr case=start
// [0,1,0,2,1,0,1,3,2,1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,2,0,3,2,5]\n
// @lcpr case=end

 */

