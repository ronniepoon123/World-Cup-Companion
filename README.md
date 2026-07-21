# 🏆 World Cup Companion

A modern React web application for following the **FIFA World Cup 2026**.

The application provides fixtures, results, standings, knockout bracket, team information and detailed match pages through the Football-Data.org API.

**Live Demo:** https://world-cup-companion-amber.vercel.app/

---

## Features

### 🏠 Dashboard
- Banner for FIFA World Cup 2026
- Live matches
- Upcoming fixtures
- Latest results
- Quick Access navigation

### ⚽ Fixtures
- Complete World Cup fixture list
- Live, scheduled and finished match status
- Team crests
- Scores
- Match stage
- Kick-off time
- Matchday
- Click any fixture to view detailed match information

### 📊 Match Details
Each match contains:
- Competition
- Match status
- Team crests
- Final score
- Stage
- Matchday
- Kick-off time
- Responsive hero layout

### 👥 Teams
- Browse all participating nations
- Team crests
- Country information
- Individual team pages

### 📈 Standings
- Group standings
- Wins
- Draws
- Losses
- Goals scored
- Goals conceded
- Goal difference
- Points

### 🏟 Knockout Bracket
- Round of 16
- Quarter-finals
- Semi-finals
- Third Place Play-off
- Final
- Champion card displaying the tournament winner
- Winning teams highlighted throughout the bracket

---

## Built With

### Frontend
- React
- React Router
- Vite
- CSS3

### Backend
- Node.js
- Express.js
- Axios
- dotenv

### API
- Football-Data.org REST API

### Deployment
- Git
- GitHub
- Vercel

---

## Project Structure

```
world-cup-companion
│
├── src
│   ├── components
│   │   ├── Bracket
│   │   ├── Dashboard
│   │   ├── match
│   │   ├── Navbar
│   │   └── Team
│   │
│   ├── pages
│   │   ├── HomePage
│   │   ├── FixturesPage
│   │   ├── MatchPage
│   │   ├── KnockoutPage
│   │   ├── StandingsPage
│   │   └── TeamPage
│   │
│   ├── services
│   │
│   └── App.jsx
│
├── server
│   ├── server.js
│   └── routes
│
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/ronniepoon123/World-Cup-Companion.git
```

Move into the project

```bash
cd World-Cup-Companion
```

Install dependencies

```bash
npm install
```

Create a `.env` file inside the project root

```env
FOOTBALL_API_KEY=YOUR_API_KEY #get from football-data.org
```

---

## Running the Project

Start the backend

```bash
npm run server
```

Start the frontend

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

## Future Improvements

- Live match auto-refresh
- Match statistics
- Player line-ups
- Stadium information when available
- Search and filter fixtures
- Dark mode
- Tournament statistics dashboard
- Favourite teams
- Match notifications

---

## Author

Developed by **Ronnie Poon**