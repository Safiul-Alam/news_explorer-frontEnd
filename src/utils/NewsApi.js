const API_KEY = "f65337d8e0d24850932813f45c026477";
const today = new Date().toISOString().split("T")[0];
const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .split("T")[0];

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export function fetchNewsArticles(keyword) {
  return fetch(
    `${BASE_URL}?q=${keyword}&from=${lastWeek}&to=${today}&pageSize=100&apiKey=${API_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch news articles.");
      }
      return response.json();
    })
    .then((data) => data.articles)
    .catch((error) => {
      console.error("Fetch error:", error);
      throw new Error("An error occurred while fetching news articles.");
    });
}
