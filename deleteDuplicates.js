/*如何消除一个数组里面重复的元素？*/
function deleteDuplicates(array) {
    if (arr.constructor === Array) {
        for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length - 1; j++) {
                if (array[i] === array[j]) {
                    array.splice(j, 1);
                } else {
                    continue;
                }
            }
        }
        return array;
    }
}