/*
 * @lc app=leetcode.cn id=139 lang=javascript
 * @lcpr version=30111
 *
 * [139] 单词拆分
 * 解题思路：
 * dp[j..i]表示从j到i之前的字符串是否为字典中的单词
 * 对于每个位置 i，我们需要判断前面的子串 s[0:i] 是否可以被拆分
 * dp[0] = true
 * dp[i] = dp[0..j] && s[j..i] in 字典
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let dp = [];
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    dp[i] = false;
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
};
// @lc code=end



/*
// @lcpr case=start
// "leetcode"\n["leet", "code"]\n
// @lcpr case=end

// @lcpr case=start
// "applepenapple"\n["apple", "pen"]\n
// @lcpr case=end

// @lcpr case=start
// "catsandog"\n["cats", "dog", "sand", "and", "cat"]\n
// @lcpr case=end

 */

