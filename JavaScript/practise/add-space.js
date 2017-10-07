/*给String对象添加一个方法，传入一个string类型的参数，然后将string的每个字符间加空格返回*/
let addSpace = function (string) {
    let array = string.split('');
    let newString = array.join(' ');
    return newString;
}
let String = Object.creat(addSpace);