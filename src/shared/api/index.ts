import axios from "axios";

export * from "./endpoints";

export const URL = `http://192.168.0.111:3030`;


export const api = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
