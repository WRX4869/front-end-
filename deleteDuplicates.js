/*如何消除一个数组里面重复的元素？*/
    function deleteDuplicates(array) {
        for (var i = 0; i < array.length - 1; i++) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[i] === array[j]) {
                    array.splice(j, 1);//
                }
            }
        }
        return array;
    }