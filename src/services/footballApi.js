const API_BASE =
  import.meta.env.VITE_API_URL ||
  "http://localhost:3001/api/worldcup";

async function request(endpoint) {
  const response = await fetch(`${API_BASE}${endpoint}`);

  if (!response.ok) {
    throw new Error("Unable to load data.");
  }

  return response.json();
}

// ======================
// Teams
// ======================

export async function getTeams() {
  return request("/teams");
}

export async function getTeam(id) {
  return request(`/team/${id}`);
}

// ======================
// Matches
// ======================

export async function getMatches() {
  return request("/matches");
}

export async function getMatch(id) {
  return request(`/match/${id}`);
}

// ======================
// Standings
// ======================

export async function getStandings() {
  return request("/standings");
}

// ======================
// Knockout Bracket
// ======================

export async function getBracket() {
  return request("/bracket");
}