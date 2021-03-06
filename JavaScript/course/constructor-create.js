/*head first h5 programming*/
function movie(title, genre, rating, showtimes) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.showtimes = showtimes;
    this.getNextShowing = function () {
        var now = new Date().getTime();
        for (var i = 0; i < this.showtimes.length; i++) {
            var showtime = getTimeFromString(this.showtimes[i]);
            if ((showtimes - now) > 0) {
                return "Next showing of " + this.title + " is " + this.showtimes[i];
            }
        }
    };
}