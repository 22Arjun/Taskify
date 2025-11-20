# Taskify

A simple, clean **Todo application** built with **Express.js**, **JavaScript**, **HTML**, and **CSS**. Taskify provides a minimal, user-friendly interface to add, view, and manage todos. This repository contains both the frontend (vanilla HTML/CSS/JS) and a lightweight Express backend to serve files and provide a JSON-based API.

---

## Table of Contents

* [Demo](#demo)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Running the app](#running-the-app)

  * [Development](#development)
  * [Production (build)](#production-build)
* [API Endpoints](#api-endpoints)
* [Project Structure](#project-structure)
* [Usage](#usage)
* [Persisting Data](#persisting-data)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

---

## Demo

## 🎥 Demo

### Login Page
![Login]()

### Todo Page
![Taskify UI](https://private-user-images.githubusercontent.com/76513642/516798799-c978de16-2d75-40ba-a94a-0dd13c4f22bc.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM2MzU4NDYsIm5iZiI6MTc2MzYzNTU0NiwicGF0aCI6Ii83NjUxMzY0Mi81MTY3OTg3OTktYzk3OGRlMTYtMmQ3NS00MGJhLWE5NGEtMGRkMTNjNGYyMmJjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTIwVDEwNDU0NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg1MDE1MDU2Y2Y4ZmNmYWIwZmYwMmE5ODg5YTZlYzIxMTMwOTAzN2I5ODMwOGVkMzhlZTdlNmIwZjg3NDc3MDgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.cUg4-HR68v3p5VlvWjvIb8ptmPRnKvgkJC8_hr811yA)


---

## Features

* Add new todos
* View list of todos
* Mark todos as complete (UI only or persisted depending on setup)
* Delete todos
* Simple, responsive UI

---

## Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** HTML, CSS, Vanilla JavaScript
* **Storage (optional):** In-memory (default), file-based JSON, or any database you add

---

## Prerequisites

* Node.js (v12+ recommended)
* npm (comes with Node.js)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/22Arjun/taskify.git
cd taskify
```

2. Install dependencies:

```bash
npm install
```

3. Create an `.env` file if you want to set custom environment variables (optional).

---

## Running the app

### Development

Start the Express server in development mode:

```bash
npm run dev
# or if package.json uses "start" for development:
npm start
```

Open your browser and visit: `http://localhost:3000` (port may vary depending on config)

### Production (build)

For a production deployment, ensure the server serves static files and you run with a production process manager (e.g. `pm2`) or behind a reverse proxy.

---

## API Endpoints

> These are example endpoints. The exact routing may vary depending on your implementation.

* `GET /api/todos` — Return JSON list of todos
* `POST /api/todos` — Create a new todo (expects JSON `{ "text": "Buy milk" }`)
* `PUT /api/todos/:id` — Update a todo (e.g. toggle complete)
* `DELETE /api/todos/:id` — Delete a todo

Example `curl` (creating a todo):

```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"text":"Walk the dog"}'
```

---

## Project Structure (suggested)

```
taskify/
├─ package.json
├─ server.js            # Express app entry
├─ public/              # Frontend static files
│  ├─ index.html
│  ├─ styles.css
│  └─ app.js
├─ data/                # optional file-based storage (todos.json)
└─ README.md
```

---

## Usage

* Open the app in your browser.
* Type a todo in the input field and click **Add Todo** or press Enter.
* Todos appear in the list. Use controls to mark complete or delete.

---

## Persisting Data

By default, a small starter project may use in-memory storage (loses data on restart). Consider one of these options for persistence:

* File-based JSON (`data/todos.json`) — simple and easy for prototypes
* SQLite or lowdb — lightweight embedded DBs
* MongoDB / PostgreSQL — for production-grade persistence

---

## Contributing

Contributions are welcome! Typical workflow:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit changes (`git commit -m "feat: add ..."`)
4. Push and open a pull request

Be sure to keep commits small and descriptive.

---

## License

Specify your license here (e.g., MIT). Example:

```
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## Contact

Created by **Your Name** — replace with your actual name or GitHub handle.

If you want any changes to the README (shorter, more technical, or including example code snippets), tell me and I will update it.
