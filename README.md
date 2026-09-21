<div align="center">
  <img src="public/caesar.svg" alt="Caesar Cipher Logo" width="80" height="80" />
  <h1>Caesar Cipher Web Application</h1>
  <p><strong>An interactive, real-time cryptographic tool for exploring the classic Caesar shift cipher.</strong></p>

  <p>
    <a href="https://caesar-cipher-app-sigma.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/Live%20Demo-Visit%20App-CFB53B?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js%2013-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React%2018-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="Prettier" />
  </p>
</div>

---

## 📖 Overview

The **Caesar Cipher App** is an educational, web-based tool designed to demonstrate the fundamentals of classical substitution ciphers. In cryptography, the Caesar cipher (also known as the shift cipher or Caesar's code) operates by replacing each character in a plaintext message with a character shifted by a fixed number of positions down the character spectrum.

This application provides an intuitive dual-panel interface where users can type in either plaintext or ciphertext and watch real-time encryption and decryption take place as they tweak rotation values.

---

## ✨ Features

- **⚡ Real-Time Bidirectional Transformation**: Automatically encrypt plaintext into ciphertext, or decrypt ciphertext back into plaintext instantaneously as you type.
- **🔄 Dynamic Shift Adjustment**: Increment or decrement the rotation/shift factor on the fly; all output recalculates automatically.
- **📋 Clipboard Integration**: Built-in copy and paste controls for both plain and cipher fields, complete with non-intrusive toast notifications powered by React Toastify.
- **🔤 Extended ASCII Support**: Extends beyond standard 26-letter alphabetic rotation to handle a wider set of printable and extended ASCII characters using modular arithmetic.
- **🛡️ Input Validation & Limits**: Max character guard (up to 600 characters) and safe clipboard truncation.
- **📱 Responsive Design**: Fully responsive layout built with Tailwind CSS, delivering a clean dark-themed experience on mobile, tablet, and desktop viewports.

---

## 🧮 How It Works

The Caesar cipher applies modular arithmetic to character codes:

### Encryption
$$E_k(x) = (x + k) \pmod{M}$$

### Decryption
$$D_k(x) = (x - k) \pmod{M}$$

Where:
- $x$ is the numeric code of the input character.
- $k$ is the shift key (rotation number).
- $M$ is the modulus length of the supported character range.

In this implementation, space characters are preserved to maintain sentence readability while other characters shift circularly within the supported character spectrum.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Next.js 13](https://nextjs.org/)** | React Framework utilizing App Router for optimized rendering and bundling |
| **[React 18](https://react.dev/)** | Component-driven UI and React Context API for global state management |
| **[TypeScript](https://www.typescriptlang.org/)** | Type safety, maintainability, and enhanced developer experience |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first CSS framework for custom styling and dark UI theme |
| **[React Toastify](https://fkhadra.github.io/react-toastify/)** | User-friendly feedback toasts on clipboard copy/paste actions |
| **[React Tooltip](https://react-tooltip.com/)** | Accessible tooltips for UI control cues |

---

## 📁 Project Structure

```text
caesar-cipher-app/
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Global styling and Tailwind directives
│   ├── layout.tsx          # Root layout and metadata configuration
│   └── page.tsx            # Main landing page assembling cipher components
├── components/
│   ├── CipherTextArea.tsx  # Ciphertext input/output panel with action buttons
│   ├── InputNumber.tsx     # Rotation/shift key controls
│   └── PlaintTextArea.tsx  # Plaintext input/output panel with action buttons
├── context/
│   └── CeaserProvider.tsx  # Centralized cipher state, rotation, and handler logic
├── helpers/
│   └── index.tsx           # Encryption, decryption algorithms & constants
├── hooks/
│   └── useCeaser.tsx       # Custom hook consuming CeaserContext
└── public/
    └── caesar.svg          # Application logo asset
```

---

## 🚀 Getting Started

Follow these steps to run the application locally on your machine.

### Prerequisites

Ensure you have installed:
- **Node.js**: v18.0.0 or higher
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/alfonsoj-entwickler/caesar-cipher-app.git
   cd caesar-cipher-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `npm run dev` | `next dev` | Launches the local development server |
| `npm run build` | `next build` | Compiles the production build |
| `npm run start` | `next start` | Runs the compiled production server |
| `npm run lint` | `next lint` | Executes ESLint to check for code issues |

---

## 🌐 Deployment

The application is deployed on [Vercel](https://vercel.com/). You can check the live version here:
🔗 **[Caesar App Live Preview](https://caesar-cipher-app-sigma.vercel.app/)**

---

## 📄 License

This project was developed for didactic and educational purposes. Feel free to use, modify, and distribute it.