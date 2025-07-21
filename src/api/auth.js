import { API_URL } from "../config/config";

export async function login_api(email, password) {
  const res = await fetch(API_URL + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (res.ok) {
    const data = await res.json();
    return data.data.access_token;
  } else {
    return false
  }
}

export async function register_api(email, password) {
  const res = await fetch(API_URL + "/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  
  if (res.ok) {
    return true
  }
  return false
}
