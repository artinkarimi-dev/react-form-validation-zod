<div align="center">

# 🛡️ Secure Form Validation & UX Engine

**A robust, schema-driven authentication interface demonstrating modern state validation patterns.**

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Zod](https://img.shields.io/badge/Zod_Validation-3068B7?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## 📖 Overview

**Secure Form Validation Engine** is a precision-engineered frontend implementation that prioritizes **data integrity** and **user feedback**.

This project serves as a technical showcase for integrating **Zod** as a "Single Source of Truth" for validation logic, decoupled from the UI layer. It orchestrates a seamless user experience by combining real-time schema parsing with immediate visual feedback loops using `react-hot-toast` and `sweetalert2`.

> The core philosophy here is **Defensive Programming**: ensuring that no malformed data ever leaves the client-side, wrapped in a polished, glassmorphism-style UI.

---

## ✨ Key Features

- **Schema-First Validation:** All validation logic is centralized in a Zod schema (`loginSchema`), enforcing strict typing and Regex policies.
- **Asynchronous Feedback Loops:** Sophisticated handling of "Loading," "Error," and "Success" states using `react-hot-toast`.
- **Modal Interactions:** Clean, native-feeling success prompts powered by **`sweetalert2`**.
- **Modern UI Architecture:** Fully responsive Glassmorphism design using Tailwind CSS v4 utility classes.
- **Accessibility Focus:** Unique ID generation via React's `useId` hook to prevent label collisions.

---

## 🛠 Tech Stack

| Category          | Technology                         |
| ----------------- | ---------------------------------- |
| **Core**          | React 19 (Functional Components)   |
| **Validation**    | Zod v4 (Schema & Type Safety)      |
| **Styling**       | Tailwind CSS v4 (PostCSS)          |
| **Notifications** | React Hot Toast (Toast UX)         |
| **Alerts**        | **SweetAlert2** (Modal UX)         |
| **Build Tool**    | Vite v7                            |

### 💡 Technical Highlights

1. **Decoupled Logic:** The validation rules (`min`, `max`, `regex`) are completely separated from the component render cycle.
2. **Defensive Regex:** Implemented complex Regex patterns to enforce strict password complexity (Upper/Lower/Special/Number) and email RFC compliance.
3. **Safe Parsing:** Utilizing `loginSchema.safeParse()` to handle validation errors gracefully without crashing the render tree.
4. **Transient UX States:** Managing the micro-interactions between hitting "Register" and receiving server confirmation.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/artinkarimi-dev/react-form-validation-zod.git
```

### 2. Install Dependencies
```bash
cd react-form-validation-zod
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```

---

### 🎯 Learning Outcomes & Proficiency
This repository demonstrates practical mastery over the modern React ecosystem’s auxiliary libraries:

- **Zod Implementation:** Moving beyond simple `if/else` checks to a declarative, schema-based validation architecture.
- **UX Engineering:** Orchestrating `react-hot-toast` to provide non-blocking, immediate feedback to users.
- **Third-Party Integration:** Seamlessly implementing `sweetalert2` for critical user alerts.
- **React 19 Best Practices:** Utilizing strict mode and modern hooks for a clean, memory-leak-free codebase.

<br />

<div align="center">
  <a href="https://github.com/artinkarimi-dev">
<img src="https://img.shields.io/badge/GitHub-Profile-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile" />
  </a>
</div>
