import axios from "axios";
import { LOGIN_USER } from "./types";

export function loginUser(postData) {
  const request = axios
    .post("/api/users/login", postData)
    .then((res) => res.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}
