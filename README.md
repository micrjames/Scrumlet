# Scrumlet
A desktop Scrum workflow manager for solo developers, built with Electron and PostgreSQL.

## Table of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
Scrumlet is a solo Scrum workflow tool built for developers who want to manage their personal projects using Scrum principles. This initial phase focuses on project planning, repository setup, documentation, and defining the application’s architecture and purpose.

## Technologies Used
*Note: No code is implemented yet, but the planned stack includes:*
- **ElectronJS**: Desktop app framework based on Chromium and Node.js
- **React**: Frontend UI library
- **TypeScript**: Typed superset of JavaScript for better developer tooling
- **Tailwind CSS**: Utility-first CSS framework
- **PostgreSQL**: Relational database for structured local storage
- **Node.js**: JavaScript runtime environment for backend logic

## Features
- Project vision and feature scope defined
- Git repository created and initialized
- Project structure and roadmap outlined
- Technology stack selected
- Initial backlog and user workflows defined
- Documentation and README written

## Setup
1. Create and initialize the local repository:
   ```bash
   mkdir scrumlet && cd scrumlet
   git init
   ```

2. Add this README and any initial planning documents:
   ```bash
   touch README.md PLAN.md
   git add .
   git commit -m "Initial project planning and documentation"
   ```

3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/scrumlet.git
   git push -u origin main
   ```

4. Set up `.gitignore`:
   ```bash
   echo "node_modules/\ndist/\n.env" > .gitignore
   ```

## Usage
This stage is focused entirely on establishing the foundation for development. Use the documentation to align on goals, tasks, features, and future directions.

## Project Status
The project has been successfully initialized. All planning documentation, tech stack decisions, and initial organizational setup are complete.

## Room for Improvement
- Add wireframes and user flow diagrams
- Set up project management tools (e.g., GitHub Projects, labels)
- Prepare CI/CD and code linting tools for future development

## Contact
For questions, ideas, or contributions:
- **Michael James**: [michaelrjamesjr@icloud.com](mailto:michaelrjamesjr@icloud.com)
- **GitHub**: [micrjams](https://github.com/micrjams)
