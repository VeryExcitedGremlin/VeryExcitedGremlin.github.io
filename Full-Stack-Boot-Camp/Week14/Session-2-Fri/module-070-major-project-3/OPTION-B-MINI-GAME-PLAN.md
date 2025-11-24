# Option B: Mini Game Development Plan

## Project Overview

Build an interactive mini-game using React Router for navigation between game screens, Context API and React hooks for managing game state, and integration with one or more external APIs. Examples include: quiz game with trivia API, memory match with image API, typing game with quote API, or word guessing game with dictionary API.

## Important: Project Structure Connection

**CRITICAL:** Your game needs proper folder organization:

```
src/
├── context/
│   ├── GameContext.jsx       # Game state context provider
│   └── PlayerContext.jsx     # Player data context
├── hooks/
│   ├── useLocalStorage.js    # Custom hook for localStorage
│   ├── useGame.js            # Custom hook for game operations
│   └── useTimer.js           # Custom hook for game timer
├── pages/
│   ├── Home.jsx              # Welcome screen
│   ├── Game.jsx              # Main game screen
│   ├── GameOver.jsx          # Game over screen
│   └── Leaderboard.jsx       # High scores
├── components/
│   ├── Navigation.jsx        # App navigation
│   ├── GameBoard.jsx         # Main game component
│   ├── ScoreDisplay.jsx      # Score and stats
│   └── Timer.jsx             # Game timer (if needed)
├── App.jsx                   # Routes and context providers
└── main.jsx                  # App entry point
```

## Essential State Variables

**IMPORTANT:** Your game needs to track state with Context API and useState. Plan these structures:

**Game Context State:**
- score: Current score number
- level: Current level/difficulty
- gameStatus: String ("idle", "playing", "paused", "gameOver")
- timeRemaining: Time left in seconds (if timed game)

**Player Context State:**
- playerName: String username
- highScores: Array of score objects
- gamesPlayed: Total games counter

**Game-Specific State (varies by game type):**
For Quiz: questions array, currentQuestion index, selectedAnswer, correctAnswers count
For Memory: cards array, flippedCards array, matchedPairs counter
For Typing: targetText string, userInput string, wordsPerMinute number
For Snake: snakePosition array, foodPosition object, direction string

## Core Functionality Requirements

### 1. Context API Setup & State Lifting
- Create GameContext with createContext
- Build GameProvider component with useState for game state
- Create PlayerContext for player data
- Lift state from child components to context when shared across multiple components
- Wrap app with providers in App.jsx
- Export useContext hooks for easy consumption

### 2. Custom Hooks
- Create useLocalStorage hook for persisting high scores
- Create useGame hook to encapsulate game operations
- Create useTimer hook for timed games
- Make hooks reusable across components

### 3. React Router Setup
- Define routes for Home, Game, GameOver, Leaderboard
- Navigate to game screen on start
- Navigate to game over screen when game ends
- Pass score data between routes
- Handle browser back button appropriately

### 4. API Integration (REQUIRED)
- MUST integrate at least one external API for game content
- Quiz Game: Use Open Trivia DB API for questions
- Memory Game: Use Unsplash API or Lorem Picsum for images
- Typing Game: Use Quotable API or Random Quote API
- Word Game: Use Dictionary API or Random Word API
- Create async functions to fetch data
- Handle loading and error states during API calls
- Parse API response for game use

### 5. Game Logic
- Initialize game state on start
- Update game state based on user interactions immutably
- Calculate score based on game rules
- Detect win/lose conditions
- Handle game timer (if applicable)
- Update context with game progress

### 6. Immutable State Updates
- Update game objects using spread operator
- Update nested game state by spreading all levels
- Update arrays (cards, questions) using map, filter, concat
- Use functional updates with setState for score/timer

### 7. User Interface
- Welcome screen with start button and instructions
- Game screen with interactive elements
- Score and level display
- Timer display (if applicable)
- Pause functionality
- Game over screen with final score
- Leaderboard showing high scores

### 8. Data Persistence & Achievement System
- Save high scores to localStorage
- Load high scores on app start
- Save player name and profile
- Track total games played
- Save and display achievements (first win, high score milestones, etc.)
- Track game progress (levels completed, total points earned)

### 9. Game Interactivity
- Handle keyboard or mouse input
- Respond to user actions immediately
- Provide visual feedback for actions
- Play sound effects (optional)
- Show animations for game events

## Development Strategy

### Phase 1: Project Foundation
1. Create React app with Vite
2. Install dependencies (react-router-dom only - no Redux)
3. Set up folder structure with context/ and hooks/ folders
4. Create basic page components
5. Set up routing
6. Test navigation works

### Phase 2: Context API & State Setup
1. Create GameContext.jsx with createContext
2. Build GameProvider with useState for game state
3. Create PlayerContext for player data
4. Add functions to update game state immutably
5. Wrap App with both providers
6. Test context values are accessible

### Phase 3: Custom Hooks
1. Create useLocalStorage hook for persisting scores
2. Create useGame hook to consume GameContext
3. Create useTimer hook for timed games (if needed)
4. Test hooks work correctly in components

### Phase 4: Basic Game UI
1. Create Home page with start button
2. Create Game page with basic game board
3. Create GameOver page with score display
4. Test navigation flow (Home → Game → GameOver)
5. Pass score data through navigation

### Phase 5: Core Game Mechanics
1. Implement main game logic using useState
2. Handle user input (keyboard/mouse events)
3. Update state immutably (no mutations!)
4. Detect win/lose conditions
5. Calculate score

### Phase 6: Context Integration
1. Move game state to GameContext
2. Use useGame hook to access/update state
3. Update UI based on context state
4. Test state updates correctly across components
5. Verify all updates are immutable

### Phase 7: LocalStorage Persistence
1. Integrate useLocalStorage with PlayerContext
2. Save high scores after each game
3. Load scores on app initialization
4. Test data persists after refresh
5. Handle edge cases (empty storage, corrupted data)

### Phase 8: Polish & Features
1. Add timer functionality (if needed)
2. Implement pause feature
3. Add high score tracking
4. Create leaderboard page
5. Add CSS styling
6. Add sound effects (optional)
7. Handle edge cases

## Component Organization Best Practices

### Component Structure
- Keep components small and focused (single responsibility)
- Separate game logic from presentation components
- Extract reusable game elements into components
- Use clear, descriptive component names

### Props Management
- Define expected props clearly
- Use prop destructuring for readability
- Pass only necessary props to child components
- Avoid prop drilling by using Context

### Event Handling
- Use descriptive handler names (handleKeyPress, handleCardFlip)
- Keep handlers in the component that owns the state
- Use functional updates for state that depends on previous value
- Clean up event listeners in useEffect

## Key React Hooks & Methods You'll Use

**React Hooks:**
- useState() - Local game state
- useEffect() - Game loop, timers, cleanup
- useContext() - Consume game/player context
- useRef() - Track previous values, intervals
- useCallback() - Optimize event handlers (optional)

**React Router:**
- BrowserRouter - Enable routing
- Routes and Route - Define game screens
- Link / NavLink - Navigation
- useNavigate() - Programmatic navigation (go to game over)
- useLocation() - Access passed state (score data)

**Context API:**
- createContext() - Create context objects
- Context.Provider - Provide values to component tree
- useContext() - Consume context in components

**Immutable Updates:**
- Spread operator (...) - Copy objects/arrays
- Array.map() - Transform array items
- Array.filter() - Remove items
- Array.concat() / [...arr, item] - Add items

**Game Logic:**
- setInterval() / setTimeout() - Timers
- addEventListener() - Keyboard/mouse input
- Math.random() - Random game elements
- Date.now() - Timestamp for scoring
- localStorage - Persist high scores

## Testing Your Functions

### Method 1: Chrome Developer Tools

Open DevTools (F12) and test:

**Check Context State:**
- Use React DevTools extension
- Inspect component tree
- View context values
- Watch state changes during gameplay

**Check Game Logic:**
- Console.log user inputs
- Verify score calculations
- Test win/lose detection
- Monitor timer accuracy

**Check LocalStorage:**
- Open Application tab
- View localStorage entries
- Verify scores save correctly
- Test loading on refresh

### Method 2: Interactive Testing

Play the game and test:
- Start game from home screen
- Play through complete game
- Verify score increases correctly
- Test pause functionality
- Reach game over condition
- Check high score saves
- View leaderboard
- Play multiple rounds

### Method 3: Edge Case Testing

Test unusual scenarios:
- Spam click/keypress rapidly
- Pause and unpause repeatedly
- Navigate away mid-game (back button)
- Try to start multiple games simultaneously
- Test with very high scores
- Test localStorage when empty
- Refresh page mid-game

## Debugging Tips

1. **Context Not Working**: Ensure component is wrapped in Provider
2. **Timer Issues**: Clear intervals on component unmount with useEffect cleanup
3. **Input Lag**: Use useCallback for event handlers to optimize performance
4. **State Not Updating**: Ensure you're not mutating state directly
5. **Score Not Saving**: Check localStorage in Application tab of DevTools
6. **Navigation Problems**: Verify you're using navigate() correctly

## Common Pitfalls to Avoid

1. **Not wrapping app with Provider**: Context won't work without Provider
2. **Not clearing intervals**: Always cleanup timers in useEffect return function
3. **Multiple event listeners**: Remove listeners on unmount to prevent memory leaks
4. **Direct state mutation**: Always create new objects/arrays with spread operator
5. **Forgetting functional updates**: Use setState(prev => ...) for timers/scores
6. **Forgetting to persist**: Save high scores to localStorage after each game
7. **Hardcoding game data**: Use configuration objects for easy tweaking
8. **No loading state**: Show feedback while game initializes

## Recommended APIs for Games

### Quiz Game APIs
- **Open Trivia DB** (opentdb.com/api_config.php)
  - Free, no key required
  - Multiple categories and difficulties
  - JSON format with questions and answers

### Image APIs for Memory Games
- **Lorem Picsum** (picsum.photos)
  - Random placeholder images
  - No API key required
  - Simple URL-based requests

- **Unsplash API** (unsplash.com/developers)
  - High-quality photos
  - Requires free API key
  - 50 requests per hour on free tier

### Quote APIs for Typing Games
- **Quotable API** (github.com/lukePeavey/quotable)
  - Random quotes
  - No API key required
  - Filter by length, author, tags

- **They Said So Quotes API** (quotes.rest)
  - Quote of the day
  - Free tier available

### Word APIs for Word Games
- **Random Word API** (random-word-api.herokuapp.com)
  - Random words
  - No API key required

- **Wordnik API** (developer.wordnik.com)
  - Definitions, examples, word of the day
  - Requires free API key

## Game Ideas and Requirements

### Quiz Game
**Core Mechanics:**
- Fetch questions from Open Trivia DB API
- Display multiple choice questions
- Track correct/incorrect answers
- Calculate score based on accuracy
- Show results at end

**State Needed:**
- questions array (from API), currentQuestion, score, timePerQuestion

**API Integration:**
- Fetch trivia questions at game start
- Parse response to extract question, answers, correct answer
- Handle different difficulty levels

### Memory Match Game
**Core Mechanics:**
- Fetch images from Lorem Picsum or Unsplash API
- Grid of face-down cards with images
- Flip two cards at a time
- Match pairs to remove from board
- Track moves and time

**State Needed:**
- cards array (with API images), flippedIndices, matchedPairs, moves, timer

**API Integration:**
- Fetch random images for card pairs
- Generate duplicate pairs from unique images
- Shuffle cards before game starts

### Typing Speed Game
**Core Mechanics:**
- Fetch random quotes from Quotable API
- Display text to type
- Capture user keystrokes
- Calculate words per minute
- Track accuracy percentage

**State Needed:**
- targetText (from API), userInput, startTime, wpm, accuracy

**API Integration:**
- Fetch random quote at game start
- Allow user to select quote length
- Show quote author and source

### Snake Game (Requires Creative API Use)
**Core Mechanics:**
- Move snake with arrow keys
- Eat food to grow
- Avoid walls and self
- Increase speed with score
- Fetch fun facts or trivia as game progresses

**State Needed:**
- snakeBody array, direction, food position, score, speed

**API Integration:**
- Fetch random facts from Useless Facts API or similar
- Display fact when player reaches score milestones
- Show motivational quotes between levels

### Word Guessing Game (Wordle-style)
**Core Mechanics:**
- Fetch random word from Random Word API or Wordnik
- Guess a word with limited attempts
- Color code letters (correct/wrong position/not in word)
- Track guesses and reveal clues
- Win on correct guess or lose after max attempts

**State Needed:**
- targetWord (from API), guesses array, currentGuess, gameStatus, attempts

**API Integration:**
- Fetch random word of specific length
- Optional: Fetch word definition after game ends
- Validate guessed words against dictionary API

## Project Submission Checklist

Before submitting:

```
React Fundamentals:
[ ] useState used for local component state
[ ] useEffect used for side effects and game loop
[ ] At least one custom hook created and used
[ ] All hooks follow React rules

Context API & Global State:
[ ] Context Providers created and configured
[ ] useContext used to consume context values
[ ] State properly lifted and shared between components
[ ] Context wraps entire app correctly

Immutable State Updates:
[ ] Game objects updated using spread operator
[ ] Nested state updated without mutations
[ ] Arrays updated with map, filter, concat
[ ] Functional updates used for score/timer

React Router:
[ ] Multiple game screens with routing
[ ] Navigation between screens works
[ ] Programmatic navigation after game events
[ ] Handle browser back button gracefully

Game Mechanics:
[ ] Game starts and runs correctly
[ ] User input handled properly
[ ] Score calculated accurately
[ ] Win/lose conditions work
[ ] Timer functions correctly (if applicable)

Features:
[ ] Start game functionality
[ ] Play complete game loop
[ ] Game over detection
[ ] Score tracking
[ ] High score persistence
[ ] Achievement system implemented
[ ] Leaderboard display
[ ] Multi-screen navigation working

API Integration:
[ ] External API integrated for game content
[ ] Loading states during API requests
[ ] Error handling for failed API calls
[ ] API response parsed correctly
[ ] Game uses API data effectively

Component Organization:
[ ] Components have single responsibility
[ ] Props passed and managed correctly
[ ] Event handlers implemented cleanly
[ ] Reusable components extracted

Code Quality:
[ ] Components organized logically
[ ] No memory leaks (intervals cleaned up)
[ ] Responsive design
[ ] No console errors
[ ] Smooth user experience

Documentation:
[ ] README with game instructions
[ ] README includes features list
[ ] README includes API documentation
[ ] README includes live deployment URL
[ ] Setup instructions
[ ] How to play guide

Deployment:
[ ] Game deployed to Netlify or Vercel
[ ] Live site is accessible and functional
[ ] Environment variables configured (if needed)
[ ] Build process works without errors
```

## Bonus Features (Optional)

If you finish early or want bonus points:

### Redux Toolkit Implementation (Advanced Bonus)
1. Install @reduxjs/toolkit and react-redux
2. Create Redux store with configureStore()
3. Create slices for game and player state
4. Replace Context API with Redux
5. Use useSelector and useDispatch hooks
6. Set up Redux DevTools

### useReducer Implementation (Intermediate Bonus)
1. Replace useState with useReducer for complex game state
2. Create reducer function with action types
3. Dispatch actions for game events
4. Keep reducer pure (no mutations)

### Other Bonus Features:
1. **Difficulty Levels** - Easy, Medium, Hard modes that affect game speed or complexity
2. **Sound Effects** - Add audio for actions, wins, losses
3. **Animations** - Smooth transitions and visual effects
4. **Multiplayer Mode** - Take turns or compete simultaneously
5. **Power-ups** - Special items that affect gameplay
6. **Theme Customization** - Let users choose color themes
7. **Statistics Page** - Track detailed player stats over time
8. **Performance Optimization** - Use React.memo, useMemo, useCallback
9. **Code Splitting** - Implement React.lazy and Suspense for routes
10. **Social Sharing** - Share scores on social media

## Deployment Instructions

### Deploying to Netlify (Recommended)

1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Create Netlify account**: Go to netlify.com and sign up

3. **Deploy via drag-and-drop**:
   - Drag your `dist` folder to Netlify dashboard
   - Or connect your GitHub repo for automatic deploys

4. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

5. **Add environment variables** (if using API keys):
   - Go to Site settings > Environment variables
   - Add your API keys (e.g., VITE_API_KEY)

### Deploying to Vercel (Alternative)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in your project directory
3. Follow prompts to deploy
4. Your game will be live at provided URL

## README Template

Your README.md should include the following sections:

```markdown
# [Game Name] - React Game

An interactive [game type] built with React, Context API, and [API Name] integration.

## Live Demo

[Play the Game](your-deployment-url-here)

## Features

- [Game-specific feature 1]
- [Game-specific feature 2]
- Score tracking and leaderboard
- Achievement system
- LocalStorage persistence
- Responsive design

## How to Play

1. Click "Start Game" on the home screen
2. [Game-specific instructions]
3. Try to beat your high score!

## Technologies Used

- React 18
- React Router DOM
- Context API for state management
- [API Name] for [game content type]
- Vite for build tooling

## APIs Used

- **[API Name]** ([API URL])
  - Used for: [purpose]
  - No API key required / Requires free API key
  - Documentation: [link]

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd game-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (If using API key) Create .env file:
   ```
   VITE_API_KEY=your_api_key_here
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:5173 in your browser

## Game Rules

- [Rule 1]
- [Rule 2]
- [Scoring system]
- [Win/lose conditions]

## Project Structure

```
src/
├── context/         # Game and player context
├── hooks/           # Custom hooks
├── pages/           # Game screens
├── components/      # Reusable game components
└── App.jsx          # Main app with routes
```

## Future Enhancements

- Multiplayer mode
- More difficulty levels
- Sound effects
- Additional game modes

## Author

Your Name - [GitHub Profile](link)

## License

MIT License
```

## Tips for Success

1. **Start simple** - Get basic game loop working before adding features
2. **Integrate API early** - Don't wait until the end to add API integration
3. **Test frequently** - Play your game after each feature addition
4. **Use mock data first** - Test with hardcoded data, then replace with API
5. **Separate concerns** - Keep game logic separate from UI components
6. **Handle edge cases** - Test what happens when users do unexpected things
7. **Test immutability** - Use React DevTools to verify state updates correctly
8. **Deploy early** - Deploy to Netlify/Vercel as soon as you have basic functionality
9. **Make it fun** - Add visual polish and feedback to enhance experience
10. **Clean up effects** - Always return cleanup functions from useEffect
11. **Commit often** - Save progress after each working feature
12. **Write your README** - Document as you build, don't leave it for last
13. **Focus on requirements first** - Bonus features are optional

Good luck building your Mini Game!
