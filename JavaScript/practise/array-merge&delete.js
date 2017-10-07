/*把两个数组合并，并删除第二个元素*/
function arrayMergeAndDelete(array1, array2, index) {
    var newArray = array1.concat(array2);
    if (newArray.length > index) {
        newArray.splice(index, 1);
        return newArray;
    } 
}