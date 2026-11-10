
// getting the quiz form and results section
let quizform = document.getElementById("httpQuiz");
let results = document.getElementById("results");

// keeping track of the user's score
let score = 0;

// now keeping track of whether each question was answered correctly
let q1correct = false;
let q2correct = false;
let q3correct = false;
let q4correct = false;
let q5correct = false;
let q6correct = false;
let q7correct = false;
let q8correct = false;
let q9correct = false;
let q10correct = false;

// setting the quiz timer to 10 minutes
let timeleft = 600;

// recording when the quiz starts
let startTime = Date.now();

// starting the countdown
let timer = setInterval(function() {

    timeleft--;

    // converting seconds into minutes and seconds
    let minutes = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;

    // adding a zero in front of single-digit seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // updating the timer
    document.getElementById("timer").textContent = minutes + ":" + seconds;

    // automaitically submitting the quiz when time runs out
    if (timeleft <= 0) {
        clearInterval(timer);
        alert("Time is up! Your quiz will be submitted.");
        quizform.requestSubmit();
    }

}, 1000);

// checking the answers when the quiz is submitted
quizform.addEventListener("submit", function(event) {
    event.preventDefault();

    // stoping the timer when the quiz is submitted
clearInterval(timer);

    score = 0;

    // question 1
    let a1 = document.getElementById("q1").value.toLowerCase().trim();

    if (a1 === "hypertext transfer protocol") {
        score++;
        q1correct = true;
    }

    // question 2
    let a2 = document.querySelector('input[name="q2"]:checked');

    if (a2 && a2.value === "A") {
        score++;
        q2correct = true;
    }

    // question 3
    let a3 = document.querySelector('input[name="q3"]:checked');

    if (a3 && a3.value === "D") {
        score++;
        q3correct = true;
    }

    // question 4
    let a4 = document.getElementById("q4").value.trim();

    if (a4 === "404") {
        score++;
        q4correct = true;
    }

    // question 5
    let a5 = document.querySelector('input[name="q5"]:checked');

    if (a5 && a5.value === "B") {
        score++;
        q5correct = true;
    }

    // question 6
    let a6 = document.querySelectorAll('input[name="q6"]:checked');

    let c6 = 0;

    a6.forEach(function(a) {
        if (a.value === "GET" ||
            a.value === "POST" ||
            a.value === "PUT") {
            c6++;
        }
    });

    if (c6 === 3 && a6.length === 3) {
        score++;
        q6correct = true;
    }

    // question 7
    let a7 = document.querySelector('input[name="q7"]:checked');

    if (a7 && a7.value === "C") {
        score++;
        q7correct = true;
    }

    // question 8
    let a8 = document.querySelector('input[name="q8"]:checked');

    if (a8 && a8.value === "D") {
        score++;
        q8correct = true;
    }

    // question 9
    let a9 = document.querySelector('input[name="q9"]:checked');

    if (a9 && a9.value === "A") {
        score++;
        q9correct = true;
    }

    // question 10
    let a10 = document.querySelectorAll('input[name="q10"]:checked');

    let c10 = 0;

    a10.forEach(function(a) {
        if (a.value === "A" ||
            a.value === "B" ||
            a.value === "D") {
            c10++;
        }
    });

    if (c10 === 3 && a10.length === 3) {
        score++;
        q10correct = true;
    }

    // Calculate how long the quiz took
let endtime = Date.now();
let timespent = Math.floor((endtime - starttime) / 1000);

let minutesspent = Math.floor(timespent / 60);
let secondsspent = timespent % 60;

// Add a zero in front of single-digit seconds
if (secondsspent < 10) {
    secondsspent = "0" + secondsspent;
}

// Determine whether the student passed
let passmessage = "";

if (score >= 7) {
    passmessage = "You Passed!";
} else {
    passmessage = "You Failed.";
}

// Display the score and time
results.innerHTML = "<h3>Your Results</h3>" +
    "<h4>" + passmessage + "</h4>" +
    "<p>You scored " + score + " out of 10.</p>" +
    "<p>Time spent: " + minutesspent + ":" + secondsspent + "</p>";

});
