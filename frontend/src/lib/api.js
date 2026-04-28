import axios from "axios";

// Se VITE_API_URL está setado, usa ele. Senão, detecta dinamicamente.
let apiBaseUrl = import.meta.env.VITE_API_URL;

if (!apiBaseUrl || apiBaseUrl === "/api") {
  // Para desenvolvimento: detecta o host atual e usa :4000/api
  const host = window.location.hostname;
  const apiPort = 4000;
  apiBaseUrl = `http://${host}:${apiPort}/api`;
}

export const api = axios.create({
  baseURL: apiBaseUrl
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("renato_portfolio_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export function imageUrl(url) {
  if (!url) return "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80";
  if (url.startsWith("http")) return url;
  if (url.startsWith("/")) return url;
  return `${apiBaseUrl.replace(/\/api\/?$/, "")}${url}`;
}
