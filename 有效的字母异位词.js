/**
 * 有效的的字母异位词一 利用数组sort
 * @description 给定两个字符串s和t，编写一个函数来判断t是否是s的字母异位词
 * @param {string} s
 * @param {string} t
 */

const isAnagram1 = (s, t) => {
  const sArr = s.split('')
  const tArr = t.split('')
  const sortFn = (a, b) => {
    return a.charCodeAt() - b.charCodeAt()
  }
  sArr.sort(sortFn)
  tArr.sort(sortFn)
  return sArr.join('') === tArr.join('')
}

/**
 * 对字符串字母进行排序，然后比较两字符串是否相等
 * 
 * 将字符串转成数组
 * 通过sort方法进行排序
 * 再拼接会字符串，进行比较
 * 
 * 复杂度分析
 * 时间复杂度：O(nlogn)
 * JS的sort方法的实现原理，当数组长度小于等于10的时候，采用插入排序，大于10的时候，采用快排，快排的平均时间复杂度是O（nlogn）
 * 空间复杂度：O(n)
 * 创建两个数组变量用于存放字符串分割后的字符串数组，数组的空间长度跟字符串长度线性相关，因此空间复杂度为O(n)
 */

/**
 * 有效的的字母异位词二  计数累加
 * @description 给定两个字符串s和t，编写一个函数来判断t是否是s的字母异位词
 * @param {string} s
 * @param {string} t
 */

const isAnagram2 = (s, t) => {
  if (s.length !== t.length) {
    return false
  }

  const hash = {}
  for (const k of s) {
    hash[k] = hash[k] || 0
    hash[k] += 1
  }
  for (const k of t) {
    if (!hash[k]) {
      return false
    }
    hash[k] -= 1
  }
  return true
}

/**
 * 声明一个对象记录字符串每个字母的个数，另外一个字符串没项与得到的对象做匹配，判断计数是否相等
 * 
 * 声明变量，遍历其中一个字符串，对每个字母出现的次数进行累加
 * 遍历另外一个字符串，将每个字母在声明的变量中做匹配
 * 
 * 复杂度分析
 * 时间复杂度：O(n)
 * 两个单层for循环
 * 空间复杂度：O(1)
 * 声明的变量hash最大长度位256，因为ASCII字符最多有256种，所以考虑为常量空间，即O（1）
 */
