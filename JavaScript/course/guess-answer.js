/*head first h5 programming*/
function guessAnswer() {
    var guessInput = document.getElementById("guess");
    var guess = guessInput.value;
    var answer = null;

    var answer = ["red", "green", "blue"];

    var index = Math.floor(Math.random() * answer.length);

    if (guess == answers[index]) {
        answer = "You're right! I was thingking of " + answers[index];
    } else {
        answer = "Sorry, I was thinking of " + answers[index];
    }
}
alert(answer);

