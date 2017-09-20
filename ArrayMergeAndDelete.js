var array1 = [2, 3, 5, 7, 9];
var array2 = ["spring", "summer", "autumn", "winter"];

function arrayMergeAndDelete() {
    var newArray = array1.concat(array2);
    newArray.splice(1, 1);
    return newArray;
}