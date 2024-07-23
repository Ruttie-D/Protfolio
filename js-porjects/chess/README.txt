# Chess Game

## Description
The chess game utilizes various programming concepts to handle different aspects of gameplay, such as piece movement, board setup, and player interactions. The project involves HTML for structure, CSS for styling, and JavaScript for functionality.

## Files
- `index.html`: Defines the structure of the game board and includes links to CSS and JavaScript files.
- `chess.js`: Contains game logic, player management, and imports functions from other modules.
- `pieces.js`: Defines SVG representations of chess pieces.
- `boardSetup.js`: Handles the creation and setup of the chessboard and square IDs.
- `dragPieces.js`: Manages drag-and-drop functionality and piece movement.
- `valid.js`: Includes functions for move validation and checking game conditions.

## Concepts Used

### Functions
Defined to handle specific tasks such as `createBoard`, `dragStart`, `highlightValidSquares`, etc.

### Control Flow
Used with conditional statements (if, else) to manage game logic, such as changing players and validating moves.

### Arrays
Employed to manage lists of squares, pieces, and other elements, e.g., `startPieces`, `squareIds`, and `columnsId`.

### Scope & Hoisting
Functions and variables are used within their respective scopes. For example, `dragStart` and `dragDrop` are used within the `dragPieces.js` file, with hoisting ensuring function declarations are accessible before their usage.

### Events & Event Loop
JavaScript event handling (`addEventListener`) is used for user interactions like dragging and dropping pieces.

### ES6
Modern JavaScript features, such as `import/export`, `let/const`, arrow functions, and template literals, are utilized.

### DOM Manipulation
Manipulates the Document Object Model (DOM) to create and update the game board, pieces, and handle interactions.

### OOP (Object-Oriented Programming)
Used conceptually in how the chess pieces are represented and managed, though not explicitly in class structures.

### Objects
Represent chess pieces and their properties. For example, piece templates in `pieces.js` are objects with SVG content.

### Loops
Employed to iterate through arrays and collections, such as in `createBoard` to generate squares and place pieces.

### Drag-and-Drop API
Used for piece movement with functions like `dragStart`, `dragOver`, and `dragDrop`.

### Event Listeners
Added to squares for interactions like dragging and clicking to highlight valid squares.

### Validation Functions
Functions such as `checkIfValid` and `isChecked` are used to validate moves and check game conditions.

## How to Run
To run the chess game:
1. Ensure you have a local server set up (e.g., using VSCode Live Server or any local server setup).
2. Open the `index.html` file in a web browser.

## Author
Ruttie Yehuda
