/**
 * 翻转整数一
 * @description 给定一个32位的有符号整数，需要将这个整数中每位上的数字进行翻转
 * @param {number} x
 * @return {number}
 */
const reverse1 = (x) => {
  // 非空判断
  if(typeof x !== 'number') {
    return
  }
  // 极值
  const MAX = 2147483647
  const MIN = -2147483647

  // 识别数字剩余部分并翻转
  const rest = 
    x > 0
      ? String(x)
      .split('')
      .reverse()
      .join('')
      : String(x)
      .slice(1)
      .split('')
      .reverse()
      .join('');

  // 转换为正常值，区分正负数
  const result = x > 0 ? parseInt(rest,10) : 0 - parseInt(rest,10)

  // 边界情况
  if(result >= MIN && result <= MAX) {
    return result
  }
  return 0
}

/**
 * 将数字看成有符号位的字符串，通过JS 提供的字符串和数组方法来实现非符号部分的翻转，后再判断添加符号
 * 
 * 1、首先设置边界极值
 * 2、使用字符串的翻转函数
 * 3、补充符号
 * 4、拼接结果
 * 
 * 复杂度分析
 * 时间复杂度：O(n)
 * reverse 函数时间复杂度为 O(n)，n 为整数长度，因此时间复杂度为 O(n)
 * 空间复杂度：O(n)
 * 创建临时String对象，n 为整数长度，因此空间复杂度为O(n)
 */

/**
 * 翻转整数二
 * @description 给定一个32位的有符号整数，需要将这个整数中每位上的数字进行翻转
 * @param {number} x
 * @return {number}
 */
const reverse2 = (x) => {
  // 获取相应数的绝对值
  let int = Math.abs(x)
  // 极值
  const MAX = 2147483647
  const MIN = -2147483647
  let num = 0;
  // 遍历循环生成每一位数字
  while (int !== 0) {
    // 123 % 10 + 0 * 10        12 % 10 + 3 * 10          1 % 10 + 32 * 10
    // 3                        32                        321
    // 12                       1                         0
    // 从 num 的最后一位开始取值拼成新的数
    num = (int % 10) + (num * 10)
    console.log('num: ', num);
    // 剔除掉被消费的部分
    int = Math.floor(int / 10)
    console.log('int: ', int);
  }
  // 异常值
  if (num >= MAX || num <= MIN) {
    return 0
  }
  if (x < 0) {
    return num * -1
  }
  return num
}

/**
 * 类似欧几里得求最大公约数，通过模10取到最低位，再乘10将最低为迭代到最高位，完成翻转
 * 
 * 设置边界极值
 * 取给定数值的绝对值，遍历循环生成每一位数组，从最后一位开始取值拼成新的数
 * 同步剔除掉被消费的部分
 * 如果最终结果为异常值，则直接返回0；如果原本数据为负数，则最终结果取反
 * 
 * 复杂度分析
 * 时间复杂度：O(n)
 * 代码中使用 for 循环，次数为 n，因此时间复杂度为 O(n)
 * 空间复杂度：O(1)
 * 只用到了常数个变量，因此空间复杂度为O(1)
 */
