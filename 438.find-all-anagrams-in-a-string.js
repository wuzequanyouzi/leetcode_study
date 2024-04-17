/*
 * @lc app=leetcode.cn id=438 lang=javascript
 * @lcpr version=30122
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (53.66%)
 * Likes:    1422
 * Dislikes: 0
 * Total Accepted:    416.8K
 * Total Submissions: 779.2K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 * 
 * 解题思路：
 * 滑动窗口
 * p要用hash记录，字母 => { 出现数量, 下标 }
 * 判断条件： 
 * 1. 不属于p字符串的字符，则left跳到下一个字符
 * 2. 属于p字符，但是超过该字符数量，left跳到记录的字符下标+1
 * 
 * 示例 1:
 * 
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "abab", p = "ab"
 * 输出: [0,1,2]
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= s.length, p.length <= 3 * 10^4
 * s 和 p 仅包含小写字母
 * 
 * 
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let markArr = []; // 最长无重复字符串的长度
  let markLength = 0;
  let pMap = {};
  let sMap = {};
  let left = 0;
  let right = 0;
  for (let index = 0; index < p.length; index++) {
    const char = p[index];
    pMap[char] = (pMap[char] || 0) + 1;
  }

  // while( right < s.length ) {
  //   let char = s[right];
  //   right++;

  //   if (pMap[char]) {
  //     sMap[char] = (sMap[char] || 0) + 1;
  //     if (pMap[char] === sMap[char]) {
  //       markLength++;
  //     }
  //   }

  //   // 缩小窗口
  //   while( right - left >= p.length ) {
  //     // 满足条件，加入结果
  //     if (markLength === Object.keys(pMap).length) {
  //       markArr.push(left);
  //     }
  //     let _char = s[left];
  //     left++;
  //     if (pMap[_char]) {
  //       if (pMap[_char] === sMap[_char]) {
  //         markLength--;
  //       }
  //       sMap[_char]--;
  //     }
  //   }
  // }

  // 增大窗口
  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    
    // 判断是否在目标字符串中
    if (pMap[char]) {
      // 计数当前窗口【left, index】字符出现的次数
      sMap[char] = (sMap[char] || 0) + 1;
      if (sMap[char] === pMap[char]) {
        // 字符出现次数与目标字符串对应字符的个数一致，则标记+1
        // （当标记数与目标字符串的字符数一致，则为匹配到目标字符串）
        markLength++;
      }
    }

    // 缩小窗口
    // 当窗口长度与目标字符串长度相当，则要缩小窗口
    if (index - left + 1 >= p.length) {

      // 当匹配到目标字符串，则记录
      if (markLength === Object.keys(pMap).length) {
        markArr.push(left);
      }

      let _char = s[left];

      // 缩小窗口后要处理被踢出窗口的字符所记录的数据
      if (pMap[_char]) {
        // 被踢出的字符如果是目标字符串的字符，需要判断当前窗口字符串是否与目标字符串匹配
        if (pMap[_char] === sMap[_char]) {
          // 匹配的情况下，将标记-1，标为未匹配
          markLength--;
        }
        // 被踢出去的字符，计数要剔除这一字符长度
        sMap[_char]--;
      }
      // 缩小窗口
      left++;
    }

  }

  return markArr;
};
// @lc code=end



/*
// @lcpr case=start
// "cbaebabacd"\n"abc"\n
// @lcpr case=end

// @lcpr case=start
// "abab"\n"ab"\n
// @lcpr case=end

 */

