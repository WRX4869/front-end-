/*清除字符串前后的空格*/
function removeSpace(string) {
    var begin = 0;
    while (begin < string.length, 'string'[begin] === ' ') {
        begin++;
    }
    if ('string'[string.length - 1] === ' ') {
        var end = -1;
        while (string.length + end > 0, 'string'.charAt[string.length - 1 + end] === ' ') {
            end--;
        }
    }
    newString = string.slice(begin, end);
    return newString;
}