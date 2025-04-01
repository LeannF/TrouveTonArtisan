const API_URL = "http://localhost:3000/artisans";

export async function getArtisans() {
  const res = await fetch(API_URL);
  return res.json();
}

