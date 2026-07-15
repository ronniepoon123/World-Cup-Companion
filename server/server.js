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

/*
 * Root route
 */
app.get("/", (req, res) => {
  res.send("⚽ World Cup Companion API is running!");
});

/*
 * GET all competitions
 */
app.get("/api/competitions", async (req, res) => {
  try {
    const response = await footballApi.get("/competitions");
    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      error: "Failed to fetch competitions",
    });
  }
});

/*
 * GET World Cup teams
 */
app.get("/api/worldcup/teams", async (req, res) => {
  try {
    const response = await footballApi.get(
      `/competitions/${WORLD_CUP_CODE}/teams`
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      error: "Failed to fetch World Cup teams",
    });
  }
});

/*
 * GET single team details
 */
app.get("/api/worldcup/team/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await footballApi.get(`/teams/${id}`);

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      error: "Failed to fetch team details",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});