/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=30122
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (39.62%)
 * Likes:    10090
 * Dislikes: 0
 * Total Accepted:    2.8M
 * Total Submissions: 7.1M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 
 * 万能公式
    let left = 0;
    for (let index = 0; index < s.length; index++) {
      const char = s[index];
      // 记录char的数据， char是移入窗口的字符
      
      while( 满足缩小窗口的条件 ) {
        // 移出窗口的字符
        let _char = s[left];
        left++;

        // 处理_char记录的数据
      }
    }
 * 
 * 示例 1:
 * 
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 * 
 * 
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0; // 无重复字符串的起始位置
  //（例如 'abcdcefd', 第一次left 在 0下标，第二次left 在 3下标 ）
  // 第一次遍历到第二个c的时候，发现重复，则下一个无重复字符串的起始位置，
  // 应该是不包含第一个c的，则是c下标+1 = d下标
  // 因为 在当前遍历的已知无重复字符串中，abdc最长，bcd、cd不是当前最长子串，
  // 下个字符是c，bcdc/cdc都有重复字符
  // 所以c(包括c)之前的字符都不需要考虑以它作起始位置了
  let maxLength = 0; // 最长无重复字符串的长度
  let map = {};
  // for (let index = 0; index < s.length; index++) {
  //   const char = s[index];

  //   if (map[char] !== undefined) {
  //     left = Math.max(left, map[char] + 1); // 为什么要取最大值呢？因为滑动窗口只会往右滑动
  //   }
    
  //   map[char] = index;
  //   maxLength = Math.max(maxLength, index - left + 1);
  // }

  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    map[char] = (map[char] || 0) + 1;

    while (map[char] > 1) {
      let _char = s[left];
      map[_char]--;
      left++;
    }
    maxLength = Math.max(maxLength, index - left + 1);
    
  }

  return maxLength;
};
// @lc code=end



/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */

