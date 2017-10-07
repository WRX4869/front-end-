/*head first h5 programming*/
var scoops = 10;
while (scoops > 0) {
    alert("More icecream!");
    scoops = scoops - 1;
}
alert("life without ice cream isn't the same");

var tops = 5;
while (tops > 0) {
    for (var spins = 0; spins < 3; spins++) {
        alert("Top is spinning!");
    }
    tops = tops - 1;
}

var scoops = 10;
while (scoops >= 0) {
    if (scoops == 3) {
        alert("Ice cream is running low!");
    }
    else if (scoops > 9) {
        alert("Eat faster,the ice cream is going to melt!");
    }
    else if (scoops == 2) {
        alert("Going once!");
    }
    else if (scoops == 1) {
        alert("Going twice!");
    }
    else if (scoops == 0) {
        alert("Gone!");
    }
    else {
        alert("Still lots of ice cream left, come and get it.");
    }
    scoops = scoops - 1;
}
alert("life without ice cream isn't the same");

while (cans > 0) {
    lyrics = lyrics + cans + "cans of" + drink + "on the wall<br>";
    lyrics = lyrics + cans + "cans of" + drink + "<br>"
    lyrics = lyrics + "Take one down, pass it around,<br>";
    if (cans > 1) {
        lyrics = lyrics + (cans - 1) + "cans of" + drink + "on the wall<br>";
    }
    cans = cans - 1;
}