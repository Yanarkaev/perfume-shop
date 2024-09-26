import axios from "axios";

export * from "./endpoints";

export const URL = `http://localhost:3030`;


export const api = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
