import { currentQuestionIndex as QuestionIndex, displayQuestions, restartButton, answerButtons, nextButton, triviaCounter } from "./trivia.js";

export async function multipleGame(questions) {
    let answers;
    let rightAnswerIndex = 0;
    let wrongAnswerIndex = 0;
    let currentQuestionIndex = QuestionIndex;

    async function displayQuestion(index) {
        displayQuestions.innerHTML = await questions[index].question;
        triviaCounter.innerHTML = `${index + 1}/10`;
        nextButton.disabled = true;

        answers = questions[index].incorrect_answers;
        const correctAnswer = questions[index].correct_answer;
        answers.push(correctAnswer);
        answers.sort(() => Math.random() - 0.5);

        answerButtons.forEach((btn, i) => {
            btn.innerHTML = answers[i];
            btn.dataset.correct = answers[i] === correctAnswer;
            btn.disabled = false;
            btn.classList.remove('correct', 'incorrect');
        });
    }

    function handleAnswerClick(event) {
        const isCorrect = event.target.dataset.correct === 'true';
        if (isCorrect) {
            event.target.classList.add('correct');
            rightAnswerIndex++;
        } else {
            event.target.classList.add('incorrect');
            wrongAnswerIndex++;

            answerButtons.forEach(btn => {
                if (btn.dataset.correct === 'true') {
                    btn.classList.add('correct');
                }
            });
        }

        answerButtons.forEach(btn => btn.disabled = true);
        nextButton.disabled = false;
    }

    function addEventListeners() {
        answerButtons.forEach(btn => {
            btn.addEventListener('click', handleAnswerClick)
        });
        nextButton.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion(currentQuestionIndex);
            } else {
                currentQuestionIndex = 0;
                displayQuestions.innerHTML = `Game over! <br><br> Right Answers: ${rightAnswerIndex} <br> Wrong Answers: ${wrongAnswerIndex}`;
                nextButton.classList.add('hidden');
                restartButton.classList.remove('hidden');
            }
        });
    }
    displayQuestion(currentQuestionIndex);
    addEventListeners();
}