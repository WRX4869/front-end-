/*清除字符串前后的空格*/
function removeSpace(string) {
    var begin = 0;
    while (begin < string.length && string[begin] === ' ') {
        begin++;
    }
    var end = string.length - 1;
    while (end > begin && string[end] === ' ') {
        end--;
    }
    newString = string.slice(begin, end + 1);
    return newString;
}

function removeSpaceRegExp(string) {
    let str1 = string.replace(/^(\s*)*&(\s*)*$/g,'');
    let str2 = str1.replace(/(\s*)*$/g,'');
    return str2;
}