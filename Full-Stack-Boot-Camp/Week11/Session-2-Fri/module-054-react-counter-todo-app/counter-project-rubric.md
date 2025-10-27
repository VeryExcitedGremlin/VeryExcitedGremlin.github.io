# React Multi-Counter Project - Assessment Rubric

## Project Overview

This rubric evaluates the React Multi-Counter Project based on React fundamentals, component architecture, and state management covered in modules 047-053. Students will build a counter application that allows users to create named counters with customizable increment values, demonstrating mastery of reusable components, props, state management, and user interactions.

Note: Its recommended to use a component library like https://react-bootstrap.netlify.app/docs/getting-started/introduction if you are not using tailwind for styling and want to get the styling up faster.

---

## **Must Have (Required for Passing):**

### **React Components & JSX**

- [ ] **Functional Components** - Uses functional components throughout the application following proper naming conventions
- [ ] **JSX Syntax** - Proper JSX syntax with correct JavaScript expression embedding and className usage
- [ ] **Reusable Counter Component** - Creates a Counter component that can be reused for multiple counter instances
- [ ] **Counter Label Component** - Creates a separate component for displaying counter names and values

### **Props System & Data Flow**

- [ ] **Props Implementation** - Effectively passes data between parent and child components using props
- [ ] **Props Destructuring** - Uses destructuring for cleaner prop handling in components
- [ ] **Parent-to-Child Data Flow** - Demonstrates proper unidirectional data flow from parent to child
- [ ] **Dynamic Props** - Counter components receive name, value, and increment amount as props

### **State Management with useState**

- [ ] **useState Hook** - Proper implementation of useState hook for managing application state
- [ ] **Counter State Array** - Manages an array of counter objects with id, name, value, and increment properties
- [ ] **State Updates** - Correctly updates state using setter functions while maintaining immutability
- [ ] **State Lifting** - Lifts counter state to appropriate parent component for sharing between components
- [ ] **Multiple State Variables** - Manages form inputs and counter data with separate state variables

### **Event Handling & User Interaction**

- [ ] **onClick Handlers** - Implements click event handlers for increment, decrement, and delete buttons
- [ ] **onChange Handlers** - Handles form input changes for counter name and increment value inputs
- [ ] **Form Submission** - Handles form submission for creating new counters with preventDefault()
- [ ] **Event Handler Functions** - Uses arrow function syntax for event handlers and passes them as props
- [ ] **State Updates on Events** - Updates component state based on user interactions (clicks, form inputs)

### **Form Handling & Input Control**

- [ ] **Controlled Inputs** - Creates controlled form inputs for counter name and increment amount selection
- [ ] **Text Input** - Implements text input for naming counters with state management
- [ ] **Select/Number Input** - Provides input method for setting custom increment amounts (1, 5, 10, etc.)
- [ ] **Form Reset** - Clears form inputs after successful counter creation
- [ ] **Input Validation** - Prevents empty counter names and ensures positive increment values

### **Lists & Dynamic Rendering**

- [ ] **Array Rendering** - Uses .map() to render arrays of counter components dynamically
- [ ] **React Keys** - Uses unique, stable keys (counter IDs) for list items
- [ ] **Dynamic Counter Creation** - Allows users to create new counters that appear in the list
- [ ] **Empty State Handling** - Handles empty counter list with appropriate messaging or default state

### **Conditional Rendering**

- [ ] **Show/Hide Elements** - Uses conditional rendering for form visibility or empty states

- [ ] **Counter Display Logic** - Shows different content based on counter values or application state

---

## **Could Have (Bonus Points):**

### **Enhanced Features**

- [ ] **Callback Props** - Passes event handler functions as props to child components
- [ ] **Data Persistence** - Saves counter data to localStorage for persistence across sessions
- [ ] **Counter Goals** - Implements target values or goals for counters with progress indicators
- [ ] **Professional Styling** - Modern, responsive CSS design with smooth animations and transitions
- [ ] **Advanced Validation** - Comprehensive form validation with user feedback and error handling
- [ ] **Component Composition** - Properly nests and composes components following single responsibility principle
- [ ] **Dynamic Button States** - Conditionally disables buttons or changes appearance based on state

---

## Submission Requirements

### **Technical Requirements:**

- [ ] **Working React Application** - Complete functional counter app with all core features
- [ ] **Component-Based Architecture** - Well-organized components following React best practices (single component per file, naming conventions, etc)
- [ ] **Reusable Components** - Counter and label components that can be reused multiple times
- [ ] **State Management** - Proper useState implementation managing counter data and form inputs
- [ ] **User Interaction** - Full event handling for creating, updating, and managing counters

### **User Interface Requirements:**

- [ ] **Counter Creation Form** - Input fields for counter name and increment amount selection
- [ ] **Counter Display** - Clear display of counter name, current value, and increment amount
- [ ] **Counter Controls** - Buttons for increment, decrement, reset, and delete functionality
- [ ] **Responsive Layout** - Application works on desktop and mobile devices
- [ ] **Visual Feedback** - Clear indication of user actions and current state

### **Code Quality Requirements:**

- [ ] **Clean Code** - Well-formatted, readable code with consistent naming conventions
- [ ] **Proper JSX** - Correct JSX syntax with appropriate key props and className usage
- [ ] **Component Organization** - Logical component structure with single responsibility principle
- [ ] **Documentation** - Clear README with setup instructions and feature descriptions

**Due Date:** Nov 1
**Submission Method:** Github Repo link on #projects channel
