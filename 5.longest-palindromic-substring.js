/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=30111
 *
 * [5] 最长回文子串
 * 解题思路：动态规划
 * 1. 回文串满足的条件：首尾字符相同，去除首尾字符，仍是回文, abaaba
 * 2. 单个字符是回文 , a
 * 3. 3个以下的字符，满足首尾字符相同，则是回文, aa 
 * 
 * 使用二维数组, dp[i..j] => i..j 表示i到j的子串；
 * dp[i..j]的值表示i..j子串是否为回文串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // 
  if (s.length < 3) {
    if (s[0] === s[s.length -1]) {
      return s;
    } else {
      return s[0];
    }
  }

  let dp = Array(s.length);
  for (let i = 0; i < s.length; i++) {
    dp[i] = Array(s.length);
    dp[i][i] = true;
    for (let j = 0; j < i; j++) {
      if (s[i] === s[j]) {
        // i - j <= 2 表示长度为2以下的字符串， dp[j + 1][i - 1]表示 去除了首尾字符的子串
        if (i - j <= 2 || dp[j + 1][i - 1]) {
          dp[j][i] = true;
        }
      }
    }
  }
  // 默认字符串最小回文长度为1
  let maxLen = 1;
  let begin = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      // 如果是字符串i..j 是回文，并且长度比已有的回文长度长，则记录回文的始终位置
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  };
  return s.slice(begin, begin + maxLen);
};
// @lc code=end



/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */

