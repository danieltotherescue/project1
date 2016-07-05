console.log("connected")
//referred to alot - makes workflow easier

// document.getElementById('quizSection').innerHTML= "Are you ready to begin the game? Click to begin!";
//
// document.getElementById('quizSection').addEventListener('click', function(){
//
//   // document.getElementById('quizSection').innerHTML= "";
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
    corrAns: "8 billion",
    answers: ["13 million", "8 billion", "90 million", "10 billion"]
  },
  {
    prompt: "According to a UM Study, what percent of adults lie at least once in a 10 minutes conversation?",
    corrAns: "60%",
    answers: ["85%", "60%", "40%", "10%"]

}, {
    prompt: "How many buses are in the Santa Monica blue bus fleet (as of 2002)?",
    corrAns: "196",
    answers: ["315", "196", "240", "119"]

}, {
    prompt: "Who originally created MS Dos (the system on which the Microsoft OS was based)?",
    corrAns: "Tim Paterson",
    answers: ["Tim Paterson", "Sergei Brin", "Allen Yankovich", "Ahriman Patel"]

}, {
    prompt: "Why are there only 40 songs in the top 40?",
    corrAns: "The jukeboxes at the time could only contain 40 songs",
    answers: ["40 was the CEO of Billboard’s favorite number", "The jukeboxes at the time could only contain 40 songs", "40 is the loneliest number that you’ll ever do", "The periodical pages on which the list was originally printed were formatted to take a maximum of 40 entries"]

}, {
    prompt: "In Shakespeare’s time, the term 'thou' was used:",
    corrAns: "to express intimacy, familiarity or even disrespect",
    answers: ["as a formal greeting", "to express intimacy, familiarity or even disrespect", "as an explative", "to indicate a numerical value"]

}, {
    prompt: "Which of the following is true?",
    corrAns: "Tenants in Arkansas can be jailed for being one day late with rent",
    answers: ["Tenants in Arkansas can be jailed for being one day late with rent", "The inventor of the lobotomy first proved its effectiveness by self administering one.", "Legos were first invented in Norway", "Stanley Kubrick’s real name is Mark Zuckerberg", "Mark Zuckerberg’s real name is Stanley Kubrick"]

}, {
    prompt: "Actor Bryan Cranston of Breaking Bad has voiced villains on which popular TV show?",
    corrAns: "Power Rangers",
    answers: ["Batman the Animated Series", "Power Rangers", "Pokemon", "Teenage Mutant Ninja Turtles"]

}, {
    prompt: "Elvis Presley collected which of the following in every city in which he performed?",
    corrAns: "Police Badges",
    answers: ["Peanut Butter and Banana sandwiches", "Police Badges", "Concert Tickets", "A carton of eggs"]

}, {
    prompt: "Before his role in American Graffitti, Harrison Ford worked as a:",
    corrAns: "Carpenter",
    answers: ["Plumber", "Garbage Collector", "Carpenter", "Bus driver"]

}, {
    prompt: "What is the percentage decrease in air quality throughout the US on July 4th as a result of fireworks displays?",
    corrAns: "42%",
    answers: ["100%", "84%", "42%", "21%"]

}]



//set =var and splice out to question.splice to remove array so it doesn't repeat
//currentQ

//for loop to go through answers and create buttons for each
// for (var i=0; i<answers.length; i++) {
//
// }

//

var randQuestion = function () {
  return questions.splice(Math.floor(Math.random() * questions.length), 1)[0];
}

//brute force/one by one approach
$('#quizContent').html(randQuestion);
// $('#answers').html('Question 1 - what is your favorite color?');


// questions.forEach(function(answer){
// $('#answers').append('<button id="[i]"></button>' +answer+ )
// })



// array of jpeg elements of the manthat will be referenced and loaded on each incorrect answer submission click
//create function to generate div by altering or adding html in that div
