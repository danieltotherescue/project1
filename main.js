console.log("connected")
//referred to alot - makes workflow easier

// document.getElementById('quizSection').innerHTML= "Are you ready to begin the game? Click to begin!";

// document.getElementById('quizSection').addEventListener('click', function(){
// document.getElementById('quizSection').innerHTML= "";
// });

//defining intial elements
// var quizContent = $('quizContent'),
//   promptHolder = $('prompt'),
//   answersHolder = $('answers')

//initial variables

//trivia questions arranged in an array to later randomize and prompt the user
var questions = [
  {
    prompt: "How many chickens are consumed in the US each year?",
    corrAns: "a2",
    answers: ["13 million", "8 billion", "90 million", "10 billion"]
  },
  {
    prompt: "According to a UM Study, what percent of adults lie at least once in a 10 minutes conversation?",
    corrAns: "a2",
    answers: ["85%", "60%", "40%", "10%"]

}, {
    prompt: "How many buses are in the Santa Monica blue bus fleet (as of 2002)?",
    corrAns: "a2",
    answers: ["315", "196", "240", "119"]

}, {
    prompt: "Who originally created MS Dos (the system on which the Microsoft OS was based)?",
    corrAns: 'a1',
    answers: ["Tim Paterson", "Sergei Brin", "Allen Yankovich", "Ahriman Patel"]

}, {
    prompt: "Why are there only 40 songs in the top 40?",
    corrAns: "a2",
    answers: ["40 was the CEO of Billboard’s favorite number", "The jukeboxes at the time could only contain 40 songs", "40 is the loneliest number that you’ll ever do", "The periodical pages on which the list was originally printed were formatted to take a maximum of 40 entries"]

}, {
    prompt: "In Shakespeare’s time, the term 'thou' was used:",
    corrAns: "a3",
    answers: ["as a formal greeting", "as an explative", "to express intimacy, familiarity or even disrespect", "to indicate a numerical value"]

}, {
    prompt: "Which of the following is true?",
    corrAns: "a3",
    answers: ["The inventor of the lobotomy first proved its effectiveness by self administering one.", "Legos were first invented in Norway", "Tenants in Arkansas can be jailed for being one day late with rent", "Stanley Kubrick’s real name is Mark Zuckerberg", "Mark Zuckerberg’s real name is Stanley Kubrick"]

}, {
    prompt: "Actor Bryan Cranston of Breaking Bad has voiced villains on which popular TV show?",
    corrAns: "a2",
    answers: ["Batman the Animated Series", "Power Rangers", "Pokemon", "Teenage Mutant Ninja Turtles"]

}, {
    prompt: "Elvis Presley collected which of the following in every city in which he performed?",
    corrAns: "a3",
    answers: ["Peanut Butter and Banana sandwiches", "Concert Tickets", "Police Badges", "A carton of eggs"]

}, {
    prompt: "Before his role in American Graffitti, Harrison Ford worked as a:",
    corrAns: "a4",
    answers: ["Plumber", "Garbage Collector", "Bus driver", "Carpenter"]

}, {
    prompt: "What is the percentage decrease in air quality throughout the US on July 4th as a result of fireworks displays?",
    corrAns: "a3",
    answers: ["100%", "84%", "42%", "21%"]

}]

var correctAnswer;
var currentAnswers;
var hangingMan = 0;


$('#nextQ').click(function(){
  console.log("Is working?");
  $('.answers').append('<div class="selectors" id="a1"></div>', '<div class="selectors" id="a2"></div>', '<div class="selectors" id="a3"></div>', '<div class="selectors" id="a4"></div>');
  $('#nextQ').hide();

  startGame();
    // create & append div with score
})

function drawHead() {
  ellipse(515,165,60,60);
}
function drawTorso() {
  line(515,195,515,280);
}
function drawrArm() {
  line(495,245,515,215);
}
function drawlArm() {
  line(515,215,535,245);
}
function drawrLeg() {
  line(485,330,515,280);
}
function drawlLeg() {
  line(515,280,545,330);
}

var parts = [drawHead, drawTorso, drawrArm, drawlArm, drawrLeg, drawlLeg]
function startGame() {
  // head = ellipse(515,165,60,60);
  // $("head").hide();
  // torso = line(515,195,515,280);
  // $("torso").hide();
  // rArm = line(495,245,515,215);
  // $("rArm").hide();
  // lArm = line(515,215,535,245);
  // $("lArm").hide();
  // rLeg = line(485,330,515,280);
  // $("rLeg").hide();
  // lLeg = line(515,280,545,330);
  // $("lLeg").hide();
  // parts = [head, torso, rArm, lArm, rLeg, lLeg];
  nextQuestion();

  var counterRight = 0;

  function nextQuestion(){
    var newObject = questions.splice(Math.floor(Math.random() * questions.length), 1)[0];
    var newQuestion = newObject.prompt;
    var newAnswer = newObject.answers;
    $('#instructions').html("");
    $('#headerText').html("");
    $('#prompt').html(newQuestion);
    $('#a1').html("a. " + newAnswer[0]);
    $('#a2').html("b. " + newAnswer[1]);
    $('#a3').html("c. " + newAnswer[2]);
    $('#a4').html("d. " + newAnswer[3]);
    correctAnswer = newObject.corrAns;

  }

  $('.selectors').on('click', function(){
    if  (this.id == correctAnswer){
      counterRight++
      alert('You are correct!');
      nextQuestion();
      //tally correct answers
      $('#tally').html("<p>Score: " + counterRight + " correct answers so far.</p>");
      //no drawing on the hangin' pole
    }else {
      alert("That's Wrong, baby.");
      //draw a section of the man
      nextQuestion();
      parts[hangingMan]();
      hangingMan++;

      $('#tally').html("<p>Score: " + counterRight + " correct answers so far.</p>");

      if (hangingMan === 6){
        $('#quizSection').html("<h1>GAME OVER, YOU MURDERER!</h1>");
        $('#quizSection').append("<button id='startOver'>Start Over</button>");
        $('#startOver').click(function() {
            location.reload();
        var audio = new Audio('assets/8-bit-pew.wav');
        audio.play();
        });

      }
    }
  })

  //mouseover choice colors - maybe shorten with an if statement if extra time
  $('#a1, #a2, #a3, #a4').hover(function(){
    $(this).css("background", "lightgray");
  })

  $('#a1, #a2, #a3, #a4').mouseout(function(){
    $(this).css("background", "white");
  })

}

// $8bitPew = $('<audio controls autoplay> <source src="assets/8-bit-pew.wav" type="audio/wav">Your browser is not good so it does not support the “8 bit pew” noise</audio>')
//
// $('body').append($8bitPew);

// var hangingMan = -1
// var head = ellipse(515,175,80,80);
// var torso = line(515,195,515,280);
// var rArm = line(495,245,515,215);
// var lArm = line(515,215,535,245);
// var rLeg = line(485,330,515,280);
// var lLeg = line(515,280,545,330);
// var parts = [head, torso, rArm, lArm, rLeg, lLeg];



// questions.foreach(function(countAns){
//   if

// })
//reference section

// questions.forEach(function(answer){
// $('#answers').append('<button id="[i]"></button>' +answer+ )
// })


//create array of user answers to generate final result


// array of jpeg elements of the manthat will be referenced and loaded on each incorrect answer submission click
//create function to generate div by altering or adding html in that div

//for music if I have time later
// song.play();
// song.loop();
