# Multi-Page React Application - Assessment Rubric

## Project Overview

This rubric evaluates the Multi-Page React Application project based on intermediate React concepts, useEffect lifecycle management, custom hooks, and React Router covered in modules 055-061. Students will build a multi-page application demonstrating mastery of routing, side effects, cleanup patterns, and professional navigation systems.

### What should I make?

Build something that interests you! Consider making a **personal portfolio** showcasing your projects, **remaking a hobby app** you use regularly, or **any topic that grabs your interest** (recipe collection, movie reviews, travel blog, etc.). The site only needs to meet the technical requirements to pass - the content and theme are entirely up to you.

---

## **Must Have (Required for Passing):**

### **React Router Implementation**

- [ ] **BrowserRouter Setup** - Proper BrowserRouter configuration at application root level with Routes and Route components
- [ ] **Navigation Components** - Uses Link and/or NavLink components for internal navigation with active styling
- [ ] **Multiple Route Pages** - Creates at least 3 different pages
- [ ] **Route Configuration** - Proper route paths and component rendering with exact path matching
- [ ] **Navigation Menu** - Consistent navigation menu across all pages with active link indicators

### **useEffect/useState & Component Lifecycle**

- [ ] **useEffect Implementation** - Uses useEffect hooks for side effects including data fetching
- [ ] **Dependency Arrays** - Properly manages dependency arrays to prevent infinite loops and control effect execution
- [ ] **Cleanup Functions** - Implements cleanup functionality for API calls
- [ ] **Component Lifecycle** - No errors like infinite loops, unmount warnings, etc when affects or state is fired
- [ ] **Effect Optimization** - Uses multiple useEffect hooks with appropriate dependencies for different concerns

### **Application Architecture & State Management**

- [ ] **Component Organization** - Well-structured component hierarchy with proper file organization and naming
- [ ] **Page Components** - Separate components for each route with clear separation of concerns
- [ ] **App-level State** - Manages shared state that persists across routes using useState at appropriate levels
- [ ] **State Lifting** - Lifts state to appropriate parent components for sharing between routes
- [ ] **Data Flow** - Maintains proper unidirectional data flow between parent and child components

### **User Interface & Navigation**

- [ ] **Responsive Design** - Application works effectively on desktop, tablet, and mobile devices
- [ ] **Route Transitions** - Smooth navigation between pages with consistent layout and styling
- [ ] **Loading States** - Shows appropriate loading indicators during data fetching operations
- [ ] **Error Handling** - Handles navigation errors and provides feedback for invalid routes
- [ ] **User Feedback** - Clear visual feedback for user interactions and navigation state

### **Data Management & Side Effects**

- [ ] **Data Fetching** - Implements data fetching on at least 1 page or component using API calls
- [ ] **State Persistence** - Maintains state consistency during navigation and component re-renders
- [ ] **Form Handling** - Implements controlled forms with proper state management and submission handling
- [ ] **Dynamic Content** - Displays dynamic content that changes based on route parameters or user interactions

---

## **Could Have (Bonus Points):**

### **Enhanced Features**

- [ ] **Local Storage Integration** - Uses localStorage or sessionStorage for data persistence across sessions
- [ ] **URL Parameters & Dynamic Routes** - Implements dynamic routes with useParams hook for detail pages (e.g., /products/:id)
- [ ] **Custom Hooks** - Creates reusable custom hooks (useFetch, useLocalStorage, useAuth, etc.) in custom-hooks/ folder demonstrating hook composition
- [ ] **Protected Routes & Authentication** - Creates route protection with authentication simulation and redirect logic
- [ ] **Advanced Search & Filtering** - Implements search functionality with useSearchParams and URL parameter integration
- [ ] **Professional Polish** - Includes 404 error pages, loading animations, and advanced localStorage patterns

---

## Submission Requirements

### **Technical Requirements:**

- [ ] **Working React Application** - Complete functional multi-page app with all core navigation features
- [ ] **Component-Based Architecture** - Well-organized components following React best practices and single responsibility
- [ ] **File Organization** - One component per file with proper folder structure: pages/, components/ directories

### **User Interface Requirements:**

- [ ] **Navigation System** - Intuitive navigation menu with active states and responsive design
- [ ] **Page Layout** - Consistent layout structure across all pages with proper component composition
- [ ] **Content Pages** - Meaningful content and functionality on each route demonstrating routing concepts
- [ ] **Form Integration** - At least one page with form handling, validation, and state management
- [ ] **Responsive Design** - Mobile-first responsive design working across all device sizes

### **Code Quality Requirements:**

- [ ] **Clean Code** - Well-formatted, readable code with consistent naming conventions and organization
- [ ] **Proper React Patterns** - Correct JSX syntax, key props, component composition, and hook usage
- [ ] **Error Handling** - Graceful error handling for network requests, navigation, and user interactions
- [ ] **Documentation** - Clear README with setup instructions, routing structure, and feature descriptions

**Due Date:** Before the next Project starts
**Submission Method:** Github Repo link on #projects channel
