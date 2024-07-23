# Expense Tracker

## Description
A web-based expense tracker that allows users to add and manage income and expense records. Users can input details such as the type of transaction (income or expense), amount, title, and date. The total balance is dynamically updated, and users can remove individual records. The application tracks records and calculates the balance based on the entries.

## Files
- index.html: The main HTML file that structures the user interface, including the form for adding records and the display for total balance and records.
- style.css: The CSS file that styles the layout, form, and records.
- scripts/main.js: The JavaScript file that initializes the application and sets up event listeners.
- scripts/dom.js: Contains the `onStart` function that handles form submission and record management.
- scripts/models/Calculator.js: Defines the `Calculator` class for performing balance calculations.
- scripts/models/Report.js: Contains the `Report`, `Income`, and `Expense` classes for managing and displaying records.

## Concepts Used
- **HTML5**: Structures the webpage with semantic elements and form controls.
- **CSS3**: Styles the webpage and adapts the layout for different screen sizes with media queries.
- **JavaScript (ES6+)**:
    - **DOM Manipulation**: Updates the DOM to reflect changes in records and total balance.
    - **Event Handling**: Manages form submissions and interactions with record removal buttons.
    - **Object-Oriented Programming (OOP)**:
        - **Classes and Inheritance**: Uses classes (`Report`, `Income`, `Expense`) to model records and handle data.
    - **Loops and Conditionals**: Iterates over records and performs conditional logic for calculations and UI updates.
    - **LocalStorage**: Could be utilized for storing records and balance (not implemented in the current version but recommended for future enhancements).
    - **Static Methods**: Utilized in the `Calculator` class for performing calculations on records.

## How to Run
1. Open index.html in a web browser.
2. Use the form to input transaction details and click "Add" to submit.
3. View the total balance and the list of incomes and expenses.
4. Remove individual records by clicking the "X" button next to each entry.

## Author
Ruttie Yehuda
