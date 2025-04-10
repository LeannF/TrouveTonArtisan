const fetchFromDB = async () => {
    try {
        const res = await fetch("http://localhost:5000/artisan");
        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Erreur lors du fetch des artisans :", error);
        return [];
    }
}

export default fetchFromDB;