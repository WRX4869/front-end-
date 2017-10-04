/*清除字符串前后的空格*/
function removeSpace(string) {
    var begin = 0;
    do {
        begin++;
    }
    while (begin < string.length, 'string'.charAt(begin) === '/0');
    if ('string'.charAt(string.length - 1) === '/0') {
        var end = -1;
        do {
            end--;
        }
        while (string.length + end > 0, 'string'.charAt(string.length - 1 + end) === '/0');
    }
    newString = string.slice(begin, end);
    return newString;
}