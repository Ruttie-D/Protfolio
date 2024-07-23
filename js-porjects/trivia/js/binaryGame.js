import { displayQuestions, restartButton, bi, nextButton, triviaCounter, currentQuestionIndex as QuestionIndex }
    from "./trivia.js";

export async function binaryGame(questions) {

    let rightAnswerIndex = 0;
    let wrongAnswerIndex = 0;
    let currentQuestionIndex = QuestionIndex;

    // console.log(questions[currentQuestionIndex]);

    async function displayQuestion(index) {
        displayQuestions.innerHTML = await questions[index].question;
        triviaCounter.innerHTML = `${index + 1}/10`;
        nextButton.disabled = true;
    }

    function handleAnswerClick(event) {
        const correctAnswer = questions[currentQuestionIndex].correct_answer.toLowerCase();

        // console.log(questions[currentQuestionIndex]);

        if (event.target.id === correctAnswer) {
            event.target.classList.add('correct');
            rightAnswerIndex++;
        } else {
            event.target.classList.add('incorrect');
            wrongAnswerIndex++;

            bi.forEach(btn => {
                if (btn.id === correctAnswer.toLowerCase()) {
                    btn.classList.add('correct');
                }
            })
        }

        // Disable all answer buttons to prevent changing the answer
        bi.forEach(el => el.disabled = true);
        nextButton.disabled = false; // Enable the next button
    }

    // Function to add event listeners
    function addEventListeners() {
        bi.forEach(el => {
            el.addEventListener('click', handleAnswerClick);
        });

        nextButton.addEventListener('click', () => {
            // Move to the next question
            currentQuestionIndex++;

            // console.log(questions[currentQuestionIndex]);

            if (currentQuestionIndex < 10) {
                displayQuestion(currentQuestionIndex);
                bi.forEach(el => {
                    el.disabled = false; // Enable buttons for the new question
                    el.classList.remove('correct', 'incorrect'); // Reset previous class additions
                });
            } else {
                // End of game logic (e.g., show score, reset game, etc.)
                currentQuestionIndex = 0;

                console.log('Game over!', questions[currentQuestionIndex]);

                displayQuestions.innerHTML = `Game over! <br><br> Right Answers: ${rightAnswerIndex} <br> Wrong Answers: ${wrongAnswerIndex}`;
                nextButton.classList.add('hidden');
                restartButton.classList.remove('hidden');
            }
        });
    }

    // Start the game by displaying the first question and adding event listeners
    displayQuestion(currentQuestionIndex);
    addEventListeners();
}