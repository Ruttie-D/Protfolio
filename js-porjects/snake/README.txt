# Snake Game

## Description
A simple implementation of the classic Snake game. Control the snake using arrow keys or on-screen controls to collect food. The game tracks the current score and the highest score. A game-over screen appears when the snake collides with itself or the walls.

## Files
- index.html: The main HTML file that structures the game board and controls.
- css/styles.css: The CSS file that styles the game board, snake, food, and game-over screen.
- js/snake.js: The main JavaScript file that contains game logic, event handling, and score tracking.

## Concepts Used
- DOM Manipulation: Updates game elements such as the snake, food, and score display.
- CSS Styling: Styles the game board, snake, food, and game-over screen.
- JavaScript:
    - Event Handling: Responds to keyboard inputs for controlling the snake and mouse clicks for restarting the game.
    - Game Logic:
        - Loops: Continuously updates the game state (movement, collision detection).
        - Conditionals: Checks for collisions and game-over conditions.
        - LocalStorage: Saves and retrieves the highest score across game sessions.
    - Functions:
        - foodGenerator(): Randomly places food on the board.
        - handleGameOver(): Manages the game-over scenario and displays the corresponding screen.
        - changeDirection(): Changes the direction of the snake based on user input.
        - initGame(): Initializes and updates the game state.
        - replay(): Reloads the game to start a new session.

## How to Run
1. Open index.html in a web browser.
2. Use the arrow keys or on-screen controls to navigate the snake.
3. Collect food to increase the score.
4. Avoid colliding with the walls or the snake's own body.
5. The game-over screen will appear if the snake collides with itself or the walls.
6. Restart the game by clicking the replay button.

## Author
Ruttie Yehuda
