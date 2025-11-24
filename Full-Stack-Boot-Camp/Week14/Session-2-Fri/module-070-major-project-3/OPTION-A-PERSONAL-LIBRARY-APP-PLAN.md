# Option A: Personal Library App Development Plan

## Project Overview

Build a personal library application where users can search for books/movies, add them to their collection, edit details, mark favorites, track reading status, and organize their library. This project combines React Router for navigation, Context API and React hooks for state management, and requires integration with one or more public APIs.

## Important: Project Structure Connection

**CRITICAL:** Your app needs proper folder organization to work correctly:

```
src/
├── context/
│   ├── LibraryContext.jsx    # Library items context provider
│   └── ThemeContext.jsx       # Theme/preferences context
├── hooks/
│   ├── useLocalStorage.js     # Custom hook for localStorage
│   ├── useLibrary.js          # Custom hook for library operations
│   └── useAPI.js              # Custom hook for API calls
├── pages/
│   ├── Library.jsx            # Main library view
│   ├── Search.jsx             # Search and add items
│   ├── Favorites.jsx          # Favorited items
│   └── ItemDetails.jsx        # Single item details
├── components/
│   ├── Navigation.jsx         # App navigation
│   ├── LibraryItem.jsx        # Single library item card
│   └── SearchResults.jsx      # Search result display
├── App.jsx                    # Routes and context providers
└── main.jsx                   # App entry point
```

## Essential State Variables

**IMPORTANT:** Your app needs to track state with Context API and useState. Plan these structures:

**Library Context State:**
- items: Array of all library items
- loading: Boolean for async operations
- error: String for error messages
- favorites: Array of favorited item IDs

**Theme Context State (Optional):**
- theme: String ("light" or "dark")
- preferences: Object with user settings

**Item Object Structure:**
Your items should contain:
- id: Unique identifier
- title: Book/movie title
- author: Creator name
- thumbnail: Image URL
- description: Full description text
- isFavorite: Boolean flag
- readingStatus: String ("want-to-read", "reading", "completed", or "not-started")
- genre: Category or genre
- rating: User rating (optional)
- dateAdded: Timestamp when added to library

## Core Functionality Requirements

### 1. Context API Setup & State Lifting
- Create LibraryContext with createContext
- Build LibraryProvider component with useState for items
- Lift state from child components to context when shared across multiple components
- Wrap app with provider in App.jsx
- Export useContext hook for easy consumption
- Handle state updates immutably

### 2. Custom Hooks
- Create useLocalStorage hook for data persistence
- Create useLibrary hook to encapsulate library operations
- Create useAPI hook for fetching data from external API
- Make hooks reusable across components

### 3. React Router Setup
- Set up BrowserRouter in App.jsx
- Define routes for Library, Search, Favorites, Details pages
- Use Link or NavLink for navigation
- Implement useNavigate for programmatic navigation
- Handle 404 with catch-all route

### 4. API Integration (REQUIRED)
- Choose an API (Google Books API recommended - no key required)
- MUST integrate at least one external API for fetching book/movie data
- Create async functions to fetch data
- Handle loading and error states during API calls
- Parse API response into your item structure
- Display results in a user-friendly format

### 5. Immutable State Updates
- Update objects using spread operator
- Update nested objects by spreading all levels
- Add/remove array items using filter, map, concat
- Use functional updates with setState for previous state access

### 6. Library Management (CRUD Operations)
- CREATE: Add items from search results to library
- READ: Display all library items in a grid or list
- UPDATE: Edit item details (title, author, notes, status)
- DELETE: Remove items from library immutably
- Mark items as favorites
- Update reading status (want-to-read, reading, completed)
- Filter library by status, genre, favorites, rating
- Sort library by title, author, date added, rating

### 7. Search Functionality
- Create search form with input field
- Make API request based on search query
- Display search results
- Allow adding items from results to library
- Handle no results scenario

### 8. Item Details View
- Create detail page accessible by item ID
- Use useParams to get ID from URL
- Display full item information
- Show larger image and complete description
- Provide actions (add to library, favorite, remove)

## Development Strategy

### Phase 1: Project Foundation
1. Create React app with Vite
2. Install dependencies (react-router-dom only - no Redux)
3. Set up folder structure with context/ and hooks/ folders
4. Create basic page components (empty for now)
5. Set up routing in App.jsx
6. Test navigation between pages

### Phase 2: Context API & State Setup
1. Create LibraryContext.jsx with createContext
2. Build LibraryProvider with useState for items array
3. Add functions to add, remove, toggle favorite items
4. Wrap App with LibraryProvider
5. Test context values are accessible in components

### Phase 3: Custom Hooks
1. Create useLocalStorage hook for persisting data
2. Create useLibrary hook to consume LibraryContext
3. Create useAPI hook for fetch operations with loading/error states
4. Test hooks work correctly in components

### Phase 4: Display Library
1. Create LibraryItem component to display single item
2. Use useLibrary hook to get items from context
3. Map over items and render LibraryItem components
4. Handle empty library state with message
5. Test that hardcoded items display correctly

### Phase 5: Add Items Manually (No API Yet)
1. Create temporary form in Search page
2. Use useLibrary to add items with immutable updates
3. Verify items appear in Library page
4. Test remove and favorite functionality
5. Confirm state updates correctly without mutations

### Phase 6: API Integration
1. Choose and test API endpoint in browser
2. Implement useAPI custom hook with async/await
3. Handle loading state during fetch
4. Handle errors from API with try/catch
5. Parse API response into your item format
6. Display results with add buttons

### Phase 7: LocalStorage Persistence
1. Integrate useLocalStorage hook with LibraryContext
2. Save library items to localStorage on every update
3. Load items from localStorage on app initialization
4. Test data persists after page refresh
5. Handle edge cases (empty storage, corrupted data)

### Phase 8: Polish & Features
1. Add CSS styling for professional appearance
2. Implement favorites filtering
3. Add item details page with routing
4. Handle edge cases (duplicate items, empty searches)
5. Add proper error messages and loading states
6. Ensure all state updates are immutable

## Component Organization Best Practices

### Component Structure
- Keep components small and focused (single responsibility)
- Separate presentation components from container components
- Extract reusable UI elements into separate components
- Use clear, descriptive component names

### Props Management
- Define expected props clearly
- Use prop destructuring for readability
- Pass only necessary props to child components
- Consider prop-types or TypeScript for validation

### Event Handling
- Use descriptive handler names (handleAddItem, handleSearch)
- Keep handlers in the component that owns the state
- Pass handlers down as props when needed
- Use functional updates when depending on previous state

## Key React Hooks & Methods You'll Use

**React Hooks:**
- useState() - Local component state
- useEffect() - Side effects (API calls, localStorage)
- useContext() - Consume context values
- useCallback() - Memoize callback functions (optional)
- useMemo() - Memoize expensive calculations (optional)

**React Router:**
- BrowserRouter - Enable routing
- Routes and Route - Define routes
- Link / NavLink - Navigation links
- useNavigate() - Programmatic navigation
- useParams() - Get URL parameters

**Context API:**
- createContext() - Create context object
- Context.Provider - Provide values to component tree
- useContext() - Consume context in components

**Immutable Updates:**
- Spread operator (...) - Copy objects/arrays
- Array.map() - Transform array items
- Array.filter() - Remove items from array
- Array.concat() / [...arr, item] - Add items to array

**API Handling:**
- fetch() - Make API requests
- async/await - Handle asynchronous operations
- try/catch - Error handling
- response.json() - Parse JSON response

## Testing Your Functions

### Method 1: Chrome Developer Tools

Open DevTools (F12) and test:

**Check Context State:**
- Use React DevTools extension
- Inspect component tree
- View context values in components
- Watch state changes as you interact

**Check Routes:**
- Navigate between pages
- Check URL changes correctly
- Test back/forward browser buttons
- Verify 404 page for invalid routes

**Check LocalStorage:**
- Open Application tab in DevTools
- View localStorage entries
- Verify data saves correctly
- Test loading from storage on refresh

### Method 2: Interactive Testing

Test user scenarios:
- Search for items using API
- Add items to library
- Navigate to library and see items
- Mark items as favorites
- Filter to show only favorites
- View item details page
- Remove items from library
- Refresh page (data should persist)

### Method 3: Edge Case Testing

Test unusual scenarios:
- Search with empty query
- Search for nonsense that returns no results
- Add same item twice (should handle duplicates)
- Remove all items from library
- Navigate directly to invalid item ID
- Test on mobile screen size
- Clear localStorage and reload app

## Debugging Tips

1. **Context Not Working**: Ensure component is wrapped in Provider
2. **State Not Updating**: Check you're not mutating state directly
3. **Routing Problems**: Verify route paths match Link destinations exactly
4. **API Errors**: Log full API response to see structure
5. **LocalStorage Issues**: Check Application tab to see stored data
6. **Props Undefined**: Verify parent component is passing props correctly

## Common Pitfalls to Avoid

1. **Not wrapping app with Provider**: Context won't work without Provider in App.jsx
2. **Mutating state directly**: Always create new objects/arrays with spread operator
3. **Forgetting functional updates**: Use setState(prev => ...) when depending on previous state
4. **No loading states**: Always show loading indicators during API calls
5. **Not handling API errors**: Always try/catch API requests
6. **Hardcoding API keys in code**: Use environment variables for sensitive data
7. **Not persisting to localStorage**: Call localStorage.setItem after state updates
8. **Forgetting dependencies in useEffect**: Add all dependencies to dependency array

## API Recommendations

### Google Books API (Recommended - No Key Required)

**Search Endpoint:**
- Base URL: https://www.googleapis.com/books/v1/volumes
- Query parameter: ?q=search+term
- Example: https://www.googleapis.com/books/v1/volumes?q=javascript

**Response Structure:**
- Returns items array
- Each item has volumeInfo object with title, authors, description, imageLinks

**No API key needed** for basic usage (perfect for learning projects)

### Open Library API (Alternative)

**Search Endpoint:**
- Base URL: https://openlibrary.org/search.json
- Query parameter: ?q=search+term
- No API key required

### OMDB API (For Movies - Requires Free Key)

**Search Endpoint:**
- Base URL: http://www.omdbapi.com/
- Requires free API key from omdbapi.com
- Query parameters: ?apikey=YOUR_KEY&s=search+term

## Project Submission Checklist

Before submitting:

```
React Fundamentals:
[ ] useState used for local component state
[ ] useEffect used for side effects and API calls
[ ] At least one custom hook created and used
[ ] All hooks follow React rules

Context API & Global State:
[ ] Context Provider created and configured
[ ] useContext used to consume context values
[ ] State properly lifted and shared between components
[ ] Context wraps entire app correctly

Immutable State Updates:
[ ] Objects updated using spread operator
[ ] Nested objects updated without mutations
[ ] Arrays updated with map, filter, concat
[ ] Functional updates used when depending on previous state

React Router:
[ ] Multiple pages with proper routing
[ ] Navigation between pages works
[ ] URL parameters for item details
[ ] 404 page for invalid routes

API Integration:
[ ] Search functionality calls API
[ ] Loading states during API requests
[ ] Error handling for failed requests
[ ] API response parsed correctly
[ ] Results display in UI

Core Features (CRUD):
[ ] CREATE - Add items to library from search
[ ] READ - View library collection
[ ] UPDATE - Edit item details (title, author, status, notes)
[ ] DELETE - Remove items from library
[ ] Search for items using API
[ ] Mark items as favorites
[ ] Track reading status (want-to-read, reading, completed)
[ ] Filter by status, genre, favorites, rating
[ ] Sort by title, author, date added, rating
[ ] View item details page
[ ] LocalStorage persistence working

Component Organization:
[ ] Components have single responsibility
[ ] Props passed and managed correctly
[ ] Event handlers implemented cleanly
[ ] Reusable components extracted

Code Quality:
[ ] Components organized in folders
[ ] No unused imports or code
[ ] Error messages display to user
[ ] Responsive design works on mobile
[ ] No console errors in browser

Documentation:
[ ] README with setup instructions
[ ] README includes features list
[ ] README includes API documentation
[ ] README includes live deployment URL
[ ] Comments explain complex logic
[ ] Instructions for obtaining API key (if needed)

Deployment:
[ ] App deployed to Netlify or Vercel
[ ] Live site is accessible and functional
[ ] Environment variables configured (if needed)
[ ] Build process works without errors
```

## Bonus Features (Optional)

If you finish early or want bonus points:

### Redux Toolkit Implementation (Advanced Bonus)
1. Install @reduxjs/toolkit and react-redux
2. Create Redux store with configureStore()
3. Create slices with createSlice()
4. Replace Context API with Redux for state management
5. Use useSelector and useDispatch hooks
6. Set up Redux DevTools

### useReducer Implementation (Intermediate Bonus)
1. Replace useState with useReducer for complex state
2. Create reducer function with action types
3. Dispatch actions instead of direct state updates
4. Keep reducer pure (no mutations)

### Other Bonus Features:
1. **Search History** - Remember recent searches
2. **Item Rating System** - Let users rate items 1-5 stars (if not already implemented)
3. **Categories/Tags** - Organize items into custom categories beyond genre
4. **Notes Feature** - Add personal notes to items
5. **Performance Optimization** - Use React.memo, useMemo, useCallback
6. **Code Splitting** - Implement React.lazy and Suspense for routes
7. **TypeScript** - Add type safety to your project
8. **Dark Mode** - Theme switching with Context API
9. **Export/Import** - Download library as JSON or CSV
10. **Social Features** - Share library or recommendations

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
   - Add your API keys

### Deploying to Vercel (Alternative)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in your project directory
3. Follow prompts to deploy
4. Your site will be live at provided URL

## README Template

Your README.md should include the following sections:

```markdown
# Personal Library App

A React application for managing your personal book/movie collection with search, favorites, and reading status tracking.

## Live Demo

[View Live Site](your-deployment-url-here)

## Features

- Search for books/movies using [API Name] API
- Add items to your personal library
- Edit item details and add personal notes
- Mark items as favorites
- Track reading status (Want to Read, Reading, Completed)
- Filter and sort by various criteria
- Data persists in localStorage

## Technologies Used

- React 18
- React Router DOM
- Context API for state management
- [API Name] for book/movie data
- Vite for build tooling

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd personal-library-app
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

## API Documentation

This app uses the [API Name] API to fetch book/movie data.

- API Endpoint: [base URL]
- No API key required (or instructions to get key)
- Rate limits: [if applicable]

## Project Structure

```
src/
├── context/         # Context providers
├── hooks/           # Custom hooks
├── pages/           # Page components
├── components/      # Reusable components
└── App.jsx          # Main app with routes
```

## Future Enhancements

- User authentication
- Social sharing features
- Export library to PDF/CSV
- Book recommendations

## Author

Your Name - [GitHub Profile](link)

## License

MIT License
```

## Tips for Success

1. **Start with Context** - Get Context API working before building features
2. **Create custom hooks early** - Makes code more reusable and cleaner
3. **Test immutability** - Use React DevTools to verify state updates correctly
4. **Hardcode data first** - Test with manual data before adding API
5. **Build features incrementally** - One feature at a time, test thoroughly
6. **Use React DevTools** - Essential for debugging context and state
7. **Read API docs carefully** - Understand response structure before parsing
8. **Deploy early** - Deploy to Netlify/Vercel as soon as you have basic functionality
9. **Style last** - Get functionality working, then make it pretty
10. **Commit frequently** - Save progress after each working feature
11. **Focus on requirements first** - Bonus features are optional
12. **Write your README** - Document as you build, don't leave it for last

Good luck building your Personal Library App!
