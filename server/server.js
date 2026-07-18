import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3001;
const WORLD_CUP_CODE = "WC";

app.use(cors());
app.use(express.json());

// Football Data API client
const footballApi = axios.create({
  baseURL: "https://api.football-data.org/v4",
  headers: {
    "X-Auth-Token": process.env.FOOTBALL_API_KEY,
  },
});

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
  });
});

//
// ===========================
// WORLD CUP TEAMS
// ===========================
//

app.get("/api/worldcup/teams", async (req, res) => {
  try {
    const response = await footballApi.get(
      `/competitions/${WORLD_CUP_CODE}/teams`
    );

    res.json(response.data);
  } catch (error) {
    console.error(
      "WORLD CUP TEAMS ERROR:",
      error.response?.data || error.message
    );

    res.status(500).json({
      error: "Failed to fetch World Cup teams",
    });
  }
});

//
// ===========================
// SINGLE TEAM
// ===========================
//

app.get("/api/worldcup/team/:id", async (req, res) => {
  try {
    const response = await footballApi.get(
      `/teams/${req.params.id}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(
      "TEAM ERROR:",
      error.response?.data || error.message
    );

    res.status(500).json({
      error: "Failed to fetch team",
    });
  }
});

//
// ===========================
// WORLD CUP MATCHES
// ===========================
//

app.get("/api/worldcup/matches", async (req, res) => {
  try {
    const response = await footballApi.get(
      `/competitions/${WORLD_CUP_CODE}/matches`
    );

    res.json(response.data);
  } catch (error) {
    console.error(
      "MATCHES ERROR:",
      error.response?.data || error.message
    );

    res.status(500).json({
      error: "Failed to fetch matches",
    });
  }
});

// ==========================================
// WORLD CUP STANDINGS
// ==========================================

app.get("/api/worldcup/standings", async (req, res) => {
  try {

    const response = await footballApi.get(
      `/competitions/${WORLD_CUP_CODE}/standings`
    );

    res.json(response.data);

  } catch (error) {

    console.error(
      "STANDINGS ERROR:",
      error.response?.data || error.message
    );

    res.status(500).json({
      error: "Failed to fetch standings",
    });

  }
});

//
// ===========================
// WORLD CUP BRACKET
// ===========================
//

app.get("/api/worldcup/bracket", async (req, res) => {
  try {
    const response = await footballApi.get(
      `/competitions/${WORLD_CUP_CODE}/matches`
    );

    res.json(response.data);

  } catch (error) {

    console.error(
      "BRACKET ERROR:",
      error.response?.data || error.message
    );

    res.status(500).json({
      error: "Failed to fetch bracket",
    });

  }
});

//
// ===========================
// SINGLE MATCH
// ===========================
//

app.get("/api/worldcup/match/:id", async (req, res) => {
  try {
    const response = await footballApi.get(
      `/matches/${req.params.id}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(
      "MATCH ERROR:",
      error.response?.data || error.message
    );

    res.status(500).json({
      error: "Failed to fetch match",
    });
  }
});

//
// ===========================
// START SERVER
// ===========================
//

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});