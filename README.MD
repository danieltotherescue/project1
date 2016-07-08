#Project #1: Game by Daniel


## Daniel meets Project 1


### Trivia Hangman
Test Yourself in this life or death game of Trivia Hangman - where your correct answers hold a stick figure's life in the balance!

Directions: Answer the trivia questions.  Each correct answer results in good vibes and no extra drawn body parts. Each incorrect answer gets the stick figure man one step closer to oblivion.  If you answer 8 questions correctly, you win! Answer well, my friends!  

This is a one person game, but can be played cooperatively as a team. Are you ready? Click the button if you're ready.
(Displayed on initial loading of the page as well)

Rules: Answer the trivia questions.  If trivia questions are answered incorrectly, a section of the man will be drawn.  If the man in completely drawn (taking six incorrect answers to do so), you have lost the game.  You will then have an opportunity to try again.

---

#####Technologies used

The page was made with HTML, CSS, vanilla Javascript, JQuery, and p5.js. Some audio samples were also used to enhance the site. I used p5js for the Hangman image and more straightforward js/jQuery on the left hand side.  

If I have some extra time after finishing I'll try to animate the addition of stick figure body parts.

---

#####MVP
At a minimum, the game needs to have sufficient functionality to:

• ask the user questions
• take user input
• have win logic to know when the user has won or lost the game

######User stories on Trello

User stories and project flow were made and tracked using Trello.  It can be viewed at https://trello.com/b/LhOJ1oPL/project-1

---

#####The approach taken

I approached the project from first generating the correct functionality of the trivia input (multiple choice) and output (correct or incorrect given via conditional loop).  When an incorrect answer is given, more pieces are added to the man, with a max of six errors and 8 correct answers to win the game.

I spent a bit too much time investigating options with p5, and when I felt time pressure I thought I might move to using canvas as a more straightforward option, but in the end p5 worked just fine and was easier to link to the site than I was thinking it would be. In a nutshell: Get the game functionality and win logic up and running, then make sure the canvas section is linked and working. Then make sure it can be cross-platform.

---

#####Installation instructions

Clone this repo:
Open the index file in the browser.

Visit the following link:
https://danieltotherescue.github.io/project1/

---

#####Unsolved problems

1. Making an alternative to the alert messages.
2. Optimal responsiveness

######Stretch Goals

1. Add additional p5 functionality, including background options, animation of the canvas,
2. Suspenseful music to set the proper mood for the user.

---



<!--
Your app must:

* **Render a game in the browser**
* Stick with **KISS (Keep It Simple Son)** and **DRY (Don't Repeat Yourself)** principles
* Use **jQuery** for **DOM manipulation** and **vanilla JavaScript** for **game logic**
* Use **semantic markup** for HTML and CSS (adhere to best practices)


### Useful Resources for my reference

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla Javascript)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[Github Pages](https://pages.github.com)** _(for hosting your game)_ -->
