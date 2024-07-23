# Trivia Project

## Description
A trivia game where users can choose between multiple-choice or true/false questions and select the difficulty level. The game displays questions, handles user input, and provides feedback on correctness. It tracks the score and allows restarting the game.

## Files
- `index.html`: The main HTML file that structures the webpage.
- `css/trivia.css`: The CSS file that styles the trivia game.
- `js/trivia.js`: The main JavaScript file that controls the game logic.
- `js/triviaDBapi.js`: The JavaScript file that handles fetching questions from the API.
- `js/binaryGame.js`: The JavaScript file that handles the true/false game logic.
- `js/multipleGame.js`: The JavaScript file that handles the multiple-choice game logic.

## Concepts Used
- **HTML5**: Structuring the webpage with semantic elements.
- **CSS3**: Styling the webpage, including responsive design with media queries.
- **JavaScript (ES6+)**:
    - **DOM Manipulation**: Querying and updating DOM elements to reflect game state.
    - **Event Listeners**: Handling user interactions (e.g., button clicks).
    - **Async/Await**: Fetching data from an external API.
    - **Modules**: Organizing code into separate files using `import` and `export`.
    - **Promises**: Handling asynchronous operations.
- **APIs**: Fetching trivia questions from an external API (`https://opentdb.com/api.php`).
- **Game Logic**:
    - **Conditional Statements**: Determining game flow based on user choices.
    - **Loops**: Iterating over questions and answers.
    - **Arrays and Objects**: Storing and manipulating game data.
- **CSS Frameworks and Libraries**:
    - **Google Fonts**: Using custom fonts.
    - **Font Awesome**: Including icons.
- **Responsive Design**: Ensuring the game works well on different screen sizes.
- **Dynamic Classes**: Adding and removing classes to reflect game state (e.g., `correct`, `incorrect`, `hidden`).
- **Error Handling**: Managing potential issues with API requests.

## How to Run
1. Open `index.html` in a web browser.
2. Choose the type of trivia (Multiple Choice or True/False).
3. Select the difficulty level (Easy, Medium, Hard).
4. Answer the displayed questions.
5. The game tracks the score and displays the result at the end.
6. Restart the game by clicking the restart button.

## Author
Ruttie Yehuda
