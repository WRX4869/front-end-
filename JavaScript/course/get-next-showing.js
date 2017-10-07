/*head first h5 programming*/
function getNextShowing(movie) {
    var now = new Date().getTime(); //返回当前时间
    for (var i = 0; i < movie.showtimes.length; i++) {
        var showtime = getTmeFromString(movie.showtimes[i]);//得到相应的时间值
        if ((showtime - now) > 0) {
            return "Next showing of " + movie.title + "is " + movie.showtimes[i];
        }
    }
    return null;
}