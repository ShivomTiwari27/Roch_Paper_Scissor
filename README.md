# Rock-Paper-Scissors Game

## Overview

This project is a simple implementation of the classic Rock-Paper-Scissors game. The player can choose between rock, paper, and scissors, and the computer randomly selects one of the three options. The game then determines the winner based on the standard rules of Rock-Paper-Scissors.

### The challenge

The main challenge was to create a user-friendly interface and implement the game logic that could handle various possible outcomes. The game keeps track of the score and displays the result of each round.

### Screenshot

![Rock_paper_scissor-0](https://github.com/user-attachments/assets/60872391-511b-42a9-9a1b-5694d669e070)
![Rock_paper_scissor-3](https://github.com/user-attachments/assets/b4dbdc03-ba42-4d12-a891-6c5413314c6a)
![Rock_paper_scissor-2](https://github.com/user-attachments/assets/c17bdc21-e974-4e11-a485-150d6559a49b)
![Rock_paper_scissor-1](https://github.com/user-attachments/assets/00254a0a-d466-42d7-9aaf-c8ce8ead3c50)

### Links

- Live Site URL: [Live Site URL Here](https://shivomtiwari27.github.io/Roch_Paper_Scissor/)
- GitHub Repository: [Repository URL Here](https://github.com/ShivomTiwari27/Roch_Paper_Scissor)

## My process

### Built with

- HTML5
- CSS3
- JavaScript

### What I learned

I learned how to implement game logic in JavaScript, particularly using conditional statements and handling user interactions through event listeners. The random selection of the computer's choice was particularly interesting:

```javascript
const computerChoice = choices[Math.floor(Math.random() * 3)];
```
This line of code generates a random choice for the computer, which adds unpredictability to the game.

Additionally, I practiced DOM manipulation to update the user interface dynamically based on the player's and computer's choices:

```javascript
playerDisplay.textContent = `PLAYER: ${playerChoice}`;
computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
resultToDisplay.textContent = result;
```
### Continued development

In the future, I plan to enhance this project by:
- **Adding Features**: Implement additional game modes, such as a best-of-five series or a multiplayer option.
- **Improving UI/UX**: Further refine the user interface with animations, sound effects, and responsive design for various devices.
- **Optimizing Code**: Explore ways to optimize the JavaScript code for better performance and maintainability.
- **Learning New Technologies**: Integrate this project with modern frontend frameworks like React or Vue.js to manage the state more effectively.

### Useful resources

- **[MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: A comprehensive resource for learning and referencing JavaScript concepts.
- **[CSS-Tricks](https://css-tricks.com/)**: Provided great insights on improving the design and responsiveness of the game.
- **[YouTube - Bro Code](https://www.youtube.com/@BroCodez)**: A fantastic channel that offers in-depth tutorials and coding examples, which were invaluable during the development of this project.

### Author

- **GitHub**: [ShivomTiwari27](https://github.com/ShivomTiwari27)

### Acknowledgments

I would like to express my gratitude to [Bro Code](https://www.youtube.com/@BroCodez) for their excellent tutorials that guided me throughout this project. Their explanations and examples were instrumental in helping me understand and implement key concepts.

