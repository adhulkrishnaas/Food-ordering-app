# Food Ordering Web Application

A production-ready React web application engineered with modern front-end engineering principles, automated unit/integration testing, centralized state management, and optimized performance patterns. Built to simulate a real-world, high-traffic food ordering platform by integrating live delivery APIs, modular architecture, and thorough test coverage.

---

## Technical Architecture & Core Tech Stack

| Domain                     | Technology / Pattern                                            |
| :------------------------- | :-------------------------------------------------------------- |
| **Frontend Framework**     | React 18 (Functional Components, Custom Hooks, Context API)     |
| **State Management**       | Redux Toolkit (Centralized Slices, Actions, Selectors)          |
| **Routing & Navigation**   | React Router DOM (Dynamic Parametric Routing, Error Boundaries) |
| **Styling & UI**           | Tailwind CSS (Utility-First Design, Responsive Layouts)         |
| **Testing Infrastructure** | Jest, React Testing Library (RTL), Integration & Mock Workflows |
| **Build & Bundling**       | Parcel (Module Bundling, Code Splitting, Asset Optimization)    |
| **Performance Engine**     | Code Splitting (`React.lazy`, `Suspense`), Custom React Hooks   |

---

## Engineering Highlights & Quality Assurance

### 1. Enterprise-Grade Automated Testing & QA Suite

- **Comprehensive Component Testing:** Isolated testing of critical UI components including `Header`, `RestaurantCard`, and `ContactUs` using Jest and React Testing Library.
- **End-to-End Search Integration:** Simulated live DOM interactions to validate search flow algorithms, real-time input filtering, and dynamic UI state re-renders.
- **Runtime Crash Defense:** Defensive code structures verified against API failures, empty search results, missing response objects, and unexpected payload structures.
- **Deterministic API Mocking:** Intercepted network calls with custom mock data to execute automated test suites reliably without external API dependencies or rate limits.

### 2. Scalable State Architecture & Custom Hooks

- **Redux Toolkit Integration:** Scalable global state handling complex cart workflows (item addition/removal, quantity synchronization, and selector performance).
- **React Context API:** Clean dependency injection for app-wide global metadata without prop-drilling.
- **Custom React Hooks:** Encapsulated business logic into reusable hooks:
  - `useRestaurantMenu`: Fetches and normalizes restaurant menu structures.
  - `useOnlineStatus`: Listens to browser network events to handle online/offline fallbacks.
  - `useRestaurantList`: Handles initial payload loading and fallback states.

### 3. Advanced Design Patterns & Performance Optimization

- **Higher-Order Components (HOF):** Extended core `RestaurantCard` components with dynamic behavioral labels without modifying core component logic.
- **Code Splitting & Lazy Loading:** Applied `React.lazy` and `Suspense` to heavy routes to minimize initial bundle size and maximize First Contentful Paint (FCP) metrics.
- **Dynamic Client-Side Routing:** Dynamic parametric routing (`/restaurant/:resId`) rendering granular menu pages on demand.
- **Clean Code & Git Hygiene:** Tracked asset boundaries, excluded cache layers (`.parcel-cache`), and maintained strict atomic commit discipline.

---

## Core Features & System Capabilities

- ⚡ **Live Search & Filter Engine:** Real-time search indexing operating over live API restaurant data.
- 🛒 **Dynamic Cart Management:** Synchronized global state across cart counters, item lists, and order totals.
- 📋 **Collapsible Menu Accordions:** Modular menu category breakdowns with controlled component states.
- 📡 **Live API Integration:** Asynchronous data pipelines parsing nested Swiggy live endpoint schemas.
- 📶 **Network Connectivity Detector:** Real-time notifications alerting users to connection state changes.

---

## Project Setup & Local Execution

### Prerequisites

- **Node.js:** `v16.x` or higher
- **npm:** `v8.x` or higher

### Installation & Setup Steps

1. **Clone the Repository**

   ```bash
   git clone [https://github.com/adhulkrishnaas/Food-ordering-app.git](https://github.com/adhulkrishnaas/Food-ordering-app.git)
   cd Food-ordering-app

   1.Install Dependencies
        npm install

   2.Launch Local Development Server
        npm start

    3.Execute Unit & Integration Tests
        # Run all Jest test suites
        npx jest

        # Run tests in watch mode
        npx jest --watch

        # Generate code coverage reports
        npx jest --coverage
   ```

Directory Structure
├── src/
│ ├── components/
│ │ ├── **tests**/ # Component unit and integration test specs
│ │ ├── Header.js
│ │ ├── RestaurantCard.js
│ │ ├── Contact.js
│ │ └── ...
│ ├── utils/ # Custom hooks, Redux store, slices, and context
│ ├── App.js # Main layout and client-side router configuration
│ ├── index.html # Parcel entry point
│ └── index.css # Tailwind directive configuration
├── .gitignore
├── package.json # Project metadata, dependencies, and build scripts
└── babel.config.js # Babel transformations for Jest and JSX
