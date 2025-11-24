# Major Project #3

# React State Management Application - Assessment Rubric v2

## Project Overview

This rubric evaluates the React State Management Application based on React hooks, Context API, and immutable state patterns covered in modules 063-069. Students will build a comprehensive React application demonstrating proficiency with useState, useEffect, Context API, and immutable state updates. Advanced patterns like useReducer and Redux Toolkit are optional bonus features.

### Project Options

**Option A: Personal Library App**
An app for managing books or movies, favorites, and if they have been viewed or read. Will utilize routing, hooks, and localstorage! Integrates one or more APIs.

**Option B: Mini Game**
Design an interactive game like memory or tic-tac-toe using React components, hooks for state management, routing between levels or screens, and local storage for saving player progress. Integrates one or more APIs.

---

## **Must Have (Required for Passing):**

### **React Fundamentals**

- [ ] **useState Hook** - Manage local component state effectively
- [ ] **useEffect Hook** - Handle side effects, API calls, and component lifecycle
- [ ] **Custom Hooks** - Create at least one reusable custom hook that encapsulates logic

### **Context API & Global State**

- [ ] **Context Provider Setup** - Create and configure Context providers for application-wide state (theme, user preferences, or app data)
- [ ] **useContext Implementation** - Consume context values across multiple components
- [ ] **State Lifting** - Properly lift and share state between components

### **Immutable State Updates**

- [ ] **Object Updates** - Update object state immutably using spread operator
- [ ] **Nested Object Updates** - Handle nested object updates while maintaining immutability
- [ ] **Array Operations** - Add, remove, and update array items using immutable methods (map, filter, etc.)
- [ ] **Functional Updates** - Use functional state updates when depending on previous state

### **Core Application Features**

- [ ] **API Integration** - Fetch and manage data from external APIs
- [ ] **React Router** - Implement multi-page navigation with at least 3 routes
- [ ] **LocalStorage Integration** - Persist user data and preferences using localStorage
- [ ] **Error Handling** - Implement try/catch blocks, loading states, and user-friendly error messages

### **Component Organization & Best Practices**

- [ ] **Component Structure** - Well-organized components with single responsibility
- [ ] **Props Management** - Proper prop passing and prop validation
- [ ] **Event Handling** - Clean event handler implementation with proper binding

### **Project Standards**

- [ ] **Clean Repository** - Meaningful commits and organized folder structure
- [ ] **README Documentation** - Setup instructions, features list, and API documentation
- [ ] **Live Deployment** - Working deployed version accessible via URL
- [ ] **Component Architecture** - Well-structured components following React best practices

---

## **Advanced Features (Bonus Points):**

### **Redux Toolkit Implementation** (Optional)

- [ ] **Store Configuration** - Set up Redux store using configureStore() with proper middleware
- [ ] **Slice Creation** - Create Redux slices using createSlice() for different feature areas
- [ ] **useSelector/useDispatch** - Use hooks to access state and dispatch actions with proper action creators
- [ ] **Async State Management** - Handle async operations using Redux Thunk for API calls
- [ ] **Redux DevTools** - Set up and use Redux DevTools for debugging state changes

### **useReducer Implementation** (Optional)

- [ ] **Complex State Management** - Use useReducer for managing complex state objects with multiple related values
- [ ] **Pure Reducer Functions** - Write proper reducer functions that handle different action types

### **Performance Optimization**

- [ ] **Code Splitting** - Implement React.lazy and Suspense for route-level code splitting
- [ ] **Context Optimization** - Optimize Context API usage to prevent unnecessary re-renders
- [ ] **Component Memoization** - Use React.memo, useMemo, or useCallback appropriately

### **Advanced Patterns**

- [ ] **Error Boundaries** - Add error boundaries to handle component errors gracefully
- [ ] **Loading States** - Implement comprehensive loading and error states throughout the app

---

## **Project-Specific Requirements**

### **Option A - Personal Library App Must Include:**

- [ ] **CRUD Operations** - Add, edit, delete, and search for books/movies with state management
- [ ] **Favorites System** - Mark items as favorites with persistent state management
- [ ] **Status Tracking** - Track read/unread or watched/unwatched status
- [ ] **Advanced Filtering** - Filter and sort library by status, genre, rating, or other criteria

### **Option B - Mini Game Must Include:**

- [ ] **Game Logic** - Core game mechanics (memory matching, tic-tac-toe moves, etc.) managed through state
- [ ] **Player Progress** - Save game progress, scores, and achievements using state management
- [ ] **Multi-Screen Navigation** - Navigate between game levels, menus, settings, and game screens
- [ ] **Interactive Components** - Reusable game components (cards, board tiles, buttons) with proper event handling

---

## Submission Requirements

**Due Date:** <Changed By Instructor>
**Submission Method:** Github Repo link on #projects channel
