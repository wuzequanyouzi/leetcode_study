/*
 * @lc app=leetcode.cn id=4 lang=javascript
 * @lcpr version=30111
 *
 * [4] 寻找两个正序数组的中位数
 * 
 * 解题思路：
 * 1. 计算两个数组总长度的一半的数组下标值
 * 2. 计算奇偶性，偶数的中位数需要(mid, mid+1) / 2
 * 3. 依次从两数组下标0位置开始，按正序依次合并数组，当合并数组长度到达总数组长度一半，中断合并，并计算中位数。
 * 4. 需要处理边界，空数组，数组元素值都为0，单个数组长度不够数组总长度的一半。
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let isOdd = (nums1.length + nums2.length) % 2;
  let mid = Math.ceil((nums1.length + nums2.length) / 2);
  let i = j = 0;
  let merge = [];
  while(i < nums1.length && j < nums2.length) {
    if(nums1[i] < nums2[j]) {
      merge.push(nums1[i]);
      i++;
    } else {
      merge.push(nums2[j]);
      j++;
    }
    if (merge.length >= mid) {
      const midValue = merge[merge.length - 1];
      if (isOdd) {
        return midValue;
      } else {
        let item = nums1[i] ?? Infinity;
        let jtem = nums2[j] ?? Infinity;
        const midValue1 = item < jtem ? item : jtem;
        return (midValue + midValue1) / 2;
      }
    }
  }
  while(i < nums1.length) {
    merge.push(nums1[i]);
    i++;
    if (merge.length >= mid) {
      const midValue = merge[merge.length - 1];
      if (isOdd) {
        return midValue;
      } else {
        let item = nums1[i];
        const midValue1 = item;
        return (midValue + midValue1) / 2;
      }
    }
  }
  while(j < nums2.length) {
    merge.push(nums2[j]);
    j++;
    if (merge.length >= mid) {
      const midValue = merge[merge.length - 1];
      if (isOdd) {
        return midValue;
      } else {
        let jtem = nums2[j];
        const midValue1 = jtem;
        return (midValue + midValue1) / 2;
      }
    }
  }
};
// @lc code=end



/*
// @lcpr case=start
// [1,3]\n[2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[3,4]\n
// @lcpr case=end

 */

