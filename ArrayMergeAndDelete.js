function arrayMergeAndDelete(array1, array2, index) {
    var newArray = array1.concat(array2);
    if (newArray.length > index + 1) {
        newArray.splice(index, 1);
        alert(newArray);
    } else {
        alert("The newArray is not long enough.");
    }
}