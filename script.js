
console.log("do you see me")

var startBtn = document.querySelector("#start-btn");

//const startButton = document.getElementById('start-btn')


function startGame()   {
  


console.log('started')
}

startBtn.addEventListener('click', startGame)

//timer funtion 10 seconds per question, doesnt work!!!!
//document.addEventListener('DOMContentLoaded' , () => {
  //  var timeLeftDisplay = document.querySelector('#time-left')
    
  //  timeLeft = 60

  //  function countDown({
     //   setInterval(function()) {
      //      if(timeLeft) <= 0 ) {
        //        clearInterval(timeLeft = 0)
      //      }
         //   timeLeftDisplay.innerHTML = timeLeft
          //  timeLeft -=1
    //    }, 1000);
  //  })
 //   startBtn.addEventListener('click' , countDown)
//})





var questions = [
    {
          prompt: "How many times do you exercise per week?\n(a) 0-1 \n(b) 2-4\n(c) 5 or more",
          answer: "b"
    },
    {
         prompt: "How long do you exercise?\n(a) 30 min\n(b) 1 hour \n(c) more than 1 hour",
         answer: "b"
    },
    {
         prompt: "How long can you hold plank?\n(a) under 30s\n(b) 1 min\n(c) more than 90s",
         answer: "c"
    },
    {
        prompt: "How many pushups can you do in a row?\n(a) 0-1 \n(b) 2-8\n(c) 10 or more",
        answer: "c"
  },
  {
       prompt: "How much water do you drink a day\n(a) I prefer wine\n(b) 1-3 \n(c) 8 or more",
       answer: "c"
  },
  {
       prompt: "What type of food do you eat?\n(a) all processed\n(b) 80/20\n(c)mainly fruits and veggies ",
       answer: "b"
  }
];
var score = 0;


for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score++;
         alert("Correct!");
    } else {
         alert("WRONG!");
    }
}
alert("you got " + score + "/" + questions.length);
