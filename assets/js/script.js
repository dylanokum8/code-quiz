var qI = 0;
var time=60;
var clockId;
var score = 0;
var clock=document.getElementById("time");
var questionEl=document.getElementById("prompt");
var answerEl1=document.getElementById("ans1")
var answerEl2=document.getElementById("ans2")
var answerEl3=document.getElementById("ans3")
var answerEl4=document.getElementById("ans4")


document.getElementById("start").addEventListener("click", handleClick);
var buttons = document.getElementsByClassName("ansButton");
for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", handleAnswer)
}

function handleClick() {
    const { Q, A } = questions[qI];
    // console.log(Q, "This is Q");
    // console.log(A, "This is A");

    if(qI == 0) {
        clockId = setInterval(handleTime, 1000);
    }
   
    questionEl.innerHTML = Q;
    answerEl1.innerHTML = A[0];
    answerEl2.innerHTML = A[1];
    answerEl3.innerHTML = A[2];
    answerEl4.innerHTML = A[3];
};

function handleTime() {
    time--;

    if(time < 1) {
        time = 0;
        clearInterval(clockId);
    }
    clock.innerText = time;
};

function handleAnswer(e) {

// console.log(e.target.textContent)
    if(e.target.textContent === questions[qI].C) {
        // cycle to next question after answer is selected
        score += 10;
    } else {
        time -= 10;
    };
    qI++
    if(qI < 5 ) { 
        handleClick();
    }
    else {
        // function to build last page. need to add an input box to put initials down to store locally for highscores
    }
}



// A.forEach(ans => {
    //     prompt.innerHTML += 
    //         `<button onclick='handleAnswer("${ans}")'>
    //             ${ans}
                
    //         </button>`
    // });