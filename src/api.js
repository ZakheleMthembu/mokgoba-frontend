import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Example request to test
export const testConnection = async () => {
  try {
    const res = await api.get("/");
    return res.data;
  } catch (error) {
    console.error("Backend error:", error);
  }
};

export default api;
