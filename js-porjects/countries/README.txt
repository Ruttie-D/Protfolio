# World Countries

## Description
A web application that displays information about countries around the world. Users can search for countries, view details including flags, population, and continents, and mark countries as liked. The application utilizes Bootstrap for styling and Font Awesome for icons. The list of liked countries is stored in localStorage.

## Files
- index.html: The main HTML file that structures the user interface with Bootstrap for layout and styling.
- styles.css: The CSS file that customizes the appearance of elements, including card styling and hover effects.
- scripts/main.js: The JavaScript file that initializes the application and sets up interactions.
- scripts/services/countries.service.js: Contains functions for fetching country data and managing search and reset operations.
- scripts/services/dom.service.js: Handles the creation and management of country cards and search functionality.
- scripts/services/storage.service.js: Manages the storage and retrieval of liked countries in localStorage.

## Concepts Used
- **HTML5**: Structures the webpage with semantic elements and forms.
- **CSS3**: Styles the webpage, including custom styles and responsive design.
- **JavaScript (ES6+)**:
    - **DOM Manipulation**: Updates the DOM to display country cards and handle user interactions.
    - **Event Handling**: Manages search input and interactions with like buttons.
    - **Async/Await**: Fetches country data from an external API.
    - **Object-Oriented Programming (OOP)**: Not used explicitly, but modular code structure supports scalability.
    - **LocalStorage**: Stores and retrieves the list of liked countries.
    - **Modules**: Uses ES6 modules to organize code into separate files (`countries.service.js`, `dom.service.js`, `storage.service.js`).
    - **Template Literals**: Used for creating dynamic class names and text content.

- **Libraries and Frameworks**:
    - **Bootstrap**: Provides styling and layout components.
    - **Font Awesome**: Includes icons for user interactions (e.g., like button).

## How to Run
1. Open index.html in a web browser.
2. Use the search input to filter countries by name.
3. View details of each country, including flag, population, and continents.
4. Click the heart icon to like or unlike a country. Liked countries are stored in localStorage and persist across sessions.

## Author
Ruttie Yehuda
