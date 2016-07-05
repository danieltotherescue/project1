console.log("connected")
//referred to alot - makes workflow easier

document.getElementById('quizSection').addEventListener('click', function(){alert("We will now begin the game!")});

$('#prompt').html('Question 1 - what is your favorite color?');
$('#answers').html('Question 1 - what is your favorite color?');

var answersArray1 = ['green','blue', 'pink', 'none of the above']

answersArray1.forEach(function(answer){
$('#answers').append('<li><button id="[i]"></button> ' +answer+ '</li>')
})

// array of jpeg elements of the manthat will be referenced and loaded on each incorrect answer submission click
//create function to generate div by altering or adding html in that div
