/*用js实现随机选取n-m之间的c个数字，存入一个数组，并排序。*/
function sortRandomNum(min, max, c) {
    var arr = new Array();
    for (i = 0; i < c; i++) {
        var randomNum = parseInt(Math.random() * (max - min) + min);
        arr.push(randomNum);
    }
    alert(arr.sort());
}