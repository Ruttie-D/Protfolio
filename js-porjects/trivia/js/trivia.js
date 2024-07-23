import { setUrl, getData } from "./triviaDBapi.js";
import { binaryGame } from "./binaryGame.js";
import { multipleGame } from "./multipleGame.js";

const type = document.querySelectorAll('.type');
const level = document.querySelectorAll('.level');
const startTrivia = document.querySelector('.start');
const game = document.querySelector('.game');
const displayQuestions = document.querySelector('.question-container>h1');
const restartButton = document.querySelector('.restart');
const multi = document.querySelector('.multi-answer');
const answerButtons = document.querySelectorAll('.multi-answer .btn');
const biContainer = document.querySelector('.binary-choice');
const bi = document.querySelectorAll('.binary-choice .binary');
const nextButton = document.querySelector('.next');
const triviaCounter = document.querySelector('.counter');

let typeChecked, levelChecked, questions;

let currentQuestionIndex = 0;

let typeChoiceChecked = false;
let levelChoiceChecked = false;

async function gameOn() {
    nextButton.classList.remove('hidden');

    bi.forEach(el => {
        el.disabled = false; // Enable buttons for the new question
        el.classList.remove('correct', 'incorrect'); // Reset previous class additions
    });

    questions = await setUrl(typeChecked, levelChecked);

    console.log(questions);

    gameFace(questions);
    // setTimeout(() => gameFace(questions), 500);
}

function gameFace(questions) {
    restartButton.classList.add('hidden');
    startTrivia.classList.add('hidden');
    game.classList.remove('hidden');
    triviaCounter.classList.remove('hidden');

    if (typeChecked === 'boolean') {
        multi.classList.add('hidden');
        biContainer.classList.remove('hidden');
        binaryGame(questions);
    } else {
        biContainer.classList.add('hidden');
        multi.classList.remove('hidden');
        multipleGame(questions);
    }
}

type.forEach(function (typeElement) {

    typeElement.addEventListener('click', (e) => {
        typeChoiceChecked = true;
        e.target.classList.add('clicked');

        if (e.target === type[0]) {
            typeChecked = 'multiple';
            type[1].classList.remove('clicked');
        } else {
            typeChecked = 'boolean';
            type[0].classList.remove('clicked');
        }

        if (typeChoiceChecked && levelChoiceChecked) {
            gameOn();
        }
    })
});

level.forEach(levelElement => {

    levelElement.addEventListener('click', (e) => {
        for (let i = 0; i < level.length; i++) {
            if (level[i] !== e.target) {
                level[i].classList.remove('clicked');
            }
        }

        levelChoiceChecked = true;
        e.target.classList.add('clicked');
        levelChecked = e.target.innerHTML.toLowerCase();

        if (typeChoiceChecked && levelChoiceChecked) {
            gameOn();
        }
    })
});

restartButton.addEventListener('click', () => {
    typeChoiceChecked = false;
    levelChoiceChecked = false;
    startTrivia.classList.remove('hidden');
    game.classList.add('hidden');
    type.forEach(type => type.classList.remove('clicked'));
    level.forEach(level => level.classList.remove('clicked'));
    triviaCounter.innerHTML = `0/10`;
    currentQuestionIndex = 0;
});


export { currentQuestionIndex, displayQuestions, restartButton, answerButtons, biContainer, bi, nextButton, triviaCounter, typeChecked, levelChecked, questions };
