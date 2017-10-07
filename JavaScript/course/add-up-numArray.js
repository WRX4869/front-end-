/*head first h5 programming*/
function addUp(numArray) {
    var total = 0;
    for (var i = 0; i < numArray.length; i++) {
        total += numArray[i];
    }
    return total;
}
var theTotal = addUp([1, 5, 3, 9]);//18
