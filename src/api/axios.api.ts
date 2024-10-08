import { getTokenFromSessionStorage } from "@/helpers/localstorage.helper";
import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    Authorization: `Bearer` + getTokenFromSessionStorage(),
  },
});
