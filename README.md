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


## Running the Backend Server

From the project root directory, start the Express backend:

```bash
cd ~/world-cup-companion
node server/server.js
```

The backend should start successfully and display:

```text
API KEY loaded: YES
🚀 Server running on http://localhost:3001
```

Make sure the `.env` file is located in the project root directory and contains the required API key:

```env
FOOTBALL_API_KEY=your_api_key_here
```

## Running the Frontend

Open another terminal window and run:

```bash
cd ~/world-cup-companion
npm run dev
```

Then open the local development URL provided by Vite, usually:

```text
http://localhost:5173
```

