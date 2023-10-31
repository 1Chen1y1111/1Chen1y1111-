/**
 * 字符串转换整数
 * @description  正则匹配字符串转换整数
 * @param {string} str
 * @param {number}
 */

const atoi = (str) => {
  // 提取需要的字符
  const result = str.trim().match(/^(-|\+)?\d+/g);
  // 判断目标是否超过Int整形最大值或最小值
  return result
    ? Math.max(
        Math.min(Number(result[0]), Math.pow(2, 31) - 1),
        -Math.pow(2, 31)
      )
    : 0;
};
/**
 * 字符串转换整数
 *
 * 正则匹配提取
 * 判断边界情况
 *
 * 复杂度分析
 * 时间复杂度：O(1)
 * 常量 时间复杂度为O(1)
 * 空间复杂度：O(1)
 * 所分配的空间不随着处理数据量变化，因此空间复杂度为O(1)
 */

/**
 * 字符串转换整数
 * @description 逐个判断
 * @param {string} str
 * @param {number}
 */

const atoi2 = (str) => {
  const news = str.trim();
  if (parseInt(news)) {
    return returnNum(parseInt(news));
  } else {
    return 0;
  }
};

const returnNum = (num) => {
  if (num >= -Math.pow(2, 31) && num <= Math.pow(2, 31) - 1) {
    return num;
  } else {
    return num > 0 ? Math.pow(2, 31) - 1 : Math.pow(2, 31);
  }
};

/**
 *
 * 复杂度分析
 * 时间复杂度：O(n)
 * 常量 时间复杂度为O(1)
 * 空间复杂度：O(1)
 * 所分配空间随着处理数据量变化，所以为常量空间，即O（1）
 */
