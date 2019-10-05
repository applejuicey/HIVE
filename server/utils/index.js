// 把rawArray中存在于SpecifiedKeysArray中的元素挑出来
const filterArrayBySpecifiedKeys = function (rawArray, SpecifiedKeysArray) {
  let filteredArray = [];
  rawArray.forEach((rawItem) => {
    if (SpecifiedKeysArray.includes(rawItem.trim())) {
      filteredArray.push(rawItem.trim());
    }
  });
  return filteredArray;
};

// 变量类型输出
// console.log(Object.prototype.toString.call("hello"));//[object String]
// console.log(Object.prototype.toString.call(123));//[object Number]
// console.log(Object.prototype.toString.call(true));//[object Boolean]
// console.log(Object.prototype.toString.call(undefined));//[object Undefined]
// console.log(Object.prototype.toString.call(null));//[object Null]
// console.log(Object.prototype.toString.call({name: "jerry"}));//[object Object]
// console.log(Object.prototype.toString.call(function(){}));//[object Function]
// console.log(Object.prototype.toString.call([]));//[object Array]
// console.log(Object.prototype.toString.call(new Date));//[object Date]
// console.log(Object.prototype.toString.call(/\d/));//[object RegExp]
// function foo(){}
// console.log(Object.prototype.toString.call(new foo()));//[object Object]
const getType = function (variable) {
  if ((/^\[object\s(.*)\]$/.exec(Object.prototype.toString.call(variable)))[1] === 'Number') {
    if (isNaN(variable)) {
      return 'NaN';
    }
  }
  return (/^\[object\s(.*)\]$/.exec(Object.prototype.toString.call(variable)))[1];
};

module.exports = { filterArrayBySpecifiedKeys, getType };