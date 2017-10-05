/*传入一个string类型的参数，然后将string的每个字符间加空格返回*/
function addSpace(string) {
    var array = string.split('');
    /*    
         for (i = 0; i < array.length - 1; i = 2 * (i + 1)) {
            newarray = array.splice(i + 1, 0, ' ');
        }
    */
    newString = array.join(' ');
    return newString;
}