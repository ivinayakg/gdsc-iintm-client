import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export default axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${import.meta.env.VITE_API_SECRET_TOKEN as string}`,
  },
});
