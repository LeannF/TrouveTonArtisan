const API_URL = "http://localhost:5000/artisans";

export async function getArtisans() {
  const res = await fetch(API_URL);
  return res.json();
}