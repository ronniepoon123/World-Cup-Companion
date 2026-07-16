# ⚽ World Cup Companion

A React-based World Cup companion application that allows users to explore national teams, view team information, and navigate through tournament-related data.

The project is built as a modern frontend application focused on clean UI, reusable components, and interactive team browsing.

---

## 📌 Features

### 🏆 Team Directory
- Browse participating World Cup teams
- View team cards with:
  - National team logo
  - Team name
  - Basic information
  - Navigation to detailed team pages

### 🌎 Team Details Page
- Dedicated page for each team
- Displays team summary information including:
  - Team details
  - Tournament-related information
  - Key statistics

### 🎨 User Interface
- Responsive card-based design
- Hover animations for better interaction
- Clean sports dashboard-style layout
- Reusable React components

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- CSS3

### Development Tools
- Node.js
- npm

---

## 📂 Project Structure


## Running the Project

Open **two terminals in VS Code**.

### Terminal 1 – Frontend (React + Vite)

From the project root directory:

```bash
cd ~/world-cup-companion
npm run dev
```

The frontend will start and display something similar to:

```
VITE v8.x.x ready

➜ Local: http://localhost:5173
```

> If port 5173 is already in use, Vite may use another port (e.g. 5174).

---

### Terminal 2 – Backend (Express API)

From the project root directory:

```bash
cd ~/world-cup-companion
npm run server
```

The backend should start successfully and display:

```
◇ injected env (1) from .env
🚀 Server running on http://localhost:3001
```

---

### Open the application

Visit:

```
http://localhost:5173
```

(or whichever port Vite reports).

The React frontend will communicate with the Express backend running on port **3001**.
