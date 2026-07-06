# 🚀 Frontend Mentor Challenges Portfolio

Welcome to my central repository for **Frontend Mentor** challenges! This repository serves as a professional showcase of my journey in mastering front-end web development, with a focus on building pixel-perfect, highly responsive, and accessible web interfaces.

![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-Challenges-red?style=for-the-badge&logo=frontend-mentor)
![React](https://img.shields.io/badge/React-Vite-blue?style=for-the-badge&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-utility--first-38bdf8?style=for-the-badge&logo=tailwindcss)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [🎛️ Tech Stack & Tooling](#️-tech-stack--tooling)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Running Locally](#️-running-locally)
- [🧭 Workflow for Each Challenge](#-workflow-for-each-challenge)
- [📦 Challenges List](#-challenges-list)
- [🌿 Git Strategy](#-git-strategy--branching-workflow)
- [🤝 Contributing & Contact](#-contributing--contact)
- [📄 License](#-license)

---

## 🔎 Overview

This repository is not just a collection of challenge solutions — it's a documented record of my growth as a front-end developer, focusing on:

- Writing clean, reusable, component-driven React code.
- Building responsive designs that work seamlessly across all screen sizes.
- Following accessibility (a11y) best practices and modern semantic HTML/JSX.
- Maintaining consistent code quality and formatting standards via Prettier.

Each challenge lives in its own dedicated folder, with its own setup instructions and a direct link to the live demo when available.

---

## 🎛️ Tech Stack & Tooling

| Category | Technology |
|---|---|
| **Core** | React (Vite) & JavaScript (ES6+) |
| **Styling** | Tailwind CSS — Utility-first approach for responsive design |
| **Code Quality** | Prettier — Strict formatting with exact version locks for consistency |
| **Version Control** | Git & GitHub — Structured branching workflows per challenge |

---

## 📂 Repository Structure

```
frontend-mentor-challenges/
│
├── challenge-01-name/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md          # Challenge-specific details + Live Demo link
│
├── challenge-02-name/
│   └── ...
│
├── .prettierrc
├── .gitignore
└── README.md               # This file
```

Each challenge is self-contained: it has its own Vite setup, its own dependencies, and a sub-README explaining the challenge requirements and my solution.

---

## ⚙️ Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/Origin-B/BalckBox-UI.git

# 2. Navigate into the desired challenge folder
cd BlackBox-UI/challenge-name

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

> 💡 Each challenge has its own independent `package.json`, so dependencies should be installed from inside the challenge folder, not from the repository root.

---

## 🧭 Workflow for Each Challenge

1. **Design Analysis** — Carefully study the Figma files/reference images provided by Frontend Mentor (spacing, typography, colors).
2. **Mobile-First Build** — Design the interface for small screens first, then scale up using Tailwind breakpoints.
3. **Component Breakdown** — Split the UI into small, reusable React components.
4. **Testing & Verification** — Compare the final result against the original design, and verify responsiveness and accessibility.
5. **Formatting & Review** — Run Prettier and review the code before committing.

---

## 📦 Challenges List

| # | Challenge Name | Difficulty | Live Preview | Source Code |
|---|---|---|---|---|
| 01 | *Challenge Name* | Newbie / Junior / Intermediate | [Live](#) | [Code](#) |
| 02 | *Challenge Name* | Newbie / Junior / Intermediate | [Live](#) | [Code](#) |

> 📝 This table is updated as new challenges are added.

---

## 🌿 Git Strategy & Branching Workflow

- A **dedicated branch** is created for each new challenge, following the pattern: `challenge/name-of-challenge`.
- Commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/) convention (e.g., `feat:`, `fix:`, `style:`, `docs:`).
- Branches are merged into `main` only after the challenge is complete and verified against the design.

```bash
git checkout -b challenge/nft-preview-card
# ... work on the challenge ...
git commit -m "feat: complete NFT preview card challenge"
git push origin challenge/nft-preview-card
```

---

## 🤝 Contributing & Contact

This is a personal repository for learning and documentation purposes, but feedback and suggestions are always welcome! Feel free to open an issue or reach out directly:

- 🔗 GitHub: [https://github.com/Origin-B]
- 🌐 Frontend Mentor: [https://www.frontendmentor.io/profile/Origin-B]

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Original designs and assets for each challenge are the intellectual property of **Frontend Mentor** and the respective challenge designers, and are used here strictly for educational and training purposes.

---

<p align="center">
  Built with ❤️ and a cup of coffee ☕ throughout the front-end development learning journey
</p>
