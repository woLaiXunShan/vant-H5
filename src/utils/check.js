export default {
  validateURL: (textval) => { /* 合法uri */
    const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return urlregex.test(textval)
  },
  validateLowerCase: (str) => { /* 小写字母 */
    const reg = /^[a-z]+$/
    return reg.test(str)
  },
  validateText: (str) => { /* 中文 */
    const reg = /[\u4e00-\u9fa5]/
    return reg.test(str)
  },
  validateUpperCase: (str) => { /* 大写字母 */
    const reg = /^[A-Z]+$/
    return reg.test(str)
  },
  validatAlphabets: (str) => { /* 大小写字母 */
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
  },
  noAllNumber: (str) => { /* 非纯数字 */
    const reg = /^(?!\d+$)[\da-zA-Z\u4e00-\u9fa5]+$/
    return reg.test(str)
  },
  number_: (str) => { /* 数字 */
    const reg = /^[0-9]+$/
    return reg.test(str)
  },
  IsNumber: (num) => {// 正整数
    const reg = /^[1-9][0-9]{0,}$/
    return reg.test(num)
  },
  validatAlphabetsNumOthers: (str) => { /* 数字、26个英文字母 */
    const reg = /^[A-Za-z0-9]+$/
    return reg.test(str)
  },
  numberOrNumAddLetter: (str) => { /* 数字、或数字加字母 */
    const reg = /^(?=.*?[0-9]).*[a-zA-Z0-9]+$/
    // const reg = /^([A-Za-z0-9]+)(?=.*?[0-9])$/
    // const reg = /^(?=.*?[A-Za-z]+)(?=.*?[0-9]+)(?=.*?[0-9]).*$/
    return reg.test(str)
  },
  emillFormat: (str) => { /* 邮箱 */
    const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
    return reg.test(str)
  },
  noeEmpty: (str) => { /* 非空字符集 */
    const reg = /^\S+$/
    return reg.test(str)
  },
  validatAlphabetsNumZh: (str) => { /* 数字、26个英文字母、中文 */
    const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
    return reg.test(str)
  },
  phoneNumber: (str) => { /* 手机号码验证 */
    const reg = /^[1][2-9][0-9]{9}$/
    return reg.test(str)
  },
  phone_: (str) => { /* 手机号码验证 */
    const reg = /^[1][3-9][0-9][*]{4}[0-9]{4}$/
    return reg.test(str)
  },
  chinese: (params) => { // 验证中文
    const reg = /^[\u4E00-\u9FA5]{1,}$/
    return reg.test(params)
  },
  nameDot: (str) => { // 中文姓名和·，例如穆罕默德·塔里木
    if (str.length < 2) return false
    const reg =  /^[\u4E00-\u9FA5]+(·[\u4E00-\u9FA5]+)*$/
    return reg.test(str)
  },
  noNull: (rule, value, callback) => { // 去出空格
    if (!value.trim()) {
      return callback(new Error('不能输入空格'))
    } else {
      callback()
    }
  },
  idNum: (param) => { // 身份证验证
    const reg = /^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/
    return reg.test(param)
  },
  setNum:(num)=>{ // 正整数，大于0，不能有小数
    const reg = /^(0\.?\d{0,2}|[1-9]\d*\.?\d{0,0})$/
    return reg.test(num)
  },
  IsNum1: (num) => { // 不能为负数，必须大于0,小数点一位
    const reg = /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,1})?$/
    return reg.test(num)
  },
  IsNum1_: (num) => { // 不能为负数，必须大于等于0,小数点一位
    const reg = /^(0|(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,1})?)$/
    return reg.test(num)
  },
  IsNum: (num) => { // 不能为负数，必须大于0,小数点两位
    const reg = /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/
    return reg.test(num)
  },
  IsNum2: (num) => { // 不能为负数，必须大于等于0,小数点两位
    const reg = /^(0|(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?)$/
    return reg.test(num)
  },
  IsNum3: (num) => { // 不能为负数，必须大于0,小数点三位
    const reg = /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,3})?$/
    return reg.test(num)
  },
  IsNum4: (num) => { // 不能为负数，必须大于0,小数点4位
    const reg = /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,4})?$/
    return reg.test(num)
  },
  numFormat(num) { // 千分位加逗号
    const money = (num.toString().indexOf ('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    return money;
  },
  formatNum(num) { // 千分位加逗号可搭配toFixed一起使用
    const num2 = num.toString().split(".")[1]
    const number = (num.toString().split(".")[0]).replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.'+ num2
    return number;  
  },
  setNumber: (num) => { // 录入正确金额数
    num = num.replace(/[^\d.]/g, '') // 清除“数字”和“.”以外的字符
    num = num.replace(/\.{2,}/g, '.') // 只保留第一个. 清除多余的
    num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
    num = num.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3') // 只能输入两个小数（无效，实际可以输任意位）
    if (num.indexOf('.') < 0 && num !== '') { // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
      num = parseFloat(num)
    }
    return num
  },
  setNumberParseInt: (num) => { // 录入正确整数
    if (num === null || num === '' || typeof (null) === 'undefined') {
      return null
    }
    num = num.replace(/[^\d.]/g, '') // 清除“数字”和“.”以外的字符
    num = num.replace(/\.{2,}/g, '.') // 只保留第一个. 清除多余的
    num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
    num = num.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3') // 只能输入两个小数
    if (num.indexOf('.') < 0 && num !== '') { // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
      num = parseFloat(num)
    }
    return parseInt(num)
  },

  setNumber3_: (num) => { // 录入正确金额数3位小数
    num = num.replace(/[^\d.]/g, '') // 清除“数字”和“.”以外的字符
    num = num.replace(/\.{2,}/g, '.') // 只保留第一个. 清除多余的
    num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
    num = num.replace(/^(-)*(\d+)\.(\d\d\d).*$/, '$1$2.$3') // 只能输入3个小数
    if (num.indexOf('.') < 0 && num !== '') { // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
      num = parseFloat(num)
    }
    return num
  },
  setNum1_31:(num)=>{ // 只能输入1~30之间的数字
    if (num <=0 || num > 31) {
      return false
    } else{
      const reg = /^(0\.?\d{0,2}|[1-9]\d*\.?\d{0,0})$/
      return reg.test(num)
    }
  },
  finance: (num) => { // 金额财务格式显示
    // num = String(num)
    num = String(num.replace(/[^\d]/g, ''))
    const len = num.length
    const i = len % 3 // 获取大于3 的倍数的位数
    const a = num.substring(0, i)
    const b = num.substring(i, len)
    let arr = []
    if (a) arr = [a]
    for (let i = 0; i < b.length; i = i + 3) {
      arr.push(b.slice(i, i + 3))
    }
    num = arr.join(',')
    return num
  },
  guid: () => { // 生成随机数
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
  },
  encryptTel: (num)=> { // 手机号加密，中间4位星号
    let tel = String(num);
    let dh=tel.substr(0,3)+"****"+tel.substr(7);
    return dh;
  }
}
