# Quiz Game Project

## Overview
This project is a modern quiz game application built with React. It features an engaging user interface, interactive components, and smooth animations to enhance the user experience. Players can test their knowledge across various topics while enjoying a visually appealing design.

## Features
- Modern gradient background
- Clean card-based design for questions
- Interactive question interface with animated buttons
- Countdown timer for each question (30 seconds)
- Score tracking throughout the quiz
- Completion screen displaying final score
- Instant feedback on answers with toast notifications
- Smooth animations using Framer Motion
- "Start Quiz" button to initiate the game

## Project Structure
```
quiz-game
├── public
│   ├── index.html        # Main HTML document
│   └── styles.css       # Styles for the quiz game
├── src
│   ├── App.js           # Main entry point of the application
│   ├── components
│   │   ├── QuestionCard.js  # Displays current question and options
│   │   ├── Timer.js         # Countdown timer component
│   │   └── ToastNotification.js # Displays feedback notifications
│   ├── hooks
│   │   └── useTimer.js      # Custom hook for timer logic
│   ├── utils
│   │   └── questions.js      # Array of question objects
│   └── animations
│       └── framerMotion.js   # Animation configurations
├── package.json           # npm configuration file
├── .babelrc               # Babel configuration
├── .eslintrc.json         # ESLint configuration
└── README.md              # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd quiz-game
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to play the quiz game.

## Usage
- Click the "Start Quiz" button to begin.
- Answer each question within the 30-second time limit.
- Receive instant feedback on your answers.
- At the end of the quiz, view your final score on the completion screen.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.