/*
 * @lc app=leetcode.cn id=49 lang=javascript
 * @lcpr version=30119
 *
 * [49] 字母异位词分组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  for (let index = 0; index < strs.length; index++) {
    const str = strs[index];
    const arrayForStr = Array.from(str);
    const sortedStr = arrayForStr.sort().toString();
    const list = map.has(sortedStr) ? map.get(sortedStr) : [];
    list.push(str);
    map.set(sortedStr, list);
  };
  return [...map.values()];
};
// @lc code=end

/*
// @lcpr case=start
// ["eat", "tea", "tan", "ate", "nat", "bat"]\n
// @lcpr case=end

// @lcpr case=start
// [""]\n
// @lcpr case=end

// @lcpr case=start
// ["a"]\n
// @lcpr case=end

 */

